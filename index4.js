

let valuec = document.getElementById("countval")
console.log(valuec)
let count = 0;

function increment(){
    console.log(count)
    count = count+1
valuec.innerText= count
}

let savestr = document.getElementById("saveval")

function save(){

 savestr.innerText += count + " - "

}




