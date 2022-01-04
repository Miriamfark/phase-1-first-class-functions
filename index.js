function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction() {
    return  function namedFunction() {
        console.log("Yes!")
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log("Yes!") 
} 
