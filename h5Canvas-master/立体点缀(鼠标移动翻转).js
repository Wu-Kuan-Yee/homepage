document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\'en\'>");
document.writeln("<head>");
document.writeln("    <meta charset=\'UTF-8\'>");
document.writeln("    <title>立体点缀(鼠标移动翻转)</title>");
document.writeln("");
document.writeln("    <style>");
document.writeln("    html {");
document.writeln("    height: 100%;");
document.writeln("    background-image: -webkit-radial-gradient(ellipse farthest-corner at center top, #000d4d 0%, #000105 100%);");
document.writeln("    background-image: radial-gradient(ellipse farthest-corner at center top, #000d4d 0%, #000105 100%);");
document.writeln("    cursor: move;");
document.writeln("    }");
document.writeln("");
document.writeln("    body {");
document.writeln("    width: 100%;");
document.writeln("    margin: 0;");
document.writeln("    overflow: hidden;");
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
document.writeln("    <canvas id=\'canv\'></canvas>");
document.writeln("");
document.writeln("<script>");
document.writeln("var num = 200;");
document.writeln("var w = window.innerWidth;");
document.writeln("var h = window.innerHeight;");
document.writeln("var max = 100;");
document.writeln("var _x = 0;");
document.writeln("var _y = 0;");
document.writeln("var _z = 150;");
document.writeln("var dtr = function(d) {");
document.writeln("  return d * Math.PI / 180;");
document.writeln("};");
document.writeln("");
document.writeln("var rnd = function() {");
document.writeln("  return Math.sin(Math.floor(Math.random() * 360) * Math.PI / 180);");
document.writeln("};");
document.writeln("var dist = function(p1, p2, p3) {");
document.writeln("  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) + Math.pow(p2.z - p1.z, 2));");
document.writeln("};");
document.writeln("");
document.writeln("var cam = {");
document.writeln("  obj: {");
document.writeln("    x: _x,");
document.writeln("    y: _y,");
document.writeln("    z: _z");
document.writeln("  },");
document.writeln("  dest: {");
document.writeln("    x: 0,");
document.writeln("    y: 0,");
document.writeln("    z: 1");
document.writeln("  },");
document.writeln("  dist: {");
document.writeln("    x: 0,");
document.writeln("    y: 0,");
document.writeln("    z: 200");
document.writeln("  },");
document.writeln("  ang: {");
document.writeln("    cplane: 0,");
document.writeln("    splane: 0,");
document.writeln("    ctheta: 0,");
document.writeln("    stheta: 0");
document.writeln("  },");
document.writeln("  zoom: 1,");
document.writeln("  disp: {");
document.writeln("    x: w / 2,");
document.writeln("    y: h / 2,");
document.writeln("    z: 0");
document.writeln("  },");
document.writeln("  upd: function() {");
document.writeln("    cam.dist.x = cam.dest.x - cam.obj.x;");
document.writeln("    cam.dist.y = cam.dest.y - cam.obj.y;");
document.writeln("    cam.dist.z = cam.dest.z - cam.obj.z;");
document.writeln("    cam.ang.cplane = -cam.dist.z / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);");
document.writeln("    cam.ang.splane = cam.dist.x / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);");
document.writeln("    cam.ang.ctheta = Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z) / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z);");
document.writeln("    cam.ang.stheta = -cam.dist.y / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z);");
document.writeln("  }");
document.writeln("};");
document.writeln("");
document.writeln("var trans = {");
document.writeln("  parts: {");
document.writeln("    sz: function(p, sz) {");
document.writeln("      return {");
document.writeln("        x: p.x * sz.x,");
document.writeln("        y: p.y * sz.y,");
document.writeln("        z: p.z * sz.z");
document.writeln("      };");
document.writeln("    },");
document.writeln("    rot: {");
document.writeln("      x: function(p, rot) {");
document.writeln("        return {");
document.writeln("          x: p.x,");
document.writeln("          y: p.y * Math.cos(dtr(rot.x)) - p.z * Math.sin(dtr(rot.x)),");
document.writeln("          z: p.y * Math.sin(dtr(rot.x)) + p.z * Math.cos(dtr(rot.x))");
document.writeln("        };");
document.writeln("      },");
document.writeln("      y: function(p, rot) {");
document.writeln("        return {");
document.writeln("          x: p.x * Math.cos(dtr(rot.y)) + p.z * Math.sin(dtr(rot.y)),");
document.writeln("          y: p.y,");
document.writeln("          z: -p.x * Math.sin(dtr(rot.y)) + p.z * Math.cos(dtr(rot.y))");
document.writeln("        };");
document.writeln("      },");
document.writeln("      z: function(p, rot) {");
document.writeln("        return {");
document.writeln("          x: p.x * Math.cos(dtr(rot.z)) - p.y * Math.sin(dtr(rot.z)),");
document.writeln("          y: p.x * Math.sin(dtr(rot.z)) + p.y * Math.cos(dtr(rot.z)),");
document.writeln("          z: p.z");
document.writeln("        };");
document.writeln("      }");
document.writeln("    },");
document.writeln("    pos: function(p, pos) {");
document.writeln("      return {");
document.writeln("        x: p.x + pos.x,");
document.writeln("        y: p.y + pos.y,");
document.writeln("        z: p.z + pos.z");
document.writeln("      };");
document.writeln("    }");
document.writeln("  },");
document.writeln("  pov: {");
document.writeln("    plane: function(p) {");
document.writeln("      return {");
document.writeln("        x: p.x * cam.ang.cplane + p.z * cam.ang.splane,");
document.writeln("        y: p.y,");
document.writeln("        z: p.x * -cam.ang.splane + p.z * cam.ang.cplane");
document.writeln("      };");
document.writeln("    },");
document.writeln("    theta: function(p) {");
document.writeln("      return {");
document.writeln("        x: p.x,");
document.writeln("        y: p.y * cam.ang.ctheta - p.z * cam.ang.stheta,");
document.writeln("        z: p.y * cam.ang.stheta + p.z * cam.ang.ctheta");
document.writeln("      };");
document.writeln("    },");
document.writeln("    set: function(p) {");
document.writeln("      return {");
document.writeln("        x: p.x - cam.obj.x,");
document.writeln("        y: p.y - cam.obj.y,");
document.writeln("        z: p.z - cam.obj.z");
document.writeln("      };");
document.writeln("    }");
document.writeln("  },");
document.writeln("  persp: function(p) {");
document.writeln("    return {");
document.writeln("      x: p.x * cam.dist.z / p.z * cam.zoom,");
document.writeln("      y: p.y * cam.dist.z / p.z * cam.zoom,");
document.writeln("      z: p.z * cam.zoom,");
document.writeln("      p: cam.dist.z / p.z");
document.writeln("    };");
document.writeln("  },");
document.writeln("  disp: function(p, disp) {");
document.writeln("    return {");
document.writeln("      x: p.x + disp.x,");
document.writeln("      y: -p.y + disp.y,");
document.writeln("      z: p.z + disp.z,");
document.writeln("      p: p.p");
document.writeln("    };");
document.writeln("  },");
document.writeln("  steps: function(_obj_, sz, rot, pos, disp) {");
document.writeln("    var _args = trans.parts.sz(_obj_, sz);");
document.writeln("    _args = trans.parts.rot.x(_args, rot);");
document.writeln("    _args = trans.parts.rot.y(_args, rot);");
document.writeln("    _args = trans.parts.rot.z(_args, rot);");
document.writeln("    _args = trans.parts.pos(_args, pos);");
document.writeln("    _args = trans.pov.plane(_args);");
document.writeln("    _args = trans.pov.theta(_args);");
document.writeln("    _args = trans.pov.set(_args);");
document.writeln("    _args = trans.persp(_args);");
document.writeln("    _args = trans.disp(_args, disp);");
document.writeln("    return _args;");
document.writeln("  }");
document.writeln("};");
document.writeln("");
document.writeln("(function() {");
document.writeln("  \'use strict\';");
document.writeln("  var threeD = function(param) {");
document.writeln("    this.transIn = {};");
document.writeln("    this.transOut = {};");
document.writeln("    this.transIn.vtx = (param.vtx);");
document.writeln("    this.transIn.sz = (param.sz);");
document.writeln("    this.transIn.rot = (param.rot);");
document.writeln("    this.transIn.pos = (param.pos);");
document.writeln("  };");
document.writeln("");
document.writeln("  threeD.prototype.vupd = function() {");
document.writeln("    this.transOut = trans.steps(");
document.writeln("");
document.writeln("      this.transIn.vtx,");
document.writeln("      this.transIn.sz,");
document.writeln("      this.transIn.rot,");
document.writeln("      this.transIn.pos,");
document.writeln("      cam.disp");
document.writeln("    );");
document.writeln("  };");
document.writeln("");
document.writeln("  var Build = function() {");
document.writeln("    this.vel = 0.04;");
document.writeln("    this.lim = 360;");
document.writeln("    this.diff = 200;");
document.writeln("    this.initPos = 100;");
document.writeln("    this.toX = _x;");
document.writeln("    this.toY = _y;");
document.writeln("    this.go();");
document.writeln("  };");
document.writeln("");
document.writeln("  Build.prototype.go = function() {");
document.writeln("    this.canvas = document.getElementById(\'canv\');");
document.writeln("    this.canvas.width = window.innerWidth;");
document.writeln("    this.canvas.height = window.innerHeight;");
document.writeln("    this.$ = canv.getContext(\'2d\');");
document.writeln("    this.$.globalCompositeOperation = \'source-over\';");
document.writeln("    this.varr = [];");
document.writeln("    this.dist = [];");
document.writeln("    this.calc = [];");
document.writeln("");
document.writeln("    for (var i = 0, len = num; i < len; i++) {");
document.writeln("      this.add();");
document.writeln("    }");
document.writeln("");
document.writeln("    this.rotObj = {");
document.writeln("      x: 0,");
document.writeln("      y: 0,");
document.writeln("      z: 0");
document.writeln("    };");
document.writeln("    this.objSz = {");
document.writeln("      x: w / 5,");
document.writeln("      y: h / 5,");
document.writeln("      z: w / 5");
document.writeln("    };");
document.writeln("  };");
document.writeln("");
document.writeln("  Build.prototype.add = function() {");
document.writeln("    this.varr.push(new threeD({");
document.writeln("      vtx: {");
document.writeln("        x: rnd(),");
document.writeln("        y: rnd(),");
document.writeln("        z: rnd()");
document.writeln("      },");
document.writeln("      sz: {");
document.writeln("        x: 0,");
document.writeln("        y: 0,");
document.writeln("        z: 0");
document.writeln("      },");
document.writeln("      rot: {");
document.writeln("        x: 20,");
document.writeln("        y: -20,");
document.writeln("        z: 0");
document.writeln("      },");
document.writeln("      pos: {");
document.writeln("        x: this.diff * Math.sin(360 * Math.random() * Math.PI / 180),");
document.writeln("        y: this.diff * Math.sin(360 * Math.random() * Math.PI / 180),");
document.writeln("        z: this.diff * Math.sin(360 * Math.random() * Math.PI / 180)");
document.writeln("      }");
document.writeln("    }));");
document.writeln("    this.calc.push({");
document.writeln("      x: 360 * Math.random(),");
document.writeln("      y: 360 * Math.random(),");
document.writeln("      z: 360 * Math.random()");
document.writeln("    });");
document.writeln("  };");
document.writeln("");
document.writeln("  Build.prototype.upd = function() {");
document.writeln("    cam.obj.x += (this.toX - cam.obj.x) * 0.05;");
document.writeln("    cam.obj.y += (this.toY - cam.obj.y) * 0.05;");
document.writeln("  };");
document.writeln("");
document.writeln("  Build.prototype.draw = function() {");
document.writeln("    this.$.clearRect(0, 0, this.canvas.width, this.canvas.height);");
document.writeln("    cam.upd();");
document.writeln("    this.rotObj.x += 0.1;");
document.writeln("    this.rotObj.y += 0.1;");
document.writeln("    this.rotObj.z += 0.1;");
document.writeln("");
document.writeln("    for (var i = 0; i < this.varr.length; i++) {");
document.writeln("      for (var val in this.calc[i]) {");
document.writeln("        if (this.calc[i].hasOwnProperty(val)) {");
document.writeln("          this.calc[i][val] += this.vel;");
document.writeln("          if (this.calc[i][val] > this.lim) this.calc[i][val] = 0;");
document.writeln("        }");
document.writeln("      }");
document.writeln("");
document.writeln("      this.varr[i].transIn.pos = {");
document.writeln("        x: this.diff * Math.cos(this.calc[i].x * Math.PI / 180),");
document.writeln("        y: this.diff * Math.sin(this.calc[i].y * Math.PI / 180),");
document.writeln("        z: this.diff * Math.sin(this.calc[i].z * Math.PI / 180)");
document.writeln("      };");
document.writeln("      this.varr[i].transIn.rot = this.rotObj;");
document.writeln("      this.varr[i].transIn.sz = this.objSz;");
document.writeln("      this.varr[i].vupd();");
document.writeln("      if (this.varr[i].transOut.p < 0) continue;");
document.writeln("      var g = this.$.createRadialGradient(this.varr[i].transOut.x, this.varr[i].transOut.y, this.varr[i].transOut.p, this.varr[i].transOut.x, this.varr[i].transOut.y, this.varr[i].transOut.p * 2);");
document.writeln("      this.$.globalCompositeOperation = \'lighter\';");
document.writeln("      g.addColorStop(0, \'hsla(255, 255%, 255%, 1)\');");
document.writeln("      g.addColorStop(.5, \'hsla(\' + (i + 2) + \',85%, 40%,1)\');");
document.writeln("      g.addColorStop(1, \'hsla(\' + (i) + \',85%, 40%,.5)\');");
document.writeln("      this.$.fillStyle = g;");
document.writeln("      this.$.beginPath();");
document.writeln("      this.$.arc(this.varr[i].transOut.x, this.varr[i].transOut.y, this.varr[i].transOut.p * 2, 0, Math.PI * 2, false);");
document.writeln("      this.$.fill();");
document.writeln("      this.$.closePath();");
document.writeln("    }");
document.writeln("  };");
document.writeln("  Build.prototype.anim = function() {");
document.writeln("    window.requestAnimationFrame = (function() {");
document.writeln("      return window.requestAnimationFrame ||");
document.writeln("        function(callback, element) {");
document.writeln("          window.setTimeout(callback, 1000 / 60);");
document.writeln("        };");
document.writeln("    })();");
document.writeln("    var anim = function() {");
document.writeln("      this.upd();");
document.writeln("      this.draw();");
document.writeln("      window.requestAnimationFrame(anim);");
document.writeln("    }.bind(this);");
document.writeln("    window.requestAnimationFrame(anim);");
document.writeln("  };");
document.writeln("");
document.writeln("  Build.prototype.run = function() {");
document.writeln("    this.anim();");
document.writeln("");
document.writeln("    window.addEventListener(\'mousemove\', function(e) {");
document.writeln("      this.toX = (e.clientX - this.canvas.width / 2) * -0.8;");
document.writeln("      this.toY = (e.clientY - this.canvas.height / 2) * 0.8;");
document.writeln("    }.bind(this));");
document.writeln("    window.addEventListener(\'touchmove\', function(e) {");
document.writeln("      e.preventDefault();");
document.writeln("      this.toX = (e.touches[0].clientX - this.canvas.width / 2) * -0.8;");
document.writeln("      this.toY = (e.touches[0].clientY - this.canvas.height / 2) * 0.8;");
document.writeln("    }.bind(this));");
document.writeln("    window.addEventListener(\'mousedown\', function(e) {");
document.writeln("      for (var i = 0; i < 100; i++) {");
document.writeln("        this.add();");
document.writeln("      }");
document.writeln("    }.bind(this));");
document.writeln("    window.addEventListener(\'touchstart\', function(e) {");
document.writeln("      e.preventDefault();");
document.writeln("      for (var i = 0; i < 100; i++) {");
document.writeln("        this.add();");
document.writeln("      }");
document.writeln("    }.bind(this));");
document.writeln("  };");
document.writeln("  var app = new Build();");
document.writeln("  app.run();");
document.writeln("})();");
document.writeln("window.addEventListener(\'resize\', function() {");
document.writeln("  canvas.width = w = window.innerWidth;");
document.writeln("  canvas.height = h = window.innerHeight;");
document.writeln("}, false);");
document.writeln("</script>");
document.writeln("</body>");
document.writeln("</html>");