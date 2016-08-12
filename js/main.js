var link = document.querySelector(".search-btn");
var popup = document.querySelector(".modal-content");
link.addEventListener("click", function(event) 
{
	event.preventDefault();
	popup.classList.add("modal-content--visible")
});