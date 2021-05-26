var names = ["Dusan", "Neemo", "Milena", "Ana", "Luka", "Dusanka"];

for (let n in names) {
    if (n.length == 5) {
        console.log("The length of the name ", names[n], " is 5")
    } else if (n.length < 5){
        console.log("The length of the name ", names[n], " is ", names[n].length)
    } else {
        console.log("The length of the name ", names[n], " is ", names[n].length)
    }
}

function printName(name) {
    console.log("My name is ", name);
}
function buttonClicked(){
    x+=1;
    if (x<=1) {
        console.log("Button has been clicked", x,"time.");
        x=this.x;
    } else  {
        console.log("Button has been clicked", x,"times.");
        x=this.x;
    }
}

printName("George");
var btn = document.getElementById("go-button");

var x = 0;

// DOES NOT WORK FOR X>1 , WORKS WITH ONCLICK
// btn.addEventListener("click", buttonClicked);