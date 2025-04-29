
let pp = document.getElementById("s19");
let oo = document.getElementsByClassName("oo");
let e = document.getElementById("s17");
let d = document.getElementById("s15");

for (let i = 0; i < oo.length; i++) {
  oo[i].onclick = function() {
    pp.innerHTML += this.innerHTML;
  }
}
e.onclick = function(){
  console.log(pp.innerHTML+"="+eval(pp.innerHTML));             
  pp.innerHTML=eval(pp.innerHTML);
}
d.onclick = function(){
    pp.innerHTML="";
}