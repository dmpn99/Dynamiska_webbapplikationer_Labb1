// Övning 2

//console.log("Före blocket:" + testLet); // Fungerar inte
//console.log("Före blocket:" + testConst); // Fungerar inte
//console.log("Före blocket:" + testVar); // Fungerar men variabeln blir undefined


{
   let testLet = "Testar variabeln let";
    const testConst = "Testar variabeln const";
    var testVar = "Testar variabeln var";

    console.log(testLet); // Fungerar
    console.log(testConst); // Fungerar
    console.log(testVar); // Fungerar
    
}


//console.log("Efter blocket:" + testLet); // Fungerar inte
//console.log("Efter blocket:" + testConst); // Fungerar inte
console.log("Efter blocket:" + testVar); // Fungerar

/* Reflektion:
Före blocket: Den enda variabeln som programmet inte kraschar av är var -den blir undefined.

Inne i blocket: Alla tre variabler fungerar som de ska.

Efter blocket: Återigen kraschar programmet för let och const, men var -fungerar det som det ska.
*/

// Övning 3

console.log(3==3); // Lös jämförelse - True
console.log(3===3); // Strikt jämförelse - True

console.log('3'==3); // Lös jämförelse - True
console.log('3'===3); // Strikt jämförelse - False

console.log(NaN==NaN); // Lös jämförelse - False
console.log(NaN===NaN); // Strikt jämförelse - False

console.log(null==undefined); // Lös jämförelse - True
console.log(null===undefined); // Strikt jämförelse - False

const test = undefined ? "truthy" : "falsy";
console.log(test);

/* Reflektion: 
1. Skillnaden mellan == och === är att === kräver samma datatyp,
    medans == försöker omvandla typerna. 

2. En ternary operator omvandlas värdet till en bool.
   Eftersom undefined är ett "falsy" värde, väljer koden det andra alternativet.

   NaN står för Not a Number och är inte lika med något.
   Undefined är en variabel som inte är deklarerad.
   Null är ett deklarerat tomt värde.
*/

// Övning 4
let name = "Nellie";

console.log("Före " + name); // Resultat Nellie

function greet(name)
{
    console.log("Inuti " + name); // Resultat Fredrik
    return "Som return " + name; // Reultat Fredrik
}
console.log(greet("Fredrik")); // Resultat Fredrik


