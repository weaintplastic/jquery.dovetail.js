jquery.dovetail.js
==================

A jquery plugin for cross-browser media-fitting like "fit", "crop" and "letterbox"

##Usage

You can use *jquery.dovetail.js* on any DOM element using the ```width``` and ```height``` attribute like ```img```, ```iframe```, ```object```, ```video```


###HTML Markup
```html
<div class="section">
	<img class="dovetail-crop" src="http://placehold.it/1024x768" width="1024" height="768" />
</div>
<div class="section">
	<img class="dovetail-letterbox" src="http://placehold.it/1024x768" width="1024" height="768" />
</div>
<div class="section">
	<img class="dovetail-fit" src="http://placehold.it/1024x768" width="1024" height="768" />
</div>
```

###Javascript
```javascript
<script>
	$(function(){
		// Crop Mode
		$('.dovetail-crop').dovetail({ mode: 'crop' });
		// Letterbox Mode
		$('.dovetail-letterbox').dovetail({ mode: 'letterbox' });
		// Fit Mode
		$('.dovetail-fit').dovetail({ mode: 'fit' });
	});
</script>
```

##Modes

###Crop
```javascript
.dovetail({ mode: 'crop' });
```
Crop-Mode scales the media element until it covers the surrounding container in relation to the center. Depending on the differences in aspect ratios, the media element will be croped left/right or bottom/top.

###Letterbox
```javascript
.dovetail({ mode: 'letterbox' });
```
Letterbox-Mode fits the media on width or height, depending on differences in aspect ratio of media element an its parent container. Depending on the background color of the parent, the typical letterbox area will apear on the left/right or bottom/top.

###Fit
```javascript
.dovetail({ mode: 'fit' });
```
Fit-Mode just scales the media element without taking notice of the aspect ratio and make it just *fit* the dimensions of the parent container.



