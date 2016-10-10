//querySelector - возвращает  1й найденный елемент из ДОМ, соотвеств-й CSS селектору
//addEventListener - событие
//classList-робота с классами
//querySelectorAll - все элементы находит 
	
	var link = document.querySelector(".login");//ссылка вход
	var loginForm = document.querySelector(".modalContent");//скрытая форма
	var closeForm = document.querySelector(".modalContentClose");//кнопка закрытия формы
	var login = loginForm.querySelector("[name=login]");
	var password = loginForm.querySelector("[name=password]");
	var form = loginForm.querySelector("form");//сама форма
	var storage = localStorage.getItem("login");//берем значение логина сохранненого в хранилище
	link.addEventListener("click", function(event){// ссылке событие 
		event.preventDefault();//отмена действия по умолчанию, при нажатие на ссылку
		loginForm.classList.add("modalContentShow");//манипуляция с классами
		if (storage) {//если хранилище не пустое
			login.value = storage;// в логин автоматически запишется сохраненное ранее значение
			password.focus();//и фокус будет на поле ввожа пароля
		}
		else {
			login.focus();//фокус на форме ввода
		}
	});//событие на открытие формы
	closeForm.addEventListener("click", function(event){
		event.preventDefault();
		loginForm.classList.remove("modalContentShow");
		loginForm.classList.remove("modalError");
	});//событие на закрытие формы при нажатие кнопки закрытия
	window.addEventListener("keydown", function(event){//при нажатие клавиши
		if (event.keyCode === 27) {//кода 27 (esc)
			if (loginForm.classList.contains("modalContentShow")){//если форма имеет данный класс
				loginForm.classList.remove("modalContentShow");//тогда будет срабатывать событие на удаление его при нажатие на ecs
				loginForm.classList.remove("modalError");
			}
		}
		
	});
	form.addEventListener("submit",function(event){
		if (!login.value || !password.value) {
			event.preventDefault();
			loginForm.classList.add("modalError");
		}
		else{
			localStorage.setItem("login", login.value);//иначе значение логина сохранится в хранилище браузера
		}
	});//событие на простую валидацию

	var mapOpen = document.querySelector(".jsOpenMap");
	var mapPopup = document.querySelector(".modalContentMap");
	var mapClose = document.querySelector(".modalContentCloseMap");
	mapOpen.addEventListener("click", function(event){
		event.preventDefault;
		mapPopup.classList.add("mapShow");
	});
	mapClose.addEventListener("click", function(event){
		event.preventDefault;
		mapPopup.classList.remove("mapShow");
	});
	window.addEventListener("keydown", function(event){
		if (event.keyCode === 27) {
			if(mapPopup.classList.contains("mapShow")){
				mapPopup.classList.remove("mapShow");
			}
		}
	});
