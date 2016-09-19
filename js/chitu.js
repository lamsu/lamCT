
$(function(){
	// --------------------------------------------弹窗
	$('.TSdiv').eq(0).animate({
		'margin-top': 0,
		'opacity': 1},1000);
	$('.TSdiv').last().css({
		'margin-top': 0,
		'opacity': 1
	});
	$('.helpBg .closs').click(function(){
		$('.tanChuang').animate({
			'opacity': 0,
			'z-index': 0},300);
	})
	setInterval(function(){
		$('.tanChuang').animate({
			'opacity': 1,
			'z-index': 100},300);
	}, 60000);
	// --------------------------------------------right back
	$(window).scroll(function(event) {
		var c_height=$(document.body)[0].clientHeight;
		var r_top=(c_height-250)/2+$(document).scrollTop();
		var menu_top=(c_height-350)/2+$(document).scrollTop();
		$('.right_back').stop().animate({'top':r_top }, 300);
		$('.muLu').stop().animate({'top':menu_top }, 300);
		if ($(window).scrollTop()>Ttop) {
			$('.head').css({
				'position': 'fixed',
				'left': '0',
				'top': '0',
				'z-index': '11',
			});
			$('.section').css('margin-top', '79px');
		}else{
			$('.head').css({
				'position': 'relative',
				'left': '0',
				'top': '0',
			});	
			$('.section').css('margin-top', '0');
		};//头部滚动吸附
		for (var i = 0; i < $('.TSdiv').length; i++) {
			if($(document).scrollTop()>$('.TSdiv').eq(i).offset().top-$(window).height()){
				$('.TSdiv').eq(i).animate({
					'margin-top': 0,
					'opacity': 1},1000);
			};
		};//模块浮现
	});
	$('.right_back .in_min').hover(function() {
		$(this).stop().animate({'margin-left':-64}, 400);
	}, function() {
		$(this).stop().animate({'margin-left':0}, 400);
	});	
	$('.right_back a').eq(3).hover(function() {
		$(this).find('.erWm').css('display','block');
	}, function() {
		$(this).find('.erWm').css('display', 'none');
	});
	$('.right_back a').eq(0).click(function(){
		$(window).scrollTop(0);
	});
	// --------------------------------------------右下角咨询
	$('.zX_l').click(function(){
		$('.ziXun').css('display', 'none');
		$('._hi').css('display', 'block');
	});
	$('._hi').click(function(){
		$(this).css('display', 'none');
		$('.ziXun').css('display', 'block');
	});
	// --------------------------------------------menu
	$('.menu_list li').hover(function() {
		$(this).stop().animate({'width': 150},300);
		$(this).css('background', '#0066b3');
		if($(this).index()==1){$(this).find('span').text('产品服务')};
		if($(this).index()==2){$(this).find('span').text('解决方案')};
		if($(this).index()==3){$(this).find('span').text('经典案例')};
		if($(this).index()==4){$(this).find('span').text('客户见证')};
		if($(this).index()==5){$(this).find('span').text('合作客户')};
		if($(this).index()==6){$(this).find('span').text('模板堂')};
		if($(this).index()==7){$(this).find('span').text('新闻动态')};
		if($(this).index()==8){$(this).find('span').text('联系我们')};
	}, function() {;
		$(this).stop().animate({'width': 30},300);
		$(this).css('background', 'rgba(0,0,0,0.5)');
		if($(this).index()==1){$(this).find('span').text('产')};
		if($(this).index()==2){$(this).find('span').text('解')};
		if($(this).index()==3){$(this).find('span').text('经')};
		if($(this).index()==4){$(this).find('span').text('客')};
		if($(this).index()==5){$(this).find('span').text('合')};
		if($(this).index()==6){$(this).find('span').text('模')};
		if($(this).index()==7){$(this).find('span').text('新')};
		if($(this).index()==8){$(this).find('span').text('联')};
	});
	$('.menu_list li').click(function(){
		var i=$(this).index();
		var mod_top=$('.TSdiv').eq(i-1).offset().top-78;
		if(i==0){
			$(window).scrollTop(0)
		}else{
			$(window).scrollTop(mod_top);
		}
		$('._xiaoD li').eq(i).css('background', '#0066b3').siblings('li').css('background', '#333');
	});
	// --------------------------------------------留言
	$('.zX_In').click(function(event) {
		$('.liuYan').addClass('leave_rate');
	});
	$('.mess_closs').click(function(event) {
		event.stopPropagation();
		$('.liuYan').removeClass('leave_rate');
		if ($('.liuYan').css('bottom')==0) {
			$('.liuYan').animate({'bottom': -293}, 400);
		}else{
			$('.liuYan').css('bottom', -293);
		};
	});
	$('.leaveW').click(function(event) {
		$('.liuYan').stop().animate({'bottom': 0}, 400);
	});
	// --------------------------------------------head头部
	var iHListl=$('.head .iHListl');
	var Ttop=$('.head').offset().top;
	iHListl.hover(function() {
		var iHlol=$(this).children('ol');
		iHlol.stop().slideToggle('fast')
	});
	// --------------------------------------------scetion淡出淡入
	var ScUll=$('.section .SCUl .ScUll');
	var SCBli=$('.section .SCBottom li');
	var i=0;
	var timer;
	ScUll.first().css({
		'opacity': 1,
		'z-index': 9
	});
	SCBli.first().css('opacity', 1);
	
	function aTime(){
		i++;
		if (i>4) {i=0};
		ScUll.eq(i).stop().fadeTo(1000,1).siblings('.ScUll').stop().fadeTo(1000,0);
		ScUll.eq(i).css('z-index', 9).siblings('li').css('z-index', 1);
		SCBli.eq(i).addClass('current').siblings('li').removeClass('current');
		ScUll.eq(i).siblings().find('.bg_c').addClass('bg_la').removeClass('bg_aa');
		ScUll.eq(i).siblings().find('.bg_2').addClass('bg_lb').removeClass('bg_ab');
		ScUll.eq(i).siblings().find('.bg_4').addClass('bg_l4').removeClass('bg_a4');
		ScUll.eq(i).siblings().find('.bg_5').addClass('bg_l5').removeClass('bg_a5');
		ScUll.eq(i).siblings().find('.h_title').addClass('h_l').removeClass('h_font');
		ScUll.eq(i).siblings().find('.same_').addClass('word_la').removeClass('word_a');
		ScUll.eq(i).siblings().find('.same_t').addClass('word_lb').removeClass('word_b');
		ScUll.eq(i).find('.bg_c').removeClass('bg_la').addClass('bg_aa');
		ScUll.eq(i).find('.bg_2').removeClass('bg_lb').addClass('bg_ab');
		ScUll.eq(i).find('.bg_4').removeClass('bg_l4').addClass('bg_a4');
		ScUll.eq(i).find('.bg_5').removeClass('bg_l5').addClass('bg_a5');
		ScUll.eq(i).find('.h_title').removeClass('h_l').addClass('h_font');
		ScUll.eq(i).find('.same_').removeClass('word_la').addClass('word_a');
		ScUll.eq(i).find('.same_t').removeClass('word_lb').addClass('word_b');
	};
	clearInterval(timer);
	timer=setInterval(aTime, 3000);

	$('.section').hover(function() {
		clearInterval(timer);
	}, function() {
		timer=setInterval(aTime, 3000);
	});
	

	SCBli.on('mousedown mouseup',function(ev){
		if(ev.type=="mousedown"){
			clearInterval(timer);
			i=$(this).index();
			$(this).addClass('current').siblings('li').removeClass('current');
			ScUll.eq(i).stop().fadeTo(1000,1).siblings('.ScUll').stop().fadeTo(1000,0);
			ScUll.eq(i).css('z-index', 9).siblings('li').css('z-index', 1);
			
			ScUll.eq(i).siblings().find('.bg_c').addClass('bg_la').removeClass('bg_aa');
			ScUll.eq(i).siblings().find('.bg_2').addClass('bg_lb').removeClass('bg_ab');
			ScUll.eq(i).siblings().find('.bg_4').addClass('bg_l4').removeClass('bg_a4');
			ScUll.eq(i).siblings().find('.bg_5').addClass('bg_l5').removeClass('bg_a5');
			ScUll.eq(i).siblings().find('.h_title').addClass('h_l').removeClass('h_font');
			ScUll.eq(i).siblings().find('.same_').addClass('word_la').removeClass('word_a');
			ScUll.eq(i).siblings().find('.same_t').addClass('word_lb').removeClass('word_b');		
		}else if(ev.type=="mouseup"){
			ScUll.eq(i).find('.bg_c').removeClass('bg_la').addClass('bg_aa');
			ScUll.eq(i).find('.bg_2').removeClass('bg_lb').addClass('bg_ab');
			ScUll.eq(i).find('.bg_4').removeClass('bg_l4').addClass('bg_a4');
			ScUll.eq(i).find('.bg_5').removeClass('bg_l5').addClass('bg_a5');
			ScUll.eq(i).find('.h_title').removeClass('h_l').addClass('h_font');
			ScUll.eq(i).find('.same_').removeClass('word_la').addClass('word_a');
			ScUll.eq(i).find('.same_t').removeClass('word_lb').addClass('word_b');

			timer=setInterval(aTime, 3000);
			
		}
	});
	// --------------------------------------------services产品服务
	var SerA=$('.ser .serMOd .aSlink');
	SerA.hover(function() {
		i=$(this).index();
		if (i==0) {$(this).css('backgroundColor', '#EA051C')};
		if (i==1) {$(this).css('backgroundColor', '#FA2F19')};
		if (i==2) {$(this).css('backgroundColor', '#FB6721')};
		if (i==3) {$(this).css('backgroundColor', '#3DAC4A')};
		if (i==4) {$(this).css('backgroundColor', '#217DCD')};
		var SerW=$(this).children('.SerWor');
		var SerP=$(this).children('.SerPic');
		SerP.stop().animate({'marginLeft':'-210px'}, 400);
		SerW.stop().animate({'marginLeft':'0'}, 400);
	}, function() {
		var SerW=$(this).children('.SerWor');
		var SerP=$(this).children('.SerPic');
		$(this).css('backgroundColor', '#fff');
		SerP.stop().animate({'marginLeft':'0'}, 400);
		SerW.stop().animate({'marginLeft':'-210px'}, 400);
	});
// --------------------------------------------down按钮
	$('.TSdiv .down').click(function(event) {
		var NSdiv=$(this).parents('.TSdiv').next().offset().top;
		$(window).scrollTop(NSdiv-78);
	});
// --------------------------------------------解决方案
	var SolMOd=$('.SolMOd');
	var sLl=$('.sLl');
	var sLr=$('.sLr');
	var a_li=$('.sList li');
	var numb=0;
	var aTime;
	for(var a_i=0;a_i<3;a_i++){
		var itemLi=a_li.eq(a_i).clone(true);
		$('.sList').append(itemLi);
	}
	$('.sList').width(272*7);
	clearInterval(aTime);
	aTime=setInterval(Amover, 3000);
	sLr.click(Amovel);
	sLl.click(Amover);
	SolMOd.hover(function() {
		clearInterval(aTime);
	}, function() {
		aTime=setInterval(Amover, 3000);
	});
	function Amover(){
		numb--;
		if(numb<-4){
			numb=-1;
			$('.sList').css('left', 0);
		}
		var moves=numb*272;
		$('.sList').stop().animate({'left':moves},400);
	}
	function Amovel(){
		numb++;
		if(numb>0){
			numb=-3;
			$('.sList').css('left', -272*4);
		}
		var moves=numb*272;
		$('.sList').stop().animate({'left':moves},400);
	}// --------------------------------------------经典案例
	 $(function(){
        $(".caseUl li a").hover(function(e){
            ani(e,this, 'over');
        },function(e){
            ani(e,this,'out');
        });
        function ani(e, _this, type,  time ){
            time = time || 300;
            var a_width     = $(_this).width(),
                a_height    = $(_this).height(),
                a_offset    = $(_this).offset(),
                cur_ani     = {},
                dani        = {};
            var lastdiv = $(_this).children('.BlueBan');
            if ( type == 'over' ) {
                cur_ani = {
                    'left' : 0,
                    'top' : 0
                };
                var direction = returnDirection(e, _this);
                switch(direction){
                    case 0 : {
                        dani.left = 0; 
                        dani.top = - a_height; 
                        break;
                    }
                    case 1 : {
                        dani.left = a_width; 
                        dani.top = 0;  
                        break;
                    }
                    case 2 : {
                        dani.left = 0; 
                        dani.top = a_height; 
                        break;}
                    case 3 : {
                        dani.left = -a_width; 
                        dani.top = 0;  
                        break;
                    }
                }
                lastdiv.css(dani); 
            }else if ( type == 'out' ){
                if ( a_offset.top >= e.pageY  ){
                    dani = {
                        'top' :  - a_height
                    };
                }else if( ( a_offset.top + a_height ) <= e.pageY){
                    dani = {
                        'top' : a_height 
                    };
                }
                if ( a_offset.left >= e.pageX  ){
                    dani = {
                        'left' : -a_width 
                    };
                }else if( ( a_offset.left + a_width ) <= e.pageX+1){
                    dani = {
                        'left' : a_width  
                    };
                }
                cur_ani = dani;
            }else{
                console.log( 'this type is undefined');
                return ;
            }
            lastdiv.finish().animate(cur_ani,time);
        }
    });
    function returnDirection(e,element){
        var ele_offset = $(element).offset(),
            ele_width = $(element).width(), 
            ele_height = $(element).height();
        var x = (e.pageX - ele_offset.left - (ele_width / 2)) * (ele_width > ele_height ? (ele_height / ele_width) : 1),
            y = (e.pageY - ele_offset.top - (ele_height / 2)) * (ele_height > ele_width ? (ele_width / ele_height) : 1);
        return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    }
    // --------------------------------------------客户见证
    var te=0;
   	t_e();
   function t_e(){
   	_te = setInterval(function(){
   		te++;
   		if(te<100){
   			$('.tesUl .num_d').html(te);
	   		$('.tesUl .num_c').html(te);
	   		$('.tesUl .num_b').html(te);
	   		$('.tesUl .num_a').html(te);
	   	}else if(te>100 && te<150){
	   		$('.tesUl .num_d').html(100);
	   		$('.tesUl .num_c').html(te);
	   		$('.tesUl .num_b').html(te);
	   		$('.tesUl .num_a').html(te);
	   	}else if(te>150 && te <1030){
	   		$('.tesUl .num_c').html(150);
	   		$('.tesUl .num_b').html(te);
	   		$('.tesUl .num_a').html(te);
	   	}else if(te>1030 && te<1200){
	   		$('.tesUl .num_a').html(1030);
	   		$('.tesUl .num_b').html(te);
	   	}else if(te>1200){
	   		$('.tesUl .num_b').html(1200);
	   		clearInterval(_te);
	   		te=0;
	   		setTimeout(function(){
	   			t_e();
	   		},10000)
	   	}
	   	},50)
   }
    // --------------------------------------------合作客户
    $('.CusLi').hover(function() {
    	$(this).children('.Li_div').stop().animate({'margin-top': -130}, 400);
    }, function() {
    	$('.Li_div').stop().animate({'margin-top': 0}, 400);
    });
    // --------------------------------------------模板堂
    lunBo(['img/index.jpg','img/index1.jpg','img/index2.jpg','img/index3.jpg','img/index4.jpg','img/index5.jpg']);
    function lunBo(arry){
    	var time;
    	var _dian=0;
    	var _img=0;
    	for(var i=0;i<arry.length;i++){
			$('.win_list').append('<li><img src="" alt="" /></li>');
			$('._dian ul').append('<li></li>');
			$('.win_list img').eq(i).attr('src', arry[i]);
		}
		$('._dian li').eq(0).addClass('current');
		$('.win_list img').eq(0).attr('src', 'img/0000.png')
		var aTemp=$('.win_list').children('li').first().clone(true);
		$('.win_list').append(aTemp);
		var li_width=parseInt($('.win_list li').eq(0).css('width'));
		var win_list_width=li_width*(arry.length+1);
    	$('.win_list').css('width', win_list_width);
    	function l_monve(){
    		_dian++;if(_dian>=arry.length){_dian=0}
    		$('._dian li').eq(_dian).addClass('current').siblings('li').removeClass('current');
    		_img++;if(_img>arry.length){
    			_img=1;
    			$('.win_list').css('left', 0);
    		}
    		var _Target=-_img*li_width;
    		$('.win_list').stop().animate({'left':_Target },400);
    	}
    	function r_monve(){
    		_dian--;if(_dian<0){_dian=arry.length-1}
    		$('._dian li').eq(_dian).addClass('current').siblings('li').removeClass('current');
    		_img--;if(_img<0){
    			_img=arry.length-1;
    			var aTarget=-li_width*arry.length;
    			$('.win_list').css('left', aTarget);
    		}
    		var _Target=-_img*li_width;
    		$('.win_list').stop().animate({'left':_Target },400);
    	}
    	$('.l_bat').click(l_monve);
    	$('.r_bat').click(r_monve);
    	time=setInterval(l_monve, 2000);
    	$('._win').hover(function() {
    		clearInterval(time);
    	}, function() {
    		time=setInterval(l_monve, 2000);
    	});
    	$('._dian li').click(function(event) {
    		num=$(this).index();
    		$(this).addClass('current').siblings('li').removeClass('current');
    		var tarGet=-num*parseInt($('.win_list li').eq(0).css('width'));
    		$('.win_list').stop().animate({'left':tarGet}, 400);
    		_dian=_img=num;
    	});
    }
    // --------------------------------------------新闻
 	$('.comper_new').eq(0).css({'opacity': 1,'z-index': 5});
 	$('._title li').eq(0).css('background','url(img/ys.png) no-repeat center bottom');
   $('._title li').hover(function() {
   		$(this).css('background','url(img/ys.png) no-repeat center bottom' ).siblings('li').css('background', '');
   		$(this).css('color', '#0077b3').siblings('li').css('color', '#666');
   		var i=$(this).index();
   		$('.comper_new').eq(i).css('z-index', 5).siblings('.comper_new').css('z-index', 0);
   		$('.comper_new').eq(i).stop().fadeTo(300, 1).siblings('.comper_new').stop().fadeTo(300, 0);
   });
   $('._demo').hover(function() {
   		$(this).css('borderColor', '#0077b3');
   		$(this).children('._date').css('backgroundColor', '#0077b3');
   		$(this).find('h4').css('color', '#0077b3');
   }, function() {
   		$(this).css('borderColor', 'transparent');
   		$(this).children('._date').css('backgroundColor', '#969393');
   		$(this).find('h4').css('color', '#333');
   });
   // --------------------------------------------联系我们
	$('._concact li').hover(function() {
		$(this).css('backgroundColor', 'rgba(199,12,31,0.7)');
	}, function() {
		$(this).css('backgroundColor', 'rgba(95,96,97,0.3)');
	});
});
	
