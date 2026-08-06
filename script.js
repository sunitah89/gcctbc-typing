function startExam(){

let lang=document.getElementById("language").value;

let speed=document.getElementById("speed").value;

localStorage.setItem("language",lang);

localStorage.setItem("speed",speed);

window.location="exam.html";

}