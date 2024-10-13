const add = (a,b)=>{
    return a+b;
};

module.exports = add;

//instead we can do is directly write the module.exports like this

module.exports = (a,b) => a + b;

//we can export objects also
//we can use exports keywords also