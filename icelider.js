function icelider(id,config){
	var imgs = config.images;
	var imgc = imgs.length ;
	var speed = 500;
	var cntr = 0;
	var box = document.getElementById(id);
	var img = document.createElement('img');
	if(config.width!=null){img.width=config.width}
	if(config.height!=null){img.width=config.height}
	if(config.speed!=null){speed=config.speed*1000}
	box.appendChild(img);
	this.icel = function(){
		img.src = imgs[cntr];
		console.log(speed);
		cntr++;
		if(cntr==imgc){ cntr=0;}
	}
	var ps = window.setInterval(function(){icel();},speed);

}