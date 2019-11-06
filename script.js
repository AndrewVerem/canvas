(function () {
	const canvas = document.getElementById('my_canvas');
	canvas.width = 384;
	canvas.height = 384;
	var context = canvas.getContext('2d');

	var animation = {
		swordman: {
			walking: {N: {start: 0, end: 7}, NE: {start: 8, end: 15}, E: {start: 16, end: 23}, SE: {start: 24, end: 31}, 
					S: {start: 32, end: 39}, SW: {start: 40, end: 47}, W: {start: 48, end: 55}, NW: {start: 56, end: 63}},
			running: {N: {start: 64, end: 71}, NE: {start: 72, end: 79}, E: {start: 80, end: 87}, SE: {start: 88, end: 95},
					S: {start: 96, end: 103}, SW: {start: 104, end: 111}, W: {start: 112, end: 119}, NW: {start: 120, end: 127}},
			attack: {N: {start: 128, end: 133}, NE: {start: 134, end: 139}, E: {start: 140, end: 145}, SE: {start: 146, end: 151},
					S: {start: 152, end: 157}, SW: {start: 158, end: 163}, W: {start: 164, end: 169}, NW: {start: 170, end: 175}}},
		militia: {
			walking: {N: {start: 0, end: 7}, NE: {start: 8, end: 15}, E: {start: 16, end: 23}, SE: {start: 24, end: 31}, 
					S: {start: 32, end: 39}, SW: {start: 40, end: 47}, W: {start: 48, end: 55}, NW: {start: 56, end: 63}},
			running: {N: {start: 64, end: 71}, NE: {start: 72, end: 79}, E: {start: 80, end: 87}, SE: {start: 88, end: 95},
					S: {start: 96, end: 103}, SW: {start: 104, end: 111}, W: {start: 112, end: 119}, NW: {start: 120, end: 127}},
			attack: {N: {start: 128, end: 133}, NE: {start: 134, end: 139}, E: {start: 140, end: 145}, SE: {start: 146, end: 151},
					S: {start: 152, end: 157}, SW: {start: 158, end: 163}, W: {start: 164, end: 169}, NW: {start: 170, end: 175}}},
		axeman: {
			walking: {N: {start: 0, end: 7}, NE: {start: 8, end: 15}, E: {start: 16, end: 23}, SE: {start: 24, end: 31}, 
					S: {start: 32, end: 39}, SW: {start: 40, end: 47}, W: {start: 48, end: 55}, NW: {start: 56, end: 63}},
			running: {N: {start: 64, end: 71}, NE: {start: 72, end: 79}, E: {start: 80, end: 87}, SE: {start: 88, end: 95},
					S: {start: 96, end: 103}, SW: {start: 104, end: 111}, W: {start: 112, end: 119}, NW: {start: 120, end: 127}},
			attack: {N: {start: 128, end: 133}, NE: {start: 134, end: 139}, E: {start: 140, end: 145}, SE: {start: 146, end: 151},
					S: {start: 152, end: 157}, SW: {start: 158, end: 163}, W: {start: 164, end: 169}, NW: {start: 170, end: 175}}},
		lanceman: {
			walking: {N: {start: 0, end: 7}, NE: {start: 8, end: 15}, E: {start: 16, end: 23}, SE: {start: 24, end: 31}, 
					S: {start: 32, end: 39}, SW: {start: 40, end: 47}, W: {start: 48, end: 55}, NW: {start: 56, end: 63}},
			attack: {N: {start: 64, end: 70}, NE: {start: 71, end: 80}, E: {start: 81, end: 90}, SE: {start: 91, end: 100},
					S: {start: 101, end: 107}, SW: {start: 108, end: 114}, W: {start: 115, end: 124}, NW: {start: 125, end: 134}}},
		pikeman: {
			walking: {N: {start: 0, end: 7}, NE: {start: 8, end: 15}, E: {start: 16, end: 23}, SE: {start: 24, end: 31}, 
					S: {start: 32, end: 39}, SW: {start: 40, end: 47}, W: {start: 48, end: 55}, NW: {start: 56, end: 63}},
			attack: {N: {start: 64, end: 70}, NE: {start: 71, end: 80}, E: {start: 81, end: 86}, SE: {start: 87, end: 96},
					S: {start: 97, end: 103}, SW: {start: 104, end: 110}, W: {start: 111, end: 117}, NW: {start: 118, end: 127}}},
		archer: {
			walking: {N: {start: 0, end: 7}, NE: {start: 8, end: 15}, E: {start: 16, end: 23}, SE: {start: 24, end: 31}, 
					S: {start: 32, end: 39}, SW: {start: 40, end: 47}, W: {start: 48, end: 55}, NW: {start: 56, end: 63}},
			attack: {N: {start: 64, end: 79}, NE: {start: 80, end: 95}, E: {start: 96, end: 111}, SE: {start: 112, end: 127},
					S: {start: 128, end: 143}, SW: {start: 144, end: 159}, W: {start: 160, end: 175}, NW: {start: 176, end: 191}}}
	};

	function Resources () {
		this._numImage = 176;
		this._swordman = [];
		this._militia = [];
		this._axeman = [];
		this._lanceman = [];
		this._pikeman = [];
		this._archer = [];
	}

	Resources.prototype.load = function() {
		var n = 0;
		while(n < this._numImage)
		{
			this._swordman.push(new Image());
			this._swordman[n].src = "img/Swordman/swordman_" + n + ".png";
			this._militia.push(new Image());
			this._militia[n].src = "img/Militia/militia_" + n + ".png";
			this._axeman.push(new Image());
			this._axeman[n].src = "img/Axeman/axeman_" + n + ".png";
			n++;
		}

		n = 0;
		while(n < 135)
		{
			this._lanceman.push(new Image());
			this._lanceman[n].src = "img/Lanceman/lanceman_" + n + ".png";
			n++;
		}
		n = 0;
		while(n < 128)
		{
			this._pikeman.push(new Image());
			this._pikeman[n].src = "img/Pikeman/pikeman_" + n + ".png";
			n++;
		}
		n=0;
		while(n < 192)
		{
			this._archer.push(new Image());
			this._archer[n].src = "img/Archer/archer_" + n + ".png";
			n++;
		}
	}

	Resources.prototype.getUnit = function(type) {
		if(type == "swordman") return this._swordman;
		if(type == "militia") return this._militia;
		if(type == "axeman") return this._axeman;
		if(type == "lanceman") return this._lanceman;
		if(type == "pikeman") return this._pikeman;
		if(type == "archer") return this._archer;
	}

	function AnimationManager(type, unit, rate) {
		this._type = type;
		this._dir = "N";
		this._action = "stopped";
		this._unit = unit;
		this._iFrame = 0;
		this._lastTime = 0;
		this._rate = rate;
	}

	AnimationManager.prototype.render = function(time) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(this._unit[this._iFrame], 150, 150);
		context.fillText(this._iFrame, 150, 100);

		if((time - this._lastTime) > this._rate) {
			this._lastTime = time;
			if(this._action == "stopped") {
				this._iFrame = animation[this._type]["walking"][this._dir]["end"];
			}else{
				if(this._iFrame < animation[this._type][this._action][this._dir]["end"] &&
							this._iFrame >= animation[this._type][this._action][this._dir]["start"])
					this._iFrame++;
				else this._iFrame = animation[this._type][this._action][this._dir]["start"];
			}
		}
	}

	AnimationManager.prototype.update = function() {
		var inp = document.getElementsByName("dir");
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
				this._dir = inp[i].value;
			}
		}
		inp = document.getElementsByName("actions");
    	for (i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
				this._action = inp[i].value;
			}
			if(!("running" in animation[this._type]) && inp[i].value == "running") {
				inp[i].parentElement.style.color = "red";
				inp[i].disabled = true;
				if(inp[i].checked) inp[i-1].checked = true;
			}else if(inp[i].value == "running") {
				inp[i].parentElement.style.color = "black";
				inp[i].disabled = false;
			}
		}
	}

	function circle_input() {
		var wrap_left = 520, wrap_top = 120, radius = 50;
		var dir = document.getElementById("direction");
		var el_input = dir.getElementsByTagName("input");
		for(i=0; i < el_input.length; i++) {
			var f = 2/el_input.length * i * Math.PI;
			var left = wrap_left + radius * Math.sin(f) + 'px';
			var top = wrap_top + radius * Math.cos(f) + 'px';
			el_input[i].style.top = top;
			el_input[i].style.left = left;
		}
	}

	var res = new Resources();
	res.load();
	var sel = document.getElementById("type_unit");
	var type = "swordman";
	var am = new AnimationManager(type, res.getUnit(type), 100);
	sel.addEventListener("change", function() {
		type = sel.value;
		delete am;
		am = new AnimationManager(type, res.getUnit(type), 100);
	});
	circle_input();
	window.main = function (time) {
		am.render(time);
		am.update();
		window.requestAnimationFrame(main);
	};
	main();
})();