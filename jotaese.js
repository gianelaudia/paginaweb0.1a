
(function($){
    $.smartBackgroundResize = function(el, options, options){
          
        var base = this;
        var isIE = false;
       	isIE = false;//$.browser.msie;
        base.$el = $(el);
        base.el = el;
        base.$el.data(el, base);        // Add a reverse reference to the DOM object
		var images,imagePath, imageActual,preloadActual,picWidth,picHeight, isVideo;
		            
        base.init = function(){    
            base.options = $.extend({},$.smartBackgroundResize.defaultOptions, options);            
            base.$el.css("display", "none");
            base.$el.css("line-height","0px");
	        base.$el.css("position","fixed");
	        base.$el.css("z-index","-100");
	        base.$el.css("overflow","hidden");
	        base.$el.css("margin","0px");
	 	    base.$el.css("padding","0px");
        	base.image = base.options.image;
			base.$el.html('<img id="main_image" style="position:absolute;" src="'+base.getImageSourceActual()+'">"');        	
        	base.mainimage = $('#main_image');
            base.loadFirstimage();
            
            $(window).bind('resize', function() {base.resizeImage();	});
        };
              
  		
 
  	base.resizeImage = function() {	

		var navWidth = $(window).width();
		var navHeight = $(window).height();
		var navRatio = navWidth / navHeight;
	
		if (base.mainimage.width() > 1) picWidth = base.mainimage.width();
		if (base.mainimage.height() > 1) picHeight = base.mainimage.height();
		picRatio = picWidth / picHeight;	
		if (navRatio > picRatio) {
			var newHeight = (navWidth / picWidth) * picHeight;
			var newWidth = navWidth;
		} else {
			var newHeight = navHeight;
			var newWidth = (navHeight / picHeight) * picWidth;
		}
		
		newTop = 0 - ((newHeight - navHeight) / 2);
		newLeft =  0 - ((newWidth - navWidth) / 2);

		base.$el.css({height: navHeight, width: navWidth});
		base.$el.css({visibility:"visible", display:"block"});
		base.mainimage.css({height: newHeight, width: newWidth});	
		base.mainimage.css("top",newTop+"px");
		base.mainimage.css("left",newLeft+"px");

	};


	
	base.preloadImage = function(source, nextEvent) {
	    $('<img />').attr('src', source).load(nextEvent);		    
	};
	
	base.loadFirstimage = function() {
		var imageSource = base.getImageSourceActual();
		base.preloadImage(imageSource, base.loadFirstimageEnd);
	};
	
	base.loadFirstimageEnd=function () {
		var imageSource = base.getImageSourceActual();	
		base.mainimage.attr("src",imageSource);
		base.$el.fadeIn(1000);
		base.resizeImage();
	};
	
	
	base.getImageSourceActual=function (){
	
		var idImage = base.image;
		var imageSource = base.options.imagePath+idImage;
		
		return imageSource;
	};
	
     base.init();
 };
    
    $.smartBackgroundResize.defaultOptions = {
    		imagePath: "",
			imageActual: 0,
			preloadActual: 0		
  	};    
    $.fn.smartBackgroundResize = function(options){
		$('body').css("margin","0px");
		$('body').css("padding","0px");
        return this.each(function(){
            (new $.smartBackgroundResize(this, options, options));
        });
    };
    
})(jQuery);




 $(document).ready(function(){
   $("#botonocultamuestra").click(function(){
      $("#divocultamuestra").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");
          });
        }
      });
    });
  });
 $(document).ready(function(){
   $("#botonocultamuestra1").click(function(){
      $("#divocultamuestra1").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");
          });
        }
      });
    });
  });
 $(document).ready(function(){
   $("#botonocultamuestra2").click(function(){
      $("#divocultamuestra2").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");
          });
        }
      });
    });
  });