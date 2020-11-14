require('dotenv').config()
const fetch = require('node-fetch')
const waait = require('waait')
const fs = require('fs')
const json2xls = require('json2xls')

const CX = process.env.CX
const API_KEY = process.env.API_KEY
const QUERY = encodeURIComponent('reactjs patterns')
const ONE_SECOND = 1000

const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${QUERY}`

let result = [];

async function search(start = 1, perPage = 10) {
    const concatPagination = `${url}&start=${start}&num=${perPage}`

    console.log(concatPagination)

    await waait(ONE_SECOND)

    fetch(concatPagination)
        .then(response => response.json())
        .then(json => {
            if (json.items && json.items.length) {
                result = [
                    ...result,
                    ...json.items
                ]

                const nextPage = json.queries.nextPage ? json.queries.nextPage[0] : false

                if (nextPage) {
                    search(nextPage.startIndex, nextPage.count)
                } else {
                    fs.writeFileSync('result.xls', json2xls(result), 'binary')
                    console.log(result.length)
                }
            } else {
                console.error(json)
            }
        })
        .catch(error => console.error(error))
}

search();