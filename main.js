// var names = ["Dusan", "Neemo", "Milena", "Ana", "Luka", "Dusanka"];
//
// for (let n in names) {
//     if (n.length == 5) {
//         console.log("The length of the name ", names[n], " is 5")
//     } else if (n.length < 5){
//         console.log("The length of the name ", names[n], " is ", names[n].length)
//     } else {
//         console.log("The length of the name ", names[n], " is ", names[n].length)
//     }
// }
//
// function printName(name) {
//     console.log("My name is ", name);
// }

var btn = document.getElementById("go-button");
var x = 0;

// DOES NOT WORK FOR X>1 , WORKS WITH ONCLICK
btn.addEventListener("click", buttonClicked);

function buttonClicked(){
    x++;
    if (x===1) {
        console.log("Button has been clicked", x,"time.");
        document.getElementById("header1").innerHTML = "You've got a pupper!";
        document.getElementById("text").innerHTML = "It really is the best news ever!";
    } else if (x===50) {
        document.getElementById("text").innerHTML = "Are you really not tired of clicking?";
        document.getElementById("go-button").innerHTML = "No!!!";
        console.log("Button has been clicked", x, "times.");
    } else if (x===51){
        document.getElementById("text").innerHTML = "It really is the best news ever!";
        document.getElementById("go-button").innerHTML = "Yeah!!!";
        console.log("Button has been clicked", x, "times.");
    } else if (x===100) {
        document.getElementById("text").innerHTML = "You really have the energy for 100 people!";
        document.getElementById("go-button").innerHTML = "Hell yeah!!!";
        console.log("Button has been clicked", x, "times.");
    } else console.log("Button has been clicked", x, "times.");

}

