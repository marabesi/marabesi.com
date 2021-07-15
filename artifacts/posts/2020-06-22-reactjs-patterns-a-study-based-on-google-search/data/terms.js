function rawText() {
    return "element,component,expressions,props,defaultProps, destructuring props,jsx spread att,Merge destructured props with other values, Conditional rendering,Children types,Array as children,Function as children,render prop,Children pass-through,Proxy component,Style component,Event switch,Layout component,Container component,Higher-order component,State hoisting,Controlled input composition stateful, stateless, presentational, container, data down actinos up, Compound Components, Higher-Order-Component, Render Props, Prop Collections and Getters, State Initializers, Controlled Components, Provider Compound Component, Render props, controlled components, state reducer, higher order components render props The Vanilla or Mixed Pattern, The Container / View Pattern, The Container / Branch / View Pattern, Higher Order Components, Branching Higher Order Components, Render props, Provider pattern Higher-Order-Components, Render props Communication (input, output), Composition,Higher-order-component, Dependency injection, One-way direction data flow, Stateful x Stateless Components, Container x Presentational Components, Higher-Order-Component, Render Callbacks Conditional Render, Passing Down Props, Destructuring Props, Provider Pattern, High-Order-Component, Render Props Condition with 1 branch - short-circuit operator, Complex condition - extract into function, Complex branches - extract into function, Condition with 2 branches - ternary operator, Conditions with >2 branches, Repeatable conditions - HOC stateless, styles module, style functions, base component, higher-order-component Container/View Pure functions, Higher-order Functions, Higher-order-Component, Functional, Stateless Components, Components fetch their own data, Higher-Order-Componernt fetch data and propagate to children, Generic fetcher component, Fetching data with React Hooks, Sending data down and up, inputs, Controlling CSS with props, Standalone, Higher-Order-Component, with hook, render props, redux custom middleware hooks Higher-Order-Component, render props, Compound components, Control props, Props collection, Prop getters, State initializer, State reducer Macros, Element attributes and string only translations, Translations outside React components, Lazy translations Container Pattern, hooks Presentational/container components, Render Props, The Flux pattern of stage-management Higher-Order-Component, Render Props, Hooks prop passing, context, multiple contexts, redux Decorated Components hooks, context Controller View Pattern Compound components, context Redux Container Pattern, presentational component React createClass Components, React Mixins, React Class Components, React Higher-Order-Component, React Function Components hooks (moedl, view, controller) Model View Controller Pattern, controller components, view components, Container and Presentational Components Provider pattern, Context Adapter pattern, Dependency injection Filters, Theme style, Components Mount / UnMount, State + DidUpdate, Element MVVM, view controller, view model, provider, model Components, Higher-Order-Component, static component, Branching, mapProps, computeProps hooks, recursive components State Reducer Pattern, render props Context, Dependency Injection hooks components, reusability, stateful render callback context, ducks pattern, reduxsauce state, hooks communication, props, instance methods, callback functions, event bubbling, parent component, observe pattern, context BLoC Pattern flux, redux,single source of truth,state is read-only stateful, stateless, rest/spread, Destructure jsx, components, props, prop types, state, component life cycle inheritance, composition, decorators, mixins strategy pattern State Management, hooks Fiber, higher-order-component, render props, lazy loading, hooks Model view controller, publish subscribe, context, redux, error boudary, composition, inheritance";
}

function cleanText() {
    var common = "advanced,design,blog,react,patterns,pattern,js,poop,i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall";
    var text_string = rawText()

    text_string = text_string.toLowerCase();
    text_string = text_string.replace(/\W/g, ' ');
    text_string = text_string.replace(/\./g, '');

    for (let word of common.split(',')) {
        var reg = new RegExp('/' + word.trim() + '/', 'g')
        text_string = text_string.replace(reg, '');
    }

    text_string = text_string.replace(/components/g, 'component');
    text_string = text_string.replace(/higher order component/g, 'HoC');

    return text_string
}

// https://stackoverflow.com/a/30906900/2258921
function mostFrequent() {
    var string = cleanText();
    var words = string.replace(/[,]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function (w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
}

function rankMostFrequent() {
    var strings = mostFrequent();
    var sortable = [];

    for (var word in strings) {
        sortable.push({ name: word, value: strings[word] });
    }

    return sortable
}