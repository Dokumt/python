window.onload = function() 
{//при переходе по ссылке, URL не меняется
	document.querySelectorAll("a[href^='#']").forEach
	((link) => 
		{
			link.addEventListener("click", (event) => 
			{
				event.preventDefault(); //отменяет поведение браузера по умолчанию(не даёт перейти по ссылке, следовательно URL не меняется)
				document.querySelector(link.getAttribute('href')).scrollIntoView();//переход по ссылке вручную
			});		
		}
	);
}
