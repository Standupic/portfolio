$(document).ready(function(){
$(".protfolio_cont").each(function(i){
$(this).find("a").attr("href","#work_"+i);
});


function testinput(re, str){
 	  if (re.test(str))
      	return true;
   	  else
      	return false;
}
if(!Modernizr.input.pattern){
	$(".but").click(function(){
		var input_val = $(".em").val();
		var re = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
		if(!testinput(re,input_val) == true)
			$(".answer").html("Введите коректный Email");
		else
			return true;	
	  });
}
$(".input_help").hide();
if(!Modernizr.input.required){
	$(".but").click(function(){
		var input_val = $(".name_input").val();
		if(input_val == ""){
			$(".input_help").show();
			$(".input_help").html("Введите ваше имя");
		}else{
			return false;
		}
	});
}

var project = [
	{
		link: "./WiFire/index.html",
		img: "./WiFire/img/template/glavnaya_v1.jpg"	
	},
	{
		link: "./WiFire/index.html",
		img: "./WiFire/img/template/glavnaya_di_v1.jpg"	
	},
	{
		link: "./WiFire/index.html",
		img: "./WiFire/img/template/menu_mobile.jpg"
	},
	{
		link: "./WiFire/digital_pakets.html",
		img: "./WiFire/img/template/digital_desktop.jpg"
	},
	{
		link: "./WiFire/digital_pakets.html",
		img: "./WiFire/img/template/cifrovoe_tv_v1.jpg"
	},
	{
		link: "./WiFire/digital_pakets.html",
		img: "./WiFire/img/template/menu_new1.jpg"
	},
	{
		link: "./WiFire/digital_pakets.html",
		img: "./WiFire/img/template/menu_new2.jpg"
	},
	{
		link: "./WiFire/digital_pakets.html",
		img: "./WiFire/img/template/menu_new3.jpg"
	},
	{
		link: "./WiFire/digital_pakets.html",
		img: "./WiFire/img/template/sale_iphone.jpg"
	}
]

var html = project.map(function(item){
	return(
		`<div class="grid-item"><a href="./WiFire/index.html"><img src="${item.img}" alt=""></a></div>`
		)
})

$(".grid-sizer").after(html.join(""))

var $grid = $('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});

$grid.imagesLoaded().progress(function(){
	$grid.masonry()
})

$(".hidden").each(function(i){
$(this).find(".item_descrip").attr("id","work_"+i);
});
$('#portfolio_item').mixItUp();
$(".top_menu a").mPageScroll2id();
$('.pop_up').magnificPopup({type:'image'});
$('.popa').magnificPopup({type:'inline', midClick: true});

$(".name .h2").animated("fadeInDown","fadeOutUp");
$(".name .p").animated("fadeInUp", "fadeOutDown");
$("section >h2").animated("fadeInDown","fadeOutUp");
$(".description").animated("fadeInUp", "fadeOutDown");
$(".anim_about_foto").animated("fadeInLeft","fadeOutLeft");
$(".anim_about_left").animated("fadeInLeft","fadeOutLeft");
$(".anim_about_right").animated("fadeInRight","fadeOutRight");
$(".year").animated("fadeInDown","fadeOutUp");
$(".animate_company_left").animated("fadeInLeft","fadeOutDown");
$(".animate_company_right").animated("fadeInRight","fadeOutDown");
//$(".person").animated("fadeInRight","fadeOutRight");

$(".main_head, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
  });

$(".s_folio ul li").click(function(){
	$(".s_folio ul li").removeClass('active');
	$(this).addClass("active");

});
$(".top_menu").hide();
$(".main_head").on('click',function(){
	$(".top_menu").fadeToggle(700);
	$(".top_menu li a").toggleClass("fadeInUp animated");

});


$(".top_menu li a").click(function(event){
event.preventDefault();
	});
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});