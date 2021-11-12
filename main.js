
const bgColor = document.getElementById("color");
const btn = document.getElementById("btn")
var body = document.querySelector("body")

/*click.addEventListener('click', function(e){
    body.style.backgroundColor ="color"
});*/



bgColor.addEventListener('keyup', function(e){

    body.style.backgroundColor = e.target.value;

    // body.style.backgroundColor = e.target.value;
})

