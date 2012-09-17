/*------------------------------------------------------------------ 

[Javascript jquery.dovetail.js] 

Project:    		jQuery Dovetail
Autor:		    	Roland Loesslein (rl) 
Website:			http://wwww.weaintplastic.com

-------------------------------------------------------------------*/

;(function($){

	/**
	* dovetail
	*
	*/
	$.dovetail = function(element, options) {
		
		// TEMPLATES
		var wrapper		= '<div class="dovetail-wrapper"></div>';
		
		// MERGE OPTIONS
		var opts		= $.extend({}, $.fn.dovetail.defaults, options);

		// VIEW COMPONENTS
		var $window		= $(window);
		var $this		= $(element);
		var $wrapper	= $(wrapper).clone();
		var $image		= $this;
		
		// PROPERTIES
		var imageWidth		= $image.attr('width');
		var imageHeight		= $image.attr('height');
		var imageRatio		= imageWidth/imageHeight;
		var wrapperCSS		= {
			overflow:		'hidden',
			height:			'100%',
			width:			'100%',
			position:		'relative'
		};
		var imageCSS		= {
			position:		'absolute',
			left:			'50%',
			top:			'50%'
		};
		
		/********************************/
		/* PRIVATE FUNCTIONS			*/
		/********************************/
		
		var init = function(){
			initView();
			initListener();
		};
		
		
		var initView = function(){
			
			$image.wrap($wrapper);
			$image.css(imageCSS);
			
			$wrapper = $image.parent();
			$wrapper.css(wrapperCSS);
			
		};
		
		var initListener = function(){
			
			$window
				.bind('resize', onWindowResize);
				
			onWindowResize();
			
		};
		
		
        
        /********************************/
		/* EVENT HANDLING				*/
		/********************************/
		
		var onWindowResize = function(){
			
			var wrapperWidth	= $wrapper.width();
			var wrapperHeight	= $wrapper.height();
			var wrapperRatio	= wrapperWidth/wrapperHeight;
			
			switch( opts.mode ){
				
				case 'crop':
				
					if( (imageWidth/imageHeight - wrapperWidth/wrapperHeight) < 0){
						$image.css({
							height:		wrapperWidth / imageRatio,
							width:		wrapperWidth,
							marginTop:	- wrapperWidth / imageRatio / 2,
							marginLeft:	- wrapperWidth / 2
						});
					}else{
						$image.css({
							height:		wrapperHeight,
							width:		wrapperHeight * imageRatio,
							marginTop:	- wrapperHeight / 2,
							marginLeft:	- wrapperHeight * imageRatio / 2
						});
					}
					
					break;
					
				case 'letterbox':
					
					if( (imageWidth/imageHeight - wrapperWidth/wrapperHeight) < 0){
						$image.css({
							height:		wrapperHeight,
							width:		wrapperHeight * imageRatio,
							marginTop:	- wrapperHeight / 2,
							marginLeft:	- wrapperHeight * imageRatio / 2
						});
					}else{
						$image.css({
							height:		wrapperWidth / imageRatio,
							width:		wrapperWidth,
							marginTop:	- wrapperWidth / imageRatio / 2,
							marginLeft:	- wrapperWidth / 2
						});
					}
					
					break;
					
				case 'fit':
					
					$image.css({
						height:		wrapperHeight,
						width:		wrapperWidth,
						marginTop:	- wrapperHeight / 2,
						marginLeft:	- wrapperWidth  / 2
					});
					
					break;
			}
			
		};
		
        
		/********************************/
		/* INIT							*/
		/********************************/
		
		init();
		
	};
	
	
	/**
	* PLUGIN INIT
	*
	*/
	$.fn.dovetail = function(options){
		return this.each(function() {
            if (undefined === $(this).data('dovetail')) {
                var plugin = new $.dovetail(this, options);
                $(this).data('dovetail', plugin);
            }
        });
	};
	
	
	/**
	* PLUGIN DEFAULTS
	*
	*/
	$.fn.dovetail.defaults = {
		mode:		'crop'
	};
   
})(jQuery);