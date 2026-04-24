let items = [ "Sugar" , "Bread" , "Lentils"]
console.log(items.length);

if (items.includes("Milk")) {
    console.log("Milk is in the list");
    
} else{
    items.unshift ("Milk");
    console.log(items);
    
}
 
