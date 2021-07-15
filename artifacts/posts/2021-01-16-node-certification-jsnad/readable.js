const fs = require('fs')
const csv = require('csv')

console.time('stream_file')

fs.readFile('./dump.csv', (error, content) => {
  if (error) {
    throw error
  }

  const generator = csv.parse(content)
  
  generator.on('readable', function(){
    while(data = generator.read()){
      console.log(data)
    }
  });
  
  generator.on('end', function(){
    console.timeEnd('stream_file')
    console.log('finished')
  });
})
