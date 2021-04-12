//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var sequence = [];

for (i = 1; i <= 100; i++) {
    console.log(i);

    var multiplo3 = i % 3 === 0;
    var multiplo5 = i % 5 === 0;
    var multiplo3e5 = i % 3 === 0 && i % 5 === 0;
    
    if (i % 3 === 0 && i % 5 === 0) {
        document.writeln("FizzBuzz");

    } else if (i % 3 === 0) {
        document.writeln("Fizz");

    } else if (i % 5 === 0) {
        document.writeln("Buzz");
     
    } else {
        document.writeln(i);
    }    

    sequence.push(i)
}

console.log(sequence)


