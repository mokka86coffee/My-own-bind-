Function.prototype.bind2 = function (_this, ..._args) {
    const fn = this;
    return (...args) => fn.apply(_this, _args.concat(args)); 
}

let fn = function (a,b) { 
    return arguments.length >= fn.length ? a + b : fn.bind2(null, a);
}

console.log(fn(1,2)); // 3
console.log(fn(1)(2)); // 3
