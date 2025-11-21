//---------------  Övning 2 ----------------

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
var har Function Scope, det gör att den struntar i blocket{...}. let och const har block scope och
finns inte tillgängliga utanför blocket.

Inne i blocket: Alla tre variabler fungerar som de ska.
let och const har block scope, så de är tillgängliga inuti blocket.
var har function scope.

Efter blocket: Återigen kraschar programmet för let och const, men var -fungerar som det ska.
var har function scope, vilket gör att den är tillgänglig utanför blocket.
*/

//---------------  Övning 3 ----------------

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

2. Med en ternary operator omvandlas värdet till en bool.
   Eftersom undefined är ett "falsy" värde, väljer koden det andra alternativet.

   NaN står för Not a Number och är inte lika med något, inte ens sig själv.
   Undefined är en variabel som inte har blivit tilldelad något värde.
   Null är ett deklarerat tomt värde, kan användas för att nollställa en variabel.
*/

//---------------  Övning 4 ----------------

let name = "Nellie"; // Global variabel

console.log("Före: " + name); // Utskrift: Nellie

// Jag valde en Funktionsdeklaration
function greet(name) {
    // Här inne är 'name' parametern, inte den globala variabeln
    return "Hej " + name;
}

// Anrop med argumentet "Fredrik"
console.log(greet("Fredrik")); 

console.log("Efter: " + name); // Utskrift: Nellie (Globala variabeln är oförändrad)

/* Reflektion Uppgift 4:

1. Jag valde en vanlig funktionsdeklaration för att det kändes enklast. 
   Skillnaden mot arrow-funktioner och uttryck är hur man skriver dem och hur de laddas.

2. Eftersom jag valde en deklaration kan jag anropa funktionen var som helst, även innan den skapats i koden. 
   Dom andra sätten kräver att funktionen skapas före man anropar.

3. Inuti funktionen gäller parametern "name", den krockar inte med variabeln "name" som ligger utanför. 

4. Variabel = Behållare för data.
   Parameter = Namnet vi sätter i funktionens parentes.
   Argument = De värdet ("Fredrik") vi skickar in när vi kör funktionen.
*/
