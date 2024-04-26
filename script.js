//your JS code here. If required.
let P = document.querySelector("#status")
let btn = document.querySelector("#enterBtn")
let H1 = document.createElement('h1');
H1.innerText = `Entered Metaverse`
btn.addEventListener('click', ()=>{
	P.innerHTML = ``;
	P.appendChild(H1);
})