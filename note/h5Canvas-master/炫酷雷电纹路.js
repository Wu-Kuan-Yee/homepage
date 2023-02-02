document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\'en\'>");
document.writeln("<head>");
document.writeln("    <meta charset=\'UTF-8\'>");
document.writeln("    <title>炫酷雷电纹路</title>");
document.writeln("");
document.writeln("    <style>");
document.writeln("    body {");
document.writeln("	background: #000;");
document.writeln("	overflow: hidden;");
document.writeln("    }");
document.writeln("");
document.writeln("    canvas {");
document.writeln("        display: block;");
document.writeln("    }");
document.writeln("");
document.writeln("    /* Demo Buttons Style */");
document.writeln("    .codrops-demos {");
document.writeln("        font-size: 0.8em;");
document.writeln("        text-align:center;");
document.writeln("        position:absolute;");
document.writeln("        z-index:99;");
document.writeln("        width:96%;");
document.writeln("    }");
document.writeln("");
document.writeln("    .codrops-demos a {");
document.writeln("        display: inline-block;");
document.writeln("        margin: 0.35em 0.1em;");
document.writeln("        padding: 0.5em 1.2em;");
document.writeln("        outline: none;");
document.writeln("        text-decoration: none;");
document.writeln("        text-transform: uppercase;");
document.writeln("        letter-spacing: 1px;");
document.writeln("        font-weight: 700;");
document.writeln("        border-radius: 2px;");
document.writeln("        font-size: 110%;");
document.writeln("        border: 2px solid transparent;");
document.writeln("        color:#fff;");
document.writeln("    }");
document.writeln("");
document.writeln("    .codrops-demos a:hover,");
document.writeln("    .codrops-demos a.current-demo {");
document.writeln("        border-color: #383a3c;");
document.writeln("    }");
document.writeln("    </style>");
document.writeln("</head>");
document.writeln("<body>");
document.writeln("    ");
document.writeln("    <canvas id=\'canvas\'></canvas>");
document.writeln("");
document.writeln("<script>");
document.writeln("    var canvas,");
document.writeln("	ctx,");
document.writeln("	width,");
document.writeln("	height,");
document.writeln("	size,");
document.writeln("	lines,");
document.writeln("	tick;");
document.writeln("");
document.writeln("function line() {");
document.writeln("	this.path = [];");
document.writeln("	this.speed = rand(10, 20);");
document.writeln("	this.count = randInt(10, 30);");
document.writeln("	this.x = width / 2, +1;");
document.writeln("	this.y = height / 2 + 1;");
document.writeln("	this.target = {");
document.writeln("		x: width / 2,");
document.writeln("		y: height / 2");
document.writeln("	};");
document.writeln("	this.dist = 0;");
document.writeln("	this.angle = 0;");
document.writeln("	this.hue = tick / 5;");
document.writeln("	this.life = 1;");
document.writeln("	this.updateAngle();");
document.writeln("	this.updateDist();");
document.writeln("}");
document.writeln("");
document.writeln("line.prototype.step = function(i) {");
document.writeln("	this.x += Math.cos(this.angle) * this.speed;");
document.writeln("	this.y += Math.sin(this.angle) * this.speed;");
document.writeln("");
document.writeln("	this.updateDist();");
document.writeln("");
document.writeln("	if (this.dist < this.speed) {");
document.writeln("		this.x = this.target.x;");
document.writeln("		this.y = this.target.y;");
document.writeln("		this.changeTarget();");
document.writeln("	}");
document.writeln("");
document.writeln("	this.path.push({");
document.writeln("		x: this.x,");
document.writeln("		y: this.y");
document.writeln("	});");
document.writeln("	if (this.path.length > this.count) {");
document.writeln("		this.path.shift();");
document.writeln("	}");
document.writeln("");
document.writeln("	this.life -= 0.001;");
document.writeln("");
document.writeln("	if (this.life <= 0) {");
document.writeln("		this.path = null;");
document.writeln("		lines.splice(i, 1);");
document.writeln("	}");
document.writeln("};");
document.writeln("");
document.writeln("line.prototype.updateDist = function() {");
document.writeln("	var dx = this.target.x - this.x,");
document.writeln("		dy = this.target.y - this.y;");
document.writeln("	this.dist = Math.sqrt(dx * dx + dy * dy);");
document.writeln("}");
document.writeln("");
document.writeln("line.prototype.updateAngle = function() {");
document.writeln("	var dx = this.target.x - this.x,");
document.writeln("		dy = this.target.y - this.y;");
document.writeln("	this.angle = Math.atan2(dy, dx);");
document.writeln("}");
document.writeln("");
document.writeln("line.prototype.changeTarget = function() {");
document.writeln("	var randStart = randInt(0, 3);");
document.writeln("	switch (randStart) {");
document.writeln("		case 0: // up");
document.writeln("			this.target.y = this.y - size;");
document.writeln("			break;");
document.writeln("		case 1: // right");
document.writeln("			this.target.x = this.x + size;");
document.writeln("			break;");
document.writeln("		case 2: // down");
document.writeln("			this.target.y = this.y + size;");
document.writeln("			break;");
document.writeln("		case 3: // left");
document.writeln("			this.target.x = this.x - size;");
document.writeln("	}");
document.writeln("	this.updateAngle();");
document.writeln("};");
document.writeln("");
document.writeln("line.prototype.draw = function(i) {");
document.writeln("	ctx.beginPath();");
document.writeln("	var rando = rand(0, 10);");
document.writeln("	for (var j = 0, length = this.path.length; j < length; j++) {");
document.writeln("		ctx[(j === 0) ? \'moveTo\' : \'lineTo\'](this.path[j].x + rand(-rando, rando), this.path[j].y + rand(-rando, rando));");
document.writeln("	}");
document.writeln("	ctx.strokeStyle = \'hsla(\' + rand(this.hue, this.hue + 30) + \', 80%, 55%, \' + (this.life / 3) + \')\';");
document.writeln("	ctx.lineWidth = rand(0.1, 2);");
document.writeln("	ctx.stroke();");
document.writeln("};");
document.writeln("");
document.writeln("function rand(min, max) {");
document.writeln("	return Math.random() * (max - min) + min;");
document.writeln("}");
document.writeln("");
document.writeln("function randInt(min, max) {");
document.writeln("	return Math.floor(min + Math.random() * (max - min + 1));");
document.writeln("};");
document.writeln("");
document.writeln("function init() {");
document.writeln("	canvas = document.getElementById(\'canvas\');");
document.writeln("	ctx = canvas.getContext(\'2d\');");
document.writeln("	size = 30;");
document.writeln("	lines = [];");
document.writeln("	reset();");
document.writeln("	loop();");
document.writeln("}");
document.writeln("");
document.writeln("function reset() {");
document.writeln("	width = Math.ceil(window.innerWidth / 2) * 2;");
document.writeln("	height = Math.ceil(window.innerHeight / 2) * 2;");
document.writeln("	tick = 0;");
document.writeln("");
document.writeln("	lines.length = 0;");
document.writeln("	canvas.width = width;");
document.writeln("	canvas.height = height;");
document.writeln("}");
document.writeln("");
document.writeln("function create() {");
document.writeln("	if (tick % 10 === 0) {");
document.writeln("		lines.push(new line());");
document.writeln("	}");
document.writeln("}");
document.writeln("");
document.writeln("function step() {");
document.writeln("	var i = lines.length;");
document.writeln("	while (i--) {");
document.writeln("		lines[i].step(i);");
document.writeln("	}");
document.writeln("}");
document.writeln("");
document.writeln("function clear() {");
document.writeln("	ctx.globalCompositeOperation = \'destination-out\';");
document.writeln("	ctx.fillStyle = \'hsla(0, 0%, 0%, 0.1\';");
document.writeln("	ctx.fillRect(0, 0, width, height);");
document.writeln("	ctx.globalCompositeOperation = \'lighter\';");
document.writeln("}");
document.writeln("");
document.writeln("function draw() {");
document.writeln("	ctx.save();");
document.writeln("	ctx.translate(width / 2, height / 2);");
document.writeln("	ctx.rotate(tick * 0.001);");
document.writeln("	var scale = 0.8 + Math.cos(tick * 0.02) * 0.2;");
document.writeln("	ctx.scale(scale, scale);");
document.writeln("	ctx.translate(-width / 2, -height / 2);");
document.writeln("	var i = lines.length;");
document.writeln("	while (i--) {");
document.writeln("		lines[i].draw(i);");
document.writeln("	}");
document.writeln("	ctx.restore();");
document.writeln("}");
document.writeln("");
document.writeln("function loop() {");
document.writeln("	requestAnimationFrame(loop);");
document.writeln("	create();");
document.writeln("	step();");
document.writeln("	clear();");
document.writeln("	draw();");
document.writeln("	tick++;");
document.writeln("}");
document.writeln("");
document.writeln("function onresize() {");
document.writeln("	reset();");
document.writeln("}");
document.writeln("");
document.writeln("window.addEventListener(\'resize\', onresize);");
document.writeln("");
document.writeln("init();");
document.writeln("</script>");
document.writeln("</body>");
document.writeln("</html>");