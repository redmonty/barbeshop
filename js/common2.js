// работа с аякс-запросами с формами с помощью FormData
(function () {
	if (!("FormData" in window)){
		return;
	}//проверка наличия формдаты в браузере
	
	var form = document.querySelector(".ourForm");//нашли форму
	form.addEventListener("submit", function(event){
		event.preventDefault();
		var data = new FormData(form);//соберет все значения форм, поддержка с ie10
		queue.forEach(function(element){//
			data.append("images", element.file);//добавим к images новые елементы
		});
		var xhr = new XMLHttpRequest();//запрос находим
		xhr.open("post", "aj.txt" + (new Date()).getTime());//метод запроса и к чему + (new Date()).getTime()-добавлять, чтоб браузеры не могли кешировать наш запрос !!!!
		xhr.addEventListener("readystatechange", function() {
			if (xhr.readyState == 4){
				console.log(xhr.responseText);
		}
	});
	xhr.send(data);//отправляем запрос 
	});
})();
//скрипт для загрузки фотографий в input type file
(function(){
if("FileReader" in window){//будет выполняться код при наличие в браузере filereader
	var queue = [];
	
	var form = document.querySelector(".ourForm");
	form.querySelector("input[type=file]").addEventListener("change", function(){// при каждом изменении поля будет что то происходить 
		var files = this.files;// в переменную будут складываться все выбранные файлы
		
		for (var i = 0; i < files.length; i++) {//перебор файлов, массива 
			preview(files[i]);
			
		}
		this.value = "";//убираем файлы, но они будут сохранены в массиве
	});
	
	function preview(file) {
		if (file.type.match(/image.*/)) {//проверка или пользователь загрузил именно фотографию а не другого типа файл
			var reader = new FileReader();//filereader дает возможность на сайтах получать информацию о файлах что находятся на компьтерах пользователей локально
			reader.addEventListener("load", function(event){//когда файл догрузиться 
				console.log(event.target.result);//загружаем файл в браузер
				var img = document.createElement("img");
				img.src = event.target.result;//картинка в base-64
				img.alt = file.name;//имя файла
				
				area.appendChild(img);//ложим созданный елемент куда нам нужно 
				
				queue.push({file: file, img: img});//добавляем в пустой массив файлы(обьектом), после загрузки
				
			});
			reader.readAsDataURL(file);
			
		}
	}
}//
}());
var li = document.createElement("li");
li.classList.add("uploadImages__item");
var div = document.createElement("div");
li.classList.add("uploadImages__imgWrap");
var img = document.createElement("img");
img.src = event.target.result;
img.alt = file.name;
var a = document.createElement("a");
a.href = "#";
a.title = "delete";
a.classList.add("uploadImages__delLink");
var i = document.createElement("i");
i.classList.add("iconCancel");
div.appendChild(img);
a.appendChild(i);
li.appendChild(div);
li.appendChild(a);
area.appendChild(li);
//=============================адаптивность
//определение ширины
if (window.matchMedia("(min-width: 400px)").matches){
	document.write("размер экрана больше 400px в ширину");
} else {
	document.write("размер экрана меньше 400px в ширину");
}
//определить ретину 
if (window.devicePixelRatio > 1){
	document.write("у экрана повышенная плотность пиксилей ")
}
//изменение ширины браузера
window.addEventListener("resize", function(){
	//resize - событые изменения экрана
})
