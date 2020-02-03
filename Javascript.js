

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});
	 document.getElementById("nav-icon4").onclick = function () {
		 if (document.URL == "file:///C:/Users/Tobias/Documents/GitHub/TobiasRyttlinger.github.io/Index.html" ) {
 		 			location.href = "Menu.html";
				}
	 			else{
					 location.href = "Index.html";
				}
	 	 };
