var $objul = $(".hd_imgul").children();
var $objimg =$objul.children().children("a").children("img");
var $objimgnr = $(".kzhd_nav").children("h3");
var $btnleft = $(".btn_left");
var $btnrigth = $(".btn_right");
var $kzhd = $(".kzhd_ico").children();
var numleghts = $objul.children().length;
$objul.children().clone().appendTo($objul);
var tinmbtns = setInterval(dongyici,3000);
var numj = 0;
var $objnr = $objul.children("li").eq(0).children("a").children("img").attr("alt");
$kzhd.children().eq(0).css("background","#4fa510");
   	$objimgnr.text($objnr);
$btnleft.click(dongyici);
$kzhd.mouseenter(
	function(){
		clearInterval(tinmbtns);
	}
);
$kzhd.mouseleave(
	function(){
		clearInterval(tinmbtns);
		tinmbtns = setInterval(dongyici,3000);
	}
);
$kzhd.children().mouseenter(function(){
	numj = $(this).index();
	$kzhd.children().css("background","#ffffff");
	$(this).css("background","#4fa510");
	$objul.animate({"left":-1200 * numj+"px"},500);
    $objnr = $objul.children("li").eq(numj).children("a").children("img").attr("alt");
	$objimgnr.text($objnr);
});
function dongyici(){
	clearInterval(tinmbtns)
	if(!$objul.is(":animated")){
		//信号量没到最大：
		if(numj < numleghts - 1){
			numj ++ ;	//信号量加1
			//拉到信号量的倍数上：
			$objul.animate({"left":-1200 * numj+"px"},500);
	        $objnr = $objul.children("li").eq(numj).children("a").children("img").attr("alt");
			$objimgnr.text($objnr);
		}else{
			//信号量到了最大，让信号量变为0
			numj = 0;
			//先往猫腻上移动，然后瞬间移动到0
			$objul.animate({"left":-1200 * numleghts+"px"},500,function(){
				$(this).css("left","0px");
				$objnr = $objul.children("li").eq(numj).children("a").children("img").attr("alt");
				$objimgnr.text($objnr);
			});
		}
	}
	$kzhd.children().eq(numj).css("background","#4fa510").siblings().css("background","#ffffff");
	tinmbtns = setInterval(dongyici,3000);
}
//按钮
$btnrigth.click(
	function(){
		clearInterval(tinmbtns)
		if(!$objul.is(":animated")){
			if(numj > 0){
				numj --;
				$objul.animate({"left":-1200 * numj+"px"},500);
	       	    $objnr = $objul.children("li").eq(numj).children("a").children("img").attr("alt");
				$objimgnr.text($objnr);
			}else{
				numj = numleghts - 1;
				//先瞬间移动假的位置
				$objul.css("left",-1200 * numleghts+"px");
				$objul.animate({"left":-1200 * numj+"px"},500);
				$objnr = $objul.children("li").eq(numj).children("a").children("img").attr("alt");
				$objimgnr.text($objnr);
			}
		}
		$kzhd.children().eq(numj).css("background","#4fa510").siblings().css("background","#ffffff");
		tinmbtns = setInterval(dongyici,3000);
	}
	);