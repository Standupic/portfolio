function Slider(container, images, options){
	var me = this;
	this.container = document.getElementById("container"); // выбираем контейнер
	this.containerWidth = window.getComputedStyle(this.container).width; //
	this.buttonWidth = (parseInt(this.containerWidth) /10).toString() + "px";// ссылка на объект из внутренней функций!
	this.containerHeight = window.getComputedStyle(this.container).height;
	this.images = images; // ссылка на массив 
	this.imagesLenght = this.images.length;
	var currentElementPosition = 0;
	

	


	var li = [];
	for(i = 0; i<this.imagesLenght; i++){
	li[i] = "<li class='knopka'><a href='#'></a></li>";
	}
	this.li = li; // Массив кнопок


	
	if (options) {
		this.slidesCount = options.slidesCount;
		this.slidesScrollcount = options.slidesScrollcount;
	} else {
		this.slidesCount = 1;
		this.slidesScrollcount =1;
	}

	if(this.slidesCount == 2) 
	me.imagesLenght = Math.round(me.imagesLenght / 2); // img
	var li_string = this.li.slice(0,4).join('');
	this.li_string = li_string; // orange button 

	if(this.slidesCount == 1)
	var li_string = this.li.join('');
	this.li_string = li_string; //  orange button 
	
		


	
	this.renderButton_ = function(el){ // расчет ширины кнопок 
		el.style.width = "50px";
		el.style.height = "50px";
	}

	this.renderSlider_ = function(){
		// создаем разметку slider > slider-container
		var slider = document.createElement("div");
		slider.className = "slider";
		slider.style.width = (parseInt(this.containerWidth) - parseInt(this.buttonWidth) *2) + "px"; // Динамически высчитываем ширину  slider 
		slider.style.overflow = "hidden";
		slider.style.margin = "0 auto";
		slider.style.border = "3px solid black";
		slider.style.position = "relative";

		slider.style.height = this.containerHeight;
		this.slider = slider;
		


		// создаем разметку slider-container
		var sliderContainer = document.createElement("div"); //создаем контейнер slider-Container
		sliderContainer.className = "slider-container";
		sliderContainer.style.height = this.containerHeight;
		sliderContainer.style.position = "relative";
		sliderContainer.style.margin = "0 auto";
		sliderContainer.style.left = "0";
		sliderContainer.style.transition = "left 1s";
		sliderContainer.style.width = parseInt(this.containerWidth) / this.slidesCount * this.images.length + "px"; 
		
		// 500 / 
		this.sliderContainer = sliderContainer; // Ссылка на объект 
		

		// cоздаем левую кнопку//
		var leftButton = document.createElement("div");
		leftButton.id = "left-button";
		leftButton.style.right = "90%";
		leftButton.style.position = "absolute";
		leftButton.style.top = "40%"; // Надо определить динамически расположение кнопок в зависимост иот ширины 
		leftButton.style.display = "inline-block";
		this.renderButton_(leftButton);
		this.container.appendChild(leftButton);

		
		// cоздаем левую кнопку //

		// Создаем правую кнопку//
		var rightButton = document.createElement("div");
		rightButton.id = "right-button";
		rightButton.style.display = "inline-block";
		rightButton.style.left = "90%";
		rightButton.style.top = "40%";
		rightButton.style.position = "absolute";
		this.renderButton_(rightButton);
		this.container.appendChild(rightButton);
		// Создаем правую кнопку //


		this.leftButton = leftButton; // создаем ссылку на объект 
		this.rightButton = rightButton; // создаем ссылку на объект
		



	

		// Создаем в цикле картинки //
		for (var i=0; i < this.images.length; i++){
			var div_slide_image = document.createElement("div");
			div_slide_image.style.backgroundSize = "cover";
			div_slide_image.style.width = parseInt(this.slider.style.width)/this.slidesCount  + "px";
			div_slide_image.style.height = "100%";
			div_slide_image.style.display = "inline-block";
			div_slide_image.className = "slide-image";
			div_slide_image.style.backgroundPosition = "center center";
			div_slide_image.style.backgroundRepeat ="no-repeat";
			div_slide_image.style.backgroundImage = "url({image})".replace("{image}", this.images[i]);			
			sliderContainer.appendChild(div_slide_image);

		}
		
		var ul = document.createElement("ul");
		ul.id = "knopki";
		ul.style.display = "inline-block";
		ul.style.position = "absolute";
		ul.style.right = "0";
		ul.style.zIndex = "1";
		ul.style.bottom = '0';
		ul.style.marginBottom = "2px";

		
		ul.innerHTML = li_string; // запихиваем ul > li


		me.ul = ul;
		me.ul.childNodes[0].style.backgroundPosition = "0 -15px";
		console.log(me.ul.childNodes.length); // поулмолчанию первый кавадрат будит оранжевый
		



		slider.appendChild(ul);
		slider.appendChild(sliderContainer); //slider > sliderContainer
		this.container.appendChild(slider); // container > slider 
	}	
	

	this.attachEvents_ = function() {
		this.leftButton.addEventListener("click", function() {

		currentPos = parseInt(me.sliderContainer.style.left);
		
		currentElementPosition++;

		if(currentElementPosition == 0 ){ 
			 me.ul.childNodes[0].style.backgroundPosition = "0 -15px";
		}else{
			 me.ul.childNodes[0].style.backgroundPosition = "0 0px";
		}
		if(currentElementPosition == 1) {
			 me.ul.childNodes[1].style.backgroundPosition = "0 -15px";
		}else{
			 me.ul.childNodes[1].style.backgroundPosition = "0 0px";
		}
		if(currentElementPosition == 2) {
			 me.ul.childNodes[2].style.backgroundPosition = "0 -15px";
		}else{
			me.ul.childNodes[2].style.backgroundPosition = "0 0px";
		}
		if(currentElementPosition == 3 ) {
			 me.ul.childNodes[3].style.backgroundPosition = "0 -15px";
		}else{
			 me.ul.childNodes[3].style.backgroundPosition = "0 0px";
		}
			if (currentElementPosition >= me.imagesLenght) { // 8  = 8 position == 0
					me.sliderContainer.style.left = 0;	
					currentElementPosition = 0;
				if(currentElementPosition == 0) me.ul.childNodes[0].style.backgroundPosition = "0 -15px";

				} else {

				me.sliderContainer.style.left = (currentPos - parseInt(me.slider.style.width)).toString() + "px";
				console.log(currentElementPosition);
				
			}	
				
		if(me.ul.childNodes.length == 4)
			return false;
		
		if(currentElementPosition == 4 ) {
			 me.ul.childNodes[4].style.backgroundPosition = "0 -15px";
		}else{
			 me.ul.childNodes[4].style.backgroundPosition = "0 0px";
		}
		if(currentElementPosition == 5 ) {
			 me.ul.childNodes[5].style.backgroundPosition = "0 -15px";
		}else{
			 me.ul.childNodes[5].style.backgroundPosition = "0 0px";
		}
		if(currentElementPosition == 6 ) {
			me.ul.childNodes[6].style.backgroundPosition = "0 -15px";
		}else{
			 me.ul.childNodes[6].style.backgroundPosition = "0  0px";
		}
		if(currentElementPosition == 7 ) {
			me.ul.childNodes[7].style.backgroundPosition = "0 -15px";
		}else{
			 me.ul.childNodes[7].style.backgroundPosition = "0  0px";
		}
		if(me.ul.childNodes.length > 4)
			return true;
				if (currentElementPosition >= me.imagesLenght) {
					me.sliderContainer.style.left = 0;	
					currentElementPosition = 0;
				if(currentElementPosition == 0) me.ul.childNodes[0].style.backgroundPosition = "0 -15px";

				} else {

				me.sliderContainer.style.left = (currentPos - parseInt(me.slider.style.width)).toString() + "px";
				
				}	
	});
	
		this.rightButton.addEventListener("click", function() {
		currentPos = parseInt(me.sliderContainer.style.left);
		currentElementPosition--;
			if (currentElementPosition >= me.imagesLenght ||  currentPos >= 0) {
				me.sliderContainer.style.left = (currentPos - currentPos).toString() + "px";
				currentElementPosition = 0;

			} else {
				me.sliderContainer.style.left = (currentPos + parseInt(me.slider.style.width)).toString() + "px";
				console.log(currentElementPosition);
				console.log(currentPos);
			}
		});

	}



	this.init = function(){
		this.renderSlider_();
		this.attachEvents_();
	
			
		
	}


	
}
var images = ["images/1.jpg", 
			 "images/2.jpg", 
			 "images/3.jpg",
			 "images/4.jpg",
			 "images/5.jpg",
			 "images/6.jpg",
			 "images/7.jpg",
			 "images/3.jpg",
			 ];

var myslider = new Slider("container", images, {
	slidesCount: 1,
	slidesScrollcount: 2
});
myslider.init();			 