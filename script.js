
console.log("Före blocket:" + testLet); // Fungerar inte
console.log("Före blocket:" + testConst); // Fungerar inte
console.log("Före blocket:" + testVar); // Fungerar men variabeln blir undefined


{
   let testLet = "Testar variabeln let";
    const testConst = "Testar variabeln const";
    var testVar = "Testar variabeln var";

    console.log(testLet); // Fungerar
    console.log(testConst); // Fungerar
    console.log(testVar); // Fungerar
    
}


console.log("Efter blocket:" + testLet); // Fungerar inte
console.log("Efter blocket:" + testConst); // Fungerar inte
console.log("Efter blocket:" + testVar); // Fungerar

/* Sammanfattning:
Före blocket: Den enda variabeln som programmet inte kraschar av är var -den blir undefined.

Inne i blocket: Alla tre variabler fungerar som de ska.

Efter blocket: Återigen kraschar programmet för let och const, men var -fungerar det som det ska.
*/

