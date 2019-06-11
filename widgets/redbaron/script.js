import PSY from "https://aussieappz.github.io/widgets/redbaron/include.js"

class Psy0 extends PSY {
  constructor({app, nPtc}) {
    super({app, nPtc});
  }
  buildTexture(g) {
    g.beginFill(0xff0000, 0.05);
    g.moveTo(0, 0);
    g.lineTo(innerWidth, 0);
    g.quadraticCurveTo(100, 100, 0, 0);
  }
  recycle(sp, isFirstRun) {
    const i = sp.$id / (this.nPtc - 1);
    if (isFirstRun) {
      sp.position.x = -sp.texture.width/2 + i * (innerWidth + sp.texture.width);
      sp.anchor.set(0.5, 0.5);
      sp.position.y = (1 + i) * innerHeight/2;
      sp.angle = i * 360;
    }
    else {
      sp.position.y = i * innerHeight/2;
    }
    
    sp.$vy = 4;
    sp.$w = 0.5;
  }
  update() {
    const mxw = innerWidth;
    const mxh = innerHeight;
    for (const sp of this.container.children) {
      const bounds = sp.getBounds();
      sp.position.y += sp.$vy;
      sp.angle += sp.$w;
      if (bounds.y > mxh ) {
        this.recycle(sp);
      }
    }
  }
}

// ------------------ app MAIN
const app = new PIXI.Application({transparent:true,antialias:true});
document.body.prepend(app.view);
const psy0 = new Psy0({app, nPtc:512});
/////////////////// Update
app.ticker.add(() => {
  psy0.update();
});
////////////////// resize
onresize = () => {
  app.renderer.resize(innerWidth, innerHeight);
  psy0.regen();
}
onresize();