

let nValue = document.getElementById("inputNumber");

function double() {
    document.getElementById("result").innerHTML = nValue.value * 2;
}


function calc(yearOfBirth) {
    let currentDate = new Date();

    currentDate = currentDate.getFullYear()

    document.getElementById("alter").innerHTML = currentDate - yearOfBirth;
}

function compareAge(personA, personB) {
    let difference

    if (personA > personB) {
        difference = personA - personB;
        document.getElementById("comparison").innerHTML = "Person 1 ist " + difference + " Jahre älter als Person 2";

    } else if (personA < personB) {
        difference = personB - personA;
        document.getElementById("comparison").innerHTML = "Person 1 ist" + difference + " Jahre jünger als Person B";

    } else {
        document.getElementById("comparison").innerHTML = "Beide Personen sind gleich alt";
    }
}