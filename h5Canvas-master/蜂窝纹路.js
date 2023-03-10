document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\'en\'>");
document.writeln("<head>");
document.writeln("    <meta charset=\'UTF-8\'>");
document.writeln("    <title>蜂窝纹路</title>");
document.writeln("");
document.writeln("    <style>");
document.writeln("    canvas { position: absolute; top: 0; left: 0; }");
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
document.writeln("    <canvas id=\'c\'></canvas>");
document.writeln("");
document.writeln("<script>");
document.writeln("    var w = c.width = window.innerWidth,");
document.writeln("h = c.height = window.innerHeight,");
document.writeln("ctx = c.getContext(\'2d\'),");
document.writeln("opts = {");
document.writeln("	len: 20,");
document.writeln("	count: 50,");
document.writeln("	baseTime: 10,");
document.writeln("	addedTime: 10,");
document.writeln("	dieChance: .05,");
document.writeln("	spawnChance: 1,");
document.writeln("	sparkChance: .1,");
document.writeln("	sparkDist: 10,");
document.writeln("	sparkSize: 2,");
document.writeln("	color: \'hsl(hue,100%,light%)\',");
document.writeln("	baseLight: 50,");
document.writeln("	addedLight: 10,");
document.writeln("	shadowToTimePropMult: 6,");
document.writeln("	baseLightInputMultiplier: .01,");
document.writeln("	addedLightInputMultiplier: .02,");
document.writeln("	cx: w / 2,");
document.writeln("	cy: h / 2,");
document.writeln("	repaintAlpha: .04,");
document.writeln("	hueChange: .1");
document.writeln("},");
document.writeln("tick = 0,");
document.writeln("lines = [],");
document.writeln("dieX = w / 2 / opts.len,");
document.writeln("dieY = h / 2 / opts.len,");
document.writeln("baseRad = Math.PI * 2 / 6;");
document.writeln("ctx.fillStyle = \'black\';");
document.writeln("ctx.fillRect(0, 0, w, h);");
document.writeln("function loop() {");
document.writeln("	window.requestAnimationFrame(loop); ++tick;");
document.writeln("	ctx.globalCompositeOperation = \'source-over\';");
document.writeln("	ctx.shadowBlur = 0;");
document.writeln("	ctx.fillStyle = \'rgba(0,0,0,alp)\'.replace(\'alp\', opts.repaintAlpha);");
document.writeln("	ctx.fillRect(0, 0, w, h);");
document.writeln("	ctx.globalCompositeOperation = \'lighter\';");
document.writeln("	if (lines.length < opts.count && Math.random() < opts.spawnChance) lines.push(new Line);");
document.writeln("	lines.map(function(line) {");
document.writeln("		line.step()");
document.writeln("	})");
document.writeln("}");
document.writeln("function Line() {");
document.writeln("	this.reset()");
document.writeln("}");
document.writeln("Line.prototype.reset = function() {");
document.writeln("	this.x = 0;");
document.writeln("	this.y = 0;");
document.writeln("	this.addedX = 0;");
document.writeln("	this.addedY = 0;");
document.writeln("	this.rad = 0;");
document.writeln("	this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();");
document.writeln("	this.color = opts.color.replace(\'hue\', tick * opts.hueChange);");
document.writeln("	this.cumulativeTime = 0;");
document.writeln("	this.beginPhase()");
document.writeln("}");
document.writeln("Line.prototype.beginPhase = function() {");
document.writeln("	this.x += this.addedX;");
document.writeln("	this.y += this.addedY;");
document.writeln("	this.time = 0;");
document.writeln("	this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;");
document.writeln("	this.rad += baseRad * (Math.random() < .5 ? 1 : -1);");
document.writeln("	this.addedX = Math.cos(this.rad);");
document.writeln("	this.addedY = Math.sin(this.rad);");
document.writeln("	if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) this.reset()");
document.writeln("}");
document.writeln("Line.prototype.step = function() {++this.time; ++this.cumulativeTime;");
document.writeln("	if (this.time >= this.targetTime) this.beginPhase();");
document.writeln("	var prop = this.time / this.targetTime,");
document.writeln("	wave = Math.sin(prop * Math.PI / 2),");
document.writeln("	x = this.addedX * wave,");
document.writeln("	y = this.addedY * wave;");
document.writeln("	ctx.shadowBlur = prop * opts.shadowToTimePropMult;");
document.writeln("	ctx.fillStyle = ctx.shadowColor = this.color.replace(\'light\', opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier));");
document.writeln("	ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);");
document.writeln("	if (Math.random() < opts.sparkChance) ctx.fillRect(opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize)");
document.writeln("}");
document.writeln("loop();");
document.writeln("window.addEventListener(\'resize\',");
document.writeln("function() {");
document.writeln("	w = c.width = window.innerWidth;");
document.writeln("	h = c.height = window.innerHeight;");
document.writeln("	ctx.fillStyle = \'black\';");
document.writeln("	ctx.fillRect(0, 0, w, h);");
document.writeln("	opts.cx = w / 2;");
document.writeln("	opts.cy = h / 2;");
document.writeln("	dieX = w / 2 / opts.len;");
document.writeln("	dieY = h / 2 / opts.len");
document.writeln("});");
document.writeln("</script>");
document.writeln("</body>");
document.writeln("</html>");