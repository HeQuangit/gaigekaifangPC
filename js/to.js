        var $obj_ul = $(".box1_ul").children();
		var $btn_left = $(".btnleft");
		var $btn_rigth = $(".btnrigth");
		var numlen = $obj_ul.children().length;
		var btime= setInterval(leftb,3000);
		var numtime= 0;
		$obj_ul.children().clone().appendTo($obj_ul);
		$btn_left.click(leftb);
		function leftb(){
			clearInterval(btime)
			if(!$obj_ul.is(":animated")){
				//信号量没到最大：
				if(numtime < numlen - 1){
					numtime ++ ;	//信号量加1
					//拉到信号量的倍数上：
					$obj_ul.animate({"left":-628 * numtime+"px"},500);
				}else{
					//信号量到了最大，让信号量变为0
					numtime = 0;
					//先往猫腻上移动，然后瞬间移动到0
					$obj_ul.animate({"left":-628 * numlen+"px"},500,function(){
						$(this).css("left","0px");
					});
				}
			}
			btime = setInterval(leftb,3000);
		}
		//左按钮
		$btn_rigth.click(
			function(){
				clearInterval(btime)
				if(!$obj_ul.is(":animated")){
					if(numtime > 0){
						numtime --;
						$obj_ul.animate({"left":-628 * numtime+"px"},500);
					}else{
						numtime = numlen - 1;
						//先瞬间移动假的位置
						$obj_ul.css("left",-628 * numlen+"px");
						$obj_ul.animate({"left":-628 * numtime+"px"},500);
					}
				}
				btime = setInterval(leftb,3000);
			}
			);