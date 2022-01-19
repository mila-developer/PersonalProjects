//console.group("our messages") //agrupar mensagens
console.groupCollapsed("our messages") //agrupar mensagens fechado
console.log("hello, world!");
console.error("I'm a error");
console.warn("I'm a warner");
var num = 12;
if(num>10){
    console.log("the number can't be more longer than 10");
}
console.assert(num<=10, "the number can't be more longer than 10"); //garanti que esteja acontecendo
console.groupEnd();

console.table([
    [1, 2, 3],
    [2, 4, 6]
])

console.table ([
    {name: "Brad", age: 1},
    {name:"Camila", age: 25}
])