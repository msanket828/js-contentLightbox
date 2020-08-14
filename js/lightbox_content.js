// accessing all the neccessary elements for js

var lists=document.querySelectorAll(".ulClass li"),
	lightbox=document.querySelector(".lightbox-ul"),
	close=document.querySelector(".close"),
	html=document.querySelector("html");


lists.forEach(function(list) {
	list.addEventListener('click',clickList);
})

//================Mannually added lightbox in html==========================

// function clickList() {	
// 	lightbox.lastElementChild.children[1].src=this.children[0].src;	
// 	lightbox.lastElementChild.children[2].innerText=this.children[1].innerText;
// 	lightbox.classList.add("active");
// }

//to close btn
// close.addEventListener('click',function() {
// 	lightbox.classList.remove("active");
// })



// ====================> dynamically added lightbox content <====================================//
function clickList(list) {	
	var liNode=document.createElement("li");
		var Img=document.createElement("img"),
				para=document.createElement("p"),
				close=document.createElement("span");		
				close.setAttribute("class","close");
		Img.src=this.children[0].src;
		para.textContent=this.children[1].innerText;
		close.innerHTML="&times;";
		//to remove from duplication 
		while(lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild);
		}
		liNode.appendChild(Img);
		liNode.appendChild(para);
		liNode.appendChild(close);
	lightbox.appendChild(liNode);
	lightbox.classList.add("active");
	html.classList.add("overflow");
	//to click on close btn;
	close.addEventListener('click',closeLightbox);
}

//=============> Close Btn <===============================//
function closeLightbox() {
	lightbox.classList.remove("active");
	html.classList.remove("overflow");
}