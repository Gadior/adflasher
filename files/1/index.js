(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "index_atlas_P_",
      frames: [
        [0, 205, 94, 169],
        [0, 0, 181, 203],
        [0, 376, 179, 79],
      ],
    },
    {
      name: "index_atlas_NP_",
      frames: [
        [302, 0, 300, 600],
        [0, 0, 300, 600],
        [0, 602, 376, 179],
      ],
    },
  ];

  // symbols:

  (lib._300x600_kino = function () {
    this.initialize(ss["index_atlas_NP_"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib._300x600_kino2 = function () {
    this.initialize(ss["index_atlas_NP_"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.baloon = function () {
    this.initialize(ss["index_atlas_P_"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.obj = function () {
    this.initialize(ss["index_atlas_P_"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.phone = function () {
    this.initialize(ss["index_atlas_NP_"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.shadow = function () {
    this.initialize(ss["index_atlas_P_"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop)
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.Symbol17 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.baloon();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol17,
    new cjs.Rectangle(0, 0, 94, 169),
    null
  );

  (lib.Symbol15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#F5C635").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
    this.shape.setTransform(150, 300);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol15,
    new cjs.Rectangle(0, 0, 300, 600),
    null
  );

  (lib.Symbol14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNB0QgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAQgHAAgGgGgAgKAzIgGisIAhAAIgGCsg"
      );
    this.shape.setTransform(211.225, 23.275);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AA2B4IhahsIgYAcIAABQIgeAAIAAjvIAeAAIAAB7IBph7IAlAAIhjByIBsB9g");
    this.shape_1.setTransform(197.35, 23.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgvBzQgXgKgPgQQgQgRgJgXQgIgWAAgbQAAgaAIgXQAJgWAQgRQAPgRAXgJQAVgJAaAAQAbAAAWAJQAVAJARARQAPARAJAWQAIAXAAAaQAAAbgIAWQgJAXgPARQgRAQgVAKQgWAJgbAAQgaAAgVgJgAgkhZQgQAHgMANQgLANgGASQgHASAAAUQAAAVAHASQAGARALANQAMAOAQAHQAQAHAUAAQAUAAAQgHQARgHALgOQALgNAHgRQAGgSAAgVQAAgUgGgSQgHgSgLgNQgLgNgRgHQgQgIgUAAQgUAAgQAIg"
      );
    this.shape_2.setTransform(171.7, 23.125);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhVB4IAAjvIBgAAQARAAAOAFQAOAGAKAKQAKAKAFAOQAFANAAAPQAAAOgFANQgFANgKAJQgKAKgOAGQgOAFgRABIhCAAIAABfgAg3gBIA+AAQAWAAAMgNQAOgNAAgTQAAgWgOgMQgMgNgWABIg+AAg"
      );
    this.shape_3.setTransform(148.25, 23.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("ABRB4IgVg1Ih3AAIgVA1IgiAAIBgjvIAlAAIBgDvgAgyAoIBlAAIgziAg");
    this.shape_4.setTransform(124.975, 23.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABaCOIAAgsIiyAAIAAAsIgeAAIAAhEQALgBAIgEQAJgDAGgKQAHgKAFgTQAFgSAEgeIAPh4ICRAAIAADUIAWAAIAABHgAgigTQgEAlgKAWQgJAVgOAKICLAAIAAi6IhaAAg"
      );
    this.shape_5.setTransform(100.175, 25.325);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgwBzQgWgKgPgQQgQgRgJgXQgIgWAAgbQAAgaAIgXQAJgWAQgRQAPgRAWgJQAWgJAaAAQAaAAAXAJQAWAJAPARQAQARAJAWQAIAXAAAaQAAAbgIAWQgJAXgQARQgPAQgWAKQgXAJgaAAQgaAAgWgJgAgkhZQgQAHgMANQgLANgGASQgHASABAUQgBAVAHASQAGARALANQAMAOAQAHQARAHATAAQAUAAARgHQAPgHAMgOQAMgNAGgRQAGgSAAgVQAAgUgGgSQgGgSgMgNQgMgNgPgHQgRgIgUAAQgTAAgRAIg"
      );
    this.shape_6.setTransform(73.35, 23.125);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("ABHB4IAAjUIiMAAIAADUIgeAAIAAjvIDHAAIAADvg");
    this.shape_7.setTransform(46.75, 23.1);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhZB4IAAjvIBqAAQAQAAAMAEQANAFAJAIQAIAIAFAMQAFALAAANQAAAMgEAJQgDAJgGAIQgGAGgHAFQgIAFgIACQAJABAJAEQAIAFAHAIQAGAJAEAJQADALAAAKQABAOgFAMQgEAMgKAJQgJAJgMAEQgOAFgQAAgAg6BeIBIAAQAWAAALgMQAMgKAAgUQgBgJgCgHQgDgHgGgGQgFgGgIgDQgJgEgLAAIhIAAgAg6gPIBHAAQAUAAAKgLQALgLAAgRQAAgQgLgLQgKgLgUAAIhHAAg"
      );
    this.shape_8.setTransform(13.75, 23.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.Symbol14,
    new cjs.Rectangle(0, 0, 217.6, 47.9),
    null
  );

  (lib.Symbol13 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("ABmDVIAAhCIkXAAIAAlnIBNAAIAAEjICpAAIAAkjIBNAAIAAEjIAgAAIAACGg");
    this.shape.setTransform(172.825, 84.725);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABFC0IAAiAIg3AAIhHCAIhYAAIBRiJQgUgEgRgOQgSgNgMgVQgLgWgBggQABgiAOgaQAPgaAbgPQAbgPAlAAICoAAIAAFngAgxhjQgPANAAAXQAAAXAPANQAPANAYgBIBPAAIAAhhIhPAAQgYAAgPANg"
      );
    this.shape_1.setTransform(133.325, 81.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhMCiQgrgXgZgqQgZgpgBg4QABg3AZgpQAZgqArgXQArgYA1AAQAoAAAdANQAeAMATAUQAVAUAMAXIhBAgQgMgWgWgPQgXgPgdAAQgfAAgZAPQgaAQgPAaQgOAbAAAhQAAAiAOAbQAPAaAaAPQAZAQAfAAQAdAAAXgPQAWgOAMgXIBBAfQgNAXgUAUQgUAVgdAMQgdANgoAAQg1AAgrgYg"
      );
    this.shape_2.setTransform(98.6, 81.425);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("Ah/C0IAAlnID/AAIAABDIiyAAIAABNICtAAIAABCIitAAIAABRICyAAIAABEg");
    this.shape_3.setTransform(64.45, 81.4);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AB2C0IAAj7IhlD7IghAAIhlj7IAAD7IhNAAIAAlnIBrAAIBXDYIBXjYIBsAAIAAFng");
    this.shape_4.setTransform(25.075, 81.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABVDhIAAjwIirDwIhKAAIAAlnIBNAAIAADnICljnIBPAAIAAFngAg0ikQgZgMgRgXIAfgZQAKAPARAJQAQAKAUgBQAVAAAQgIQAQgJAMgQIAeAZQgQAXgZAMQgYANgeAAQgcAAgYgNg"
      );
    this.shape_5.setTransform(208.925, 29.15);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AB6C0IAAlnIBMAAIAAFngAjGC0IAAlnIBOAAIAACAIBbAAQAmAAAbAQQAbAQAOAZQAOAaAAAfQAAAhgOAaQgOAagbAQQgbAPgmABgAh4BxIBRAAQAXgBAPgNQAOgNAAgXQAAgVgOgNQgPgNgXgBIhRAAg"
      );
    this.shape_6.setTransform(165.85, 33.65);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiVC0IAAlnIC8AAQAjAAAXANQAXAMALAWQAMAUAAAZQAAAWgIARQgJASgOALQgOAKgRAFQATACAQAMQAPAMAKATQAJATAAAXQAAAbgMAWQgMAWgXANQgXAMgjABgAhIByIBhAAQAWAAAMgLQANgMAAgTQAAgRgMgNQgMgMgXAAIhhAAgAhIgjIBfAAQATAAALgLQALgLABgRQgBgRgLgLQgLgLgTAAIhfAAg"
      );
    this.shape_7.setTransform(125.225, 33.65);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiQC0IAAlnICoAAQAnABAbAPQAbAPAOAbQAOAaAAAgQAAAfgOAbQgOAZgbAQQgbAQgnAAIhbAAIAACAgAhDgOIBRAAQAXAAAPgOQAOgNABgWQgBgXgOgNQgPgMgXAAIhRAAg"
      );
    this.shape_8.setTransform(90.975, 33.65);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p("Ah/C0IAAlnID+AAIAABEIiwAAIAABLICtAAIAABDIitAAIAABSICwAAIAABDg");
    this.shape_9.setTransform(57.75, 33.65);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p("ABVC0IAAkjIipAAIAAEjIhNAAIAAlnIFDAAIAAFng");
    this.shape_10.setTransform(21.75, 33.65);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.Symbol13,
    new cjs.Rectangle(0, 0, 230.8, 117.5),
    null
  );

  (lib.Symbol12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AhOB4IAAjvICdAAIAAAbIh/AAIAABNIB8AAIAAAZIh8AAIAABUIB/AAIAAAag");
    this.shape.setTransform(181.975, 23.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AgOB4IAAjUIhMAAIAAgbIC1AAIAAAbIhMAAIAADUg");
    this.shape_1.setTransform(161.1, 23.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("ABGB4IAAi/IiMC/IgcAAIAAjvIAdAAIAAC7ICKi7IAfAAIAADvg");
    this.shape_2.setTransform(138.1, 23.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AA3B4IAAhoIgaAGQgOACgQABQgWAAgPgHQgQgFgKgLQgKgKgGgPQgEgPAAgTIAAg+IAdAAIAAA/QABAbAOAOQAOAOAaAAQAPAAAOgCQAPgCALgFIAAhtIAfAAIAADvg"
      );
    this.shape_3.setTransform(114, 23.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhXB1QgNgGgGgIIANgYQAGAHAIAFQAIAEAKAAQAHAAAGgBQAFgCAFgEIAJgLIAJgQIAEgIIhdiuIAjAAIBKCTIBMiTIAhAAIhoDEIgLAUQgGAIgHAGQgJAHgJADQgJADgNAAQgQAAgMgFg"
      );
    this.shape_4.setTransform(92.05, 23.325);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhrBfQALAAAIgDQAIgEAHgLQAHgKAFgTQAFgTAEgeIAOh4ICSAAIAADvIgdAAIAAjVIhaAAIgMBgQgFAngHAYQgIAYgLANQgKANgOAEQgNAEgQAAg"
      );
    this.shape_5.setTransform(67.125, 23.325);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgwBzQgWgKgPgQQgQgRgJgXQgIgWAAgbQAAgaAIgXQAJgWAQgRQAPgRAWgJQAWgJAaAAQAaAAAXAJQAWAJAPARQAQARAJAWQAIAXAAAaQAAAbgIAWQgJAXgQARQgPAQgWAKQgXAJgaAAQgaAAgWgJgAgkhZQgQAHgMANQgLANgGASQgHASABAUQgBAVAHASQAGARALANQAMAOAQAHQARAHATAAQAUAAARgHQAPgHAMgOQAMgNAGgRQAGgSAAgVQAAgUgGgSQgGgSgMgNQgMgNgPgHQgRgIgUAAQgTAAgRAIg"
      );
    this.shape_6.setTransform(41.4, 23.125);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("ABHB4IAAjUIiMAAIAADUIgeAAIAAjvIDHAAIAADvg");
    this.shape_7.setTransform(14.8, 23.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.Symbol12,
    new cjs.Rectangle(0, 0, 194, 47.9),
    null
  );

  (lib.Symbol11 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E83F3F").s().p("AxVDXIAAmtMAirAAAIAAGtg");
    this.shape.setTransform(111, 21.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol11,
    new cjs.Rectangle(0, 0, 222, 43),
    null
  );

  (lib.Symbol10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAcBJIAAg0IgXAAIgcA0IgkAAIAig4QgJgBgHgGQgHgFgEgIQgFgJgBgNQABgOAFgLQAGgKAMgGQALgGAPAAIBDAAIAACRgAgTgoQgGAGAAAJQAAAJAGAFQAGAGAJAAIAgAAIAAgoIggAAQgJAAgGAFg"
      );
    this.shape.setTransform(183, 14.925);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgeBCQgSgJgKgRQgLgRAAgXQAAgWALgRQAKgRASgJQARgKAVAAQAQAAAMAFQAMAFAIAJQAJAIAFAJIgbANQgFgJgJgGQgJgGgMAAQgMAAgKAGQgLAGgGALQgGALAAANQAAAOAGALQAGALALAGQAKAGAMAAQAMAAAJgGQAJgGAFgJIAbANQgFAJgJAIQgIAIgMAGQgMAFgQAAQgVAAgRgKg"
      );
    this.shape_1.setTransform(168.875, 14.925);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag6BJIAAiRIAgAAIAAA0IAjAAQAQAAALAGQALAHAHAJQAFALAAANQAAANgFALQgHAKgLAHQgLAGgQAAgAgaAuIAgAAQAJAAAGgGQAGgFAAgJQAAgJgGgGQgGgFgJAAIggAAg"
      );
    this.shape_2.setTransform(154.75, 14.925);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AgPBJIAAh2IgrAAIAAgbIB0AAIAAAbIgqAAIAAB2g");
    this.shape_3.setTransform(141.05, 14.925);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AAiBJIAAhhIhFBhIgeAAIAAiRIAgAAIAABdIBDhdIAgAAIAACRg");
    this.shape_4.setTransform(126.625, 14.925);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAcBJIAAg4QgHACgIABQgJACgHAAQgTAAgMgHQgMgHgGgLQgGgMAAgQIAAgpIAgAAIAAApQAAAOAHAGQAHAGAMAAIAOgBIAOgEIAAg+IAfAAIAACRg"
      );
    this.shape_5.setTransform(111.25, 14.925);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIBEQgQgIgLgPQgKgOgCgTIgYAAIAAA9IgfAAIAAiRIAfAAIAAA5IAYAAQADgSALgNQAKgOAQgHQAOgIAUAAQAWAAASAKQARAKAJARQALARAAAVQAAAWgLARQgJARgRAKQgSAKgWAAQgUAAgPgIgAADgpQgIAHgGAKQgFALgBANQABAOAFALQAGAKAIAHQALAGANAAQAOAAAKgGQAKgHAFgKQAFgLABgOQgBgNgFgLQgFgKgKgHQgKgGgOAAQgNAAgLAGg"
      );
    this.shape_6.setTransform(93.2, 14.925);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhFAvQAHAAAFgDQAGgFADgKQAEgJADgUIAIhKIBnAAIAACSIgfAAIAAh2IgrAAIgHAxQgCAWgGAOQgEAOgIAJQgIAHgKADQgJACgLABg"
      );
    this.shape_7.setTransform(72.9, 15.05);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("AAYBJIgrg7IgLAOIAAAtIggAAIAAiRIAgAAIAABBIAyhBIAnAAIg6BEIA+BNg");
    this.shape_8.setTransform(59.025, 14.925);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAuBXIAAgbIhbAAIAAAbIgfAAIAAg0QAHgBAGgEQAFgDAEgKQAEgKACgSIAIhLIBoAAIAAB2IANAAIAAA3gAgRgJQgBAOgFAKQgFALgGAGIBCAAIAAhaIgrAAg"
      );
    this.shape_9.setTransform(43.2, 16.275);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgnBCQgRgKgKgRQgKgRAAgWQAAgVAKgRQAKgRARgKQASgKAVAAQAWAAASAKQARAKAKARQAJARABAVQgBAWgJARQgKARgRAKQgSAKgWAAQgVAAgSgKgAgXgpQgKAGgFALQgGALAAANQAAAOAGALQAFAKAKAHQAKAGANAAQANAAAKgGQAKgHAGgKQAFgLAAgOQAAgNgFgLQgGgLgKgGQgKgGgNAAQgNAAgKAGg"
      );
    this.shape_10.setTransform(26.525, 14.925);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p("AAjBJIAAh2IhFAAIAAB2IgfAAIAAiRICDAAIAACRg");
    this.shape_11.setTransform(10.05, 14.925);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.Symbol10,
    new cjs.Rectangle(0, 0, 192.6, 30.8),
    null
  );

  (lib.Symbol9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E83F3F").s().p("EgXbAp4MAAAhH3IdDr4IR0DcMAAABQTg");
    this.shape.setTransform(150, 286);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol9,
    new cjs.Rectangle(0, 18, 300, 536),
    null
  );

  (lib.Symbol8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.shadow();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol8,
    new cjs.Rectangle(0, 0, 179, 79),
    null
  );

  (lib.Symbol7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.obj();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol7,
    new cjs.Rectangle(0, 0, 181, 203),
    null
  );

  (lib.Symbol5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAsA5IAAhxIAUAAIAABxgAg/A5IAAhxIAUAAIAAAtIAYAAQAXgBANAKQANAIAAAQQAAAOgLALQgLAKgWAAgAgrApIAUAAQASAAAHgFQAIgEAAgKQAAgHgGgFQgFgGgUgBIgWAAg"
      );
    this.shape.setTransform(125.325, 37.75);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AAqA5IAAhbIgiBbIgQAAIghhfIAABfIgTAAIAAhxIAfAAIAdBaIAhhaIAcAAIAABxg");
    this.shape_1.setTransform(109.85, 37.75);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgpAzQgLgKAAgOQABgIAEgIQADgGAHgFQAFgCAIgDIARgDQAXgCALgFIAAgEQAAgMgFgFQgIgGgOgBQgNABgHAEQgGAFgDAMIgTgDQADgMAGgHQAFgIAMgDQAKgFAOAAQAPAAAJAEQAJADAFAGQADAFACAHIABASIAAAZQAAAbACAIQABAGADAHIgTAAQgDgGgCgIQgKAJgKAEQgJAEgLAAQgUgBgJgIgAgDAHQgNACgEACQgFACgDAFQgDAEAAAFQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEAEgJQADgGAAgNIAAgHQgLAEgTADg"
      );
    this.shape_2.setTransform(96.1, 37.75);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3A5IAAgRIAJAAQAGAAACgBQADgBABgDQABgCAAgQIAAhKIBZAAIAAByIgUAAIAAhhIgyAAIAAA3QAAAUgBAGQgCAHgFAEQgGAGgLAAIgQgBg"
      );
    this.shape_3.setTransform(83.025, 37.8);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAUA5IgUgkQgGgKgEgDQgFgDgHgBIAAA1IgTAAIAAhxIATAAIAAAxQAKAAADgDQAEgEAGgRQAGgOAEgEQADgEAFgBQAEgCALAAIADAAIAAAQIgFAAQgIAAgCACIgHAOQgEAMgEAEQgDAEgHAEQAMACAMATIAVAkg"
      );
    this.shape_4.setTransform(73.175, 37.75);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AglAsQgPgPAAgcQAAgcAPgQQAPgQAXAAQAWAAAPAQQAOAQAAAbIAAAFIhTAAQABASAJALQAKAJANABQAKgBAIgFQAHgGAFgMIAUACQgEASgOAKQgMAKgUAAQgYgBgPgPgAgUgiQgKAJAAAPIA/AAQgCgOgGgIQgJgLgPAAQgNAAgIAJg"
      );
    this.shape_5.setTransform(61.35, 37.75);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgxBQIAAidIASAAIAAAPQAGgIAIgFQAIgEAKAAQAPAAALAIQALAHAGANQAGAOgBAQQAAASgFANQgHAOgMAHQgMAIgNAAQgJAAgHgEQgIgEgFgHIAAA4gAgWg0QgJALAAAWQAAAVAJAKQAJALANAAQAMAAAIgLQAKgLAAgWQAAgVgJgLQgJgLgMAAQgMAAgKAMg"
      );
    this.shape_6.setTransform(49.45, 39.8);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgrAZIASgEQADALAHAGQAIAGAJAAQAJAAAHgGQAGgFAAgIQAAgHgEgGQgEgEgEgBIgQgBIgFAAIAAgOIAQgBQAFgBAEgFQAEgEAAgHQAAgIgGgEQgFgFgIAAQgPAAgHATIgSgCQAIggAggBQASABALAJQAKALAAANQAAAOgNAJQAIADAEAHQAFAIAAAJQAAAPgLAKQgMAKgUAAQgmAAgGgjg"
      );
    this.shape_7.setTransform(31.775, 37.75);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgkAsQgPgPgBgcQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQABASAKALQAKAJANABQAKgBAIgFQAHgGAFgMIAUACQgEASgNAKQgNAKgUAAQgYgBgOgPgAgUgiQgJAJgCAPIBAAAQgCgOgGgIQgJgLgPAAQgNAAgIAJg"
      );
    this.shape_8.setTransform(20.65, 37.75);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgeBJQgLgKgGgOQgGgPAAgjQAAgtAPgQQAQgPAeAAIAXgBQAAAAABAAQABgBAAAAQABAAAAgBQAAAAAAgBIARAAQgBAMgEAEQgEAFgGABQgGABgSAAQgXAAgJAFQgIAFgEAKQgEAKAAAQQAHgLAKgFQAJgGAMAAQAWAAAPAQQAPAPAAAZQAAAUgIANQgHANgKAHQgLAHgRAAQgTAAgMgJgAgXgGQgIALAAAUQAAAUAJALQAKAKANAAQAOAAAJgMQAJgMAAgUQAAgSgIgKQgJgMgPAAQgPAAgJAMg"
      );
    this.shape_9.setTransform(8.375, 35.525);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhABPIAAidIA2AAQASAAAJADQAOADAJAIQANAKAGARQAGAQAAAVQAAARgEAOQgEAOgHAJQgGAJgIAFQgIAFgLADQgLADgNAAgAgrA8IAhAAQAPAAAJgDQAIgDAGgFQAIgHAEgNQADgMAAgRQAAgZgIgNQgHgNgMgFQgJgDgRAAIghAAg"
      );
    this.shape_10.setTransform(217.35, 14.025);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p("AApBPIAAhKIhRAAIAABKIgVAAIAAidIAVAAIAABBIBRAAIAAhBIAVAAIAACdg");
    this.shape_11.setTransform(201.175, 14.025);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
    this.shape_12.setTransform(184.625, 14.025);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
    this.shape_13.setTransform(179.725, 14.025);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgZA2QgJgDgEgGQgEgGgCgJQgBgFAAgNIAAhFIATAAIAAA+QAAAPABAFQACAIAGAEQAGAFAJAAQAHAAAIgFQAIgEADgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg"
      );
    this.shape_14.setTransform(171.125, 16.325);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p("Ag0BPIAAidIBpAAIAAATIhUAAIAAAxIBJAAIAAARIhJAAIAABIg");
    this.shape_15.setTransform(158.775, 14.025);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p("AAbA5IAAhWIg0BWIgVAAIAAhxIATAAIAABWIA1hWIAVAAIAABxg");
    this.shape_16.setTransform(139.4, 16.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p("AAcA5IAAhWIg1BWIgVAAIAAhxIAUAAIAABWIA0hWIAVAAIAABxg");
    this.shape_17.setTransform(127.1, 16.2);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAvIA1AAIAAgvIATAAIAABxg");
    this.shape_18.setTransform(114.875, 16.2);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AglAsQgOgPAAgcQAAgcAOgQQAPgPAXAAQAXAAAOAPQAOAPAAAcIAAAFIhTAAQABASAJAKQAJAKAOAAQALABAHgGQAHgFAFgMIAUABQgFASgNAKQgMAJgUAAQgYAAgPgPgAgVgiQgJAJgBAPIA/AAQgBgPgGgGQgJgMgPAAQgMAAgKAJg"
      );
    this.shape_19.setTransform(102.6, 16.2);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p("AhIA5IAAhxIATAAIAABhIAtAAIAAhhIASAAIAABhIAsAAIAAhhIATAAIAABxg");
    this.shape_20.setTransform(87.7, 16.2);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AglAsQgPgPAAgcQAAgcAPgQQAPgPAXAAQAXAAAOAPQAOAPAAAcIAAAFIhTAAQABASAJAKQAKAKANAAQAKABAIgGQAIgFAEgMIAUABQgFASgNAKQgMAJgUAAQgYAAgPgPgAgUgiQgKAJAAAPIA/AAQgCgPgGgGQgJgMgPAAQgMAAgJAJg"
      );
    this.shape_21.setTransform(72.7, 16.2);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgwBQIAAicIARAAIAAAOQAGgIAIgFQAIgEAKAAQAPAAALAHQALAIAGAOQAGAOAAAQQgBARgFANQgHAOgMAIQgMAHgNAAQgJAAgIgEQgHgEgFgHIAAA4gAgVg1QgKAMAAAWQAAAVAJALQAJAKANAAQAMAAAIgKQAKgLAAgWQAAgWgJgLQgJgLgMAAQgMAAgJALg"
      );
    this.shape_22.setTransform(60.8, 18.25);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgrAZIASgEQADALAHAGQAIAGAJAAQAJAAAHgFQAGgGAAgJQAAgGgEgFQgEgFgEgCIgQgBIgFAAIAAgOIAQgBQAFAAAEgFQAEgEAAgGQAAgJgGgEQgFgFgIAAQgPAAgHAUIgSgEQAIgfAgAAQASgBALALQAKAKAAANQAAAOgNAIQAIAEAEAHQAFAHAAAKQAAAQgLAJQgMAJgUAAQgmAAgGgig"
      );
    this.shape_23.setTransform(49.225, 16.2);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgqAyQgKgJAAgOQAAgJAEgGQAEgIAHgDQAFgDAIgDIARgCQAXgEALgDIAAgGQAAgMgGgEQgHgHgOABQgNgBgGAFQgHAFgEAMIgSgCQADgMAFgIQAGgHALgFQALgDAOAAQAPAAAJADQAJADAEAFQAFAGACAIIAAASIAAAYQAAAbABAHQACAIAEAGIgVAAQgDgGAAgIQgMAJgJAEQgJADgMAAQgSABgLgKgAgEAHQgMACgFACQgFACgCAEQgDAFAAAEQAAAIAGAGQAGAEALAAQAKAAAJgEQAIgFAEgJQAEgHAAgMIAAgHQgKAEgVADg"
      );
    this.shape_24.setTransform(38.1, 16.2);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgxBQIAAicIASAAIAAAOQAHgIAHgFQAIgEAKAAQAPAAALAHQALAIAGAOQAFAOAAAQQABARgHANQgGAOgMAIQgMAHgNAAQgJAAgHgEQgIgEgFgHIAAA4gAgWg1QgJAMAAAWQAAAVAJALQAJAKAMAAQAMAAAKgKQAJgLAAgWQAAgWgJgLQgJgLgMAAQgMAAgKALg"
      );
    this.shape_25.setTransform(26.2, 18.25);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguA5IAAhxIAtAAQAPAAAIACQAIAEAGAHQAGAHAAAKQAAAJgEAFQgDAHgHADQAIACAGAHQAFAIAAAKQgBARgLAHQgKAIgUAAgAgaApIAZAAQAQAAAFgDQAHgFAAgJQAAgGgDgEQgEgFgGgBIgRgBIgXAAgAgagIIAUAAQALAAAFgCQAFgBADgDQAEgFAAgFQAAgJgGgEQgHgDgPAAIgUAAg"
      );
    this.shape_26.setTransform(8.15, 16.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.Symbol5,
    new cjs.Rectangle(0, 0, 227.3, 50.1),
    null
  );

  (lib.Symbol4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABYCCIAAkDIA3AAIAAEDgAiPCCIAAkDIA4AAIAABcIBDAAQAaAAAUAMQAUAMAJARQALATAAAXQAAAYgLASQgJATgUAMQgTALgbAAgAhXBSIA7AAQARgBAKgJQAKgJAAgRQAAgQgKgKQgKgJgRAAIg7AAg"
      );
    this.shape.setTransform(214.8, 101.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ah8CEIAAgxQANABAKgHQAKgHAGgRQAHgTAEghIAPiEIC4AAIAAEDIg4AAIAAjTIhOAAIgKBYQgFAogJAZQgKAZgNAOQgOANgRAGQgPAEgSAAIgEAAg"
      );
    this.shape_1.setTransform(182.875, 102.1273);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("ABICCIgQgsIhvAAIgQAsIg/AAIBkkDIBFAAIBkEDgAApAmIgphwIgnBwIBQAAg");
    this.shape_2.setTransform(156.025, 101.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AA9CCIAAitIh7CtIg1AAIAAkDIA3AAIAACnIB3inIA6AAIAAEDg");
    this.shape_3.setTransform(128.45, 101.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhoCCIAAkDIB5AAQAdABATALQATAKAKAUQALATAAAXQAAAWgLATQgKATgTALQgUAMgcAAIhBAAIAABcgAgwgKIA6AAQAQAAALgKQALgJAAgQQAAgRgLgJQgLgJgQAAIg6AAg"
      );
    this.shape_4.setTransform(102.975, 101.9);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AhbCCIAAkDIC3AAIAAAxIiAAAIAAA3IB9AAIAAAvIh9AAIAAA8ICAAAIAAAwg");
    this.shape_5.setTransform(79.025, 101.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3B2QgfgRgSgeQgSgfgBgoQABgnASgeQASgfAfgQQAggRAmAAQAcAAAVAJQAWAJAOAOQAOAOAKASIgwAWQgJgPgPgLQgRgLgUAAQgXAAgTALQgRALgLATQgKAUAAAXQAAAZAKATQALATARALQATALAXAAQAUAAARgLQAPgKAJgQIAwAXQgKAQgPAOQgOAPgVAJQgVAJgcABQgmAAgggRg"
      );
    this.shape_6.setTransform(54.15, 101.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("AA9CCIAAitIh7CtIg1AAIAAkDIA3AAIAACnIB3inIA5AAIAAEDg");
    this.shape_7.setTransform(16.2, 101.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABXCCIAAkDIA4AAIAAEDgAiPCCIAAkDIA4AAIAABcIBCAAQAbAAAUAMQATALALASQAKATAAAXQAAAXgKATQgLATgTALQgTAMgcAAgAhXBRIA7AAQAQAAALgJQAKgJAAgRQAAgQgKgKQgLgJgQAAIg7AAg"
      );
    this.shape_8.setTransform(166.85, 63.4);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p("ABWCCIAAi1IhKC1IgXAAIhJi1IAAC1Ig4AAIAAkDIBOAAIA+CcIA/icIBOAAIAAEDg");
    this.shape_9.setTransform(133.25, 63.4);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhoCCIAAkDIA4AAIAABcIBBAAQAcAAAUAMQATALAKASQALATAAAXQAAAXgLATQgKATgTALQgTAMgdAAgAgwBRIA6AAQAQAAALgJQALgJAAgRQAAgQgLgKQgLgJgQAAIg6AAg"
      );
    this.shape_10.setTransform(105.325, 63.4);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ah8CEIAAgxQANABAKgHQAKgHAGgRQAHgTAEghIAPiEIC4AAIAAEDIg4AAIAAjTIhOAAIgKBYQgFAogJAZQgKAZgNAOQgOANgRAGQgPAEgSAAIgEAAg"
      );
    this.shape_11.setTransform(77.275, 63.6273);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p("AA9CCIAAitIh7CtIg2AAIAAkDIA4AAIAACnIB4inIA5AAIAAEDg");
    this.shape_12.setTransform(49.55, 63.4);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgaCCIAAgaQg8gFghgbQghgbAAgtQAAgsAhgbQAhgaA8gGIAAgaIA2AAIAAAaQA7AGAhAaQAhAbAAAsQAAAtghAbQghAbg7AFIAAAagAAcA2QAhgDASgPQARgNAAgXQAAgVgRgOQgSgOghgEgAhNgjQgSAOAAAVQAAAXASANQAQAOAjAEIAAhrQgjAEgQAOg"
      );
    this.shape_13.setTransform(18.65, 63.4);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p("AhbCCIAAkDIC3AAIAAAwIiAAAIAAA3IB9AAIAAAxIh9AAIAAA6ICAAAIAAAxg");
    this.shape_14.setTransform(201.925, 24.9);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p("AgbCCIAAjTIhMAAIAAgwIDPAAIAAAwIhMAAIAADTg");
    this.shape_15.setTransform(178.775, 24.9);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p("AA9CCIAAitIh7CtIg1AAIAAkDIA3AAIAACnIB3inIA6AAIAAEDg");
    this.shape_16.setTransform(153.2, 24.9);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhoCCIAAkDIB5AAQAdAAATAMQATAKAKAUQALASAAAYQAAAWgLAUQgKARgTAMQgUALgcAAIhBAAIAABdgAgwgKIA6AAQAQAAALgJQALgKAAgQQAAgRgLgJQgLgJgQgBIg6AAg"
      );
    this.shape_17.setTransform(127.725, 24.9);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p("AgbCCIAAjTIhMAAIAAgwIDPAAIAAAwIhMAAIAADTg");
    this.shape_18.setTransform(103.325, 24.9);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhFB1QgfgRgRgeQgSgeAAgoQAAgmASgfQARgeAfgRQAegRAngBQAnABAfARQAfARARAeQARAfABAmQgBAogRAeQgRAegfARQgfARgnAAQgnAAgegRgAgphJQgSALgJATQgKAUAAAXQAAAYAKAUQAJATASALQASALAXABQAYgBASgLQARgLAKgTQAKgUAAgYQAAgXgKgUQgKgTgRgLQgSgLgYAAQgXAAgSALg"
      );
    this.shape_19.setTransform(77.075, 24.9);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p("ABVCCIAAi1IhJC1IgXAAIhKi1IAAC1Ig3AAIAAkDIBOAAIA+CcIA/icIBOAAIAAEDg");
    this.shape_20.setTransform(45.45, 24.9);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3B1QgfgRgSgdQgTgeAAgpQAAgnATgeQASgeAfgRQAggRAmgBQAdABAUAJQAVAJAPAPQAPAOAJAQIgwAYQgJgQgPgLQgRgLgUAAQgXAAgSALQgSALgLATQgLATABAYQgBAZALATQALATASALQASALAXABQAUgBARgLQAPgKAJgRIAwAYQgKAQgPAOQgOAPgVAJQgUAJgdAAQgmAAgggRg"
      );
    this.shape_21.setTransform(15.7, 24.9);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.Symbol4,
    new cjs.Rectangle(0, 0, 233.9, 128.5),
    null
  );

  (lib.Symbol1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("A/eNeIgFpdIG6lYIdDr2QA0gYA6AMIRHDAQBGANgCAlIHMg5IAFX+g");
    mask.setTransform(185.525, 107.8445);

    // Layer_1
    this.instance = new lib.phone();
    this.instance.parent = this;

    var maskedShapeInstanceList = [this.instance];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#F5C635").s().p("A/ebRMgAEg2hMA/EAAAMAABA2hg");
    this.shape.setTransform(185.575, 321.575);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol1,
    new cjs.Rectangle(-16.3, 21.7, 403.8, 474.40000000000003),
    null
  );

  (lib.Symbol16 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol15();
    this.instance.parent = this;
    this.instance.setTransform(150, 300, 1, 1, 0, 0, 0, 150, 300);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol16,
    new cjs.Rectangle(0, 0, 300, 600),
    null
  );

  (lib.Symbol3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol17();
    this.instance.parent = this;
    this.instance.setTransform(47, 84.5, 1, 1, 0, 0, 0, 47, 84.5);
    this.instance.alpha = 0.8008;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol3,
    new cjs.Rectangle(0, 0, 94, 169),
    null
  );

  (lib.Symbol2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol3();
    this.instance.parent = this;
    this.instance.setTransform(47, 84.5, 1, 1, 0, 0, 0, 47, 84.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ x: 57 }, 11, cjs.Ease.quadInOut)
        .to({ x: 47 }, 11, cjs.Ease.quadInOut)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 104, 169);

  (lib.copy2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol2();
    this.instance.parent = this;
    this.instance.setTransform(47, 4.75, 0.7598, 0.7598, 0, 0, 0, 47, 84.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance).to({ y: -826 }, 59).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(11.3, -890.2, 71.4, 959.2);

  (lib.Symbol = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol2();
    this.instance.parent = this;
    this.instance.setTransform(47, 84.5, 1, 1, 0, 0, 0, 47, 84.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance).to({ y: -745.7 }, 119).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -830.2, 94, 999.2);

  (lib.Symbol6copy2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_119 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1)
    );

    // Layer_6
    this.instance = new lib.copy2();
    this.instance.parent = this;
    this.instance.setTransform(77, 200.6, 1, 1, 0, 0, 0, 47, 84.5);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(103).to({ _off: false }, 0).wait(17)
    );

    // Layer_5
    this.instance_1 = new lib.Symbol();
    this.instance_1.parent = this;
    this.instance_1.setTransform(305, 141.15, 1, 1, 0, 0, 0, 47, 84.5);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).wait(60).to({ _off: false }, 0).wait(60)
    );

    // Layer_2
    this.instance_2 = new lib.Symbol();
    this.instance_2.parent = this;
    this.instance_2.setTransform(279, 84.5, 1, 1, 0, 0, 0, 47, 84.5);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2).wait(42).to({ _off: false }, 0).wait(78)
    );

    // Layer_8
    this.instance_3 = new lib.Symbol();
    this.instance_3.parent = this;
    this.instance_3.setTransform(117, 100.55, 1, 1, 0, 0, 0, 47, 84.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(41.3, 0, 310.7, 225.7);

  (lib.Symbol6copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_119 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1)
    );

    // Layer_6
    this.instance = new lib.copy2();
    this.instance.parent = this;
    this.instance.setTransform(309.05, 206.55, 1, 1, 0, 0, 0, 47, 84.5);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(97).to({ _off: false }, 0).wait(23)
    );

    // Layer_5
    this.instance_1 = new lib.Symbol();
    this.instance_1.parent = this;
    this.instance_1.setTransform(161, 135, 1, 1, 0, 0, 0, 47, 84.5);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).wait(82).to({ _off: false }, 0).wait(38)
    );

    // Layer_2
    this.instance_2 = new lib.Symbol();
    this.instance_2.parent = this;
    this.instance_2.setTransform(263.05, 84.5, 1, 1, 0, 0, 0, 47, 84.5);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2).wait(17).to({ _off: false }, 0).wait(103)
    );

    // Layer_8
    this.instance_3 = new lib.Symbol();
    this.instance_3.parent = this;
    this.instance_3.setTransform(87, 100.55, 1, 1, 0, 0, 0, 47, 84.5);
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3).wait(53).to({ _off: false }, 0).wait(67)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 344.8, 219.5);

  // stage content:
  (lib.index = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_17
    this.instance = new lib.Symbol16();
    this.instance.parent = this;
    this.instance.setTransform(150, 300, 1, 1, 0, 0, 0, 150, 300);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(199)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 15, cjs.Ease.get(1))
        .wait(1)
    );

    // Layer_4
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
    this.shape.setTransform(150, 300);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(215));

    // Layer_18
    this.instance_1 = new lib.Symbol6copy2();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-10, 706.5, 1, 1, 0, 0, 0, 47, 84.5);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(103)
        .to({ _off: false }, 0)
        .to({ _off: true }, 111)
        .wait(1)
    );

    // Layer_9
    this.instance_2 = new lib.Symbol10();
    this.instance_2.parent = this;
    this.instance_2.setTransform(
      150.05,
      548.1,
      0.75,
      0.75,
      0,
      0,
      0,
      96.4,
      15.6
    );
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(54)
        .to({ _off: false }, 0)
        .to(
          {
            regX: 96.3,
            regY: 15.4,
            scaleX: 1,
            scaleY: 1,
            x: 150,
            y: 548.05,
            alpha: 1,
          },
          10,
          cjs.Ease.get(1)
        )
        .wait(10)
        .to({ scaleX: 1.1, scaleY: 1.1, y: 548.1 }, 7, cjs.Ease.quadInOut)
        .to({ scaleX: 1, scaleY: 1, y: 548.05 }, 7, cjs.Ease.quadInOut)
        .wait(66)
        .to({ scaleX: 1.1, scaleY: 1.1, y: 548.1 }, 7, cjs.Ease.quadInOut)
        .to({ scaleX: 1, scaleY: 1, y: 548.05 }, 7, cjs.Ease.quadInOut)
        .wait(47)
    );

    // Layer_13
    this.instance_3 = new lib.Symbol11();
    this.instance_3.parent = this;
    this.instance_3.setTransform(150, 547.5, 0.1, 0.1, 0, 0, 0, 111.5, 22);
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(47)
        .to({ _off: false }, 0)
        .to(
          {
            regX: 111,
            regY: 21.6,
            scaleX: 1.2,
            scaleY: 1.2,
            x: 149.95,
            y: 547.55,
          },
          12,
          cjs.Ease.get(1)
        )
        .to({ regY: 21.5, scaleX: 1, scaleY: 1, x: 150, y: 547.5 }, 5)
        .wait(10)
        .to(
          { regY: 21.6, scaleX: 1.1, scaleY: 1.1, x: 149.95, y: 547.55 },
          7,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 21.5, scaleX: 1, scaleY: 1, x: 150, y: 547.5 },
          7,
          cjs.Ease.quadInOut
        )
        .wait(66)
        .to(
          { regY: 21.6, scaleX: 1.1, scaleY: 1.1, x: 149.95, y: 547.55 },
          7,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 21.5, scaleX: 1, scaleY: 1, x: 150, y: 547.5 },
          7,
          cjs.Ease.quadInOut
        )
        .wait(47)
    );

    // Layer_14
    this.instance_4 = new lib.Symbol12();
    this.instance_4.parent = this;
    this.instance_4.setTransform(181.6, 342.7, 1, 1, 0, 0, 0, 97, 23.9);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(120)
        .to({ _off: false }, 0)
        .to({ x: 121.6, alpha: 1 }, 10, cjs.Ease.get(1))
        .to({ x: 131.6 }, 5)
        .wait(80)
    );

    // Symbol_13
    this.instance_5 = new lib.Symbol13();
    this.instance_5.parent = this;
    this.instance_5.setTransform(200, 409.5, 1, 1, 0, 0, 0, 115.4, 58.8);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(124)
        .to({ _off: false }, 0)
        .to({ x: 140, alpha: 1 }, 10, cjs.Ease.get(1))
        .to({ x: 150 }, 5)
        .wait(76)
    );

    // Symbol_14
    this.instance_6 = new lib.Symbol14();
    this.instance_6.parent = this;
    this.instance_6.setTransform(193.5, 478.6, 1, 1, 0, 0, 0, 108.9, 23.9);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(128)
        .to({ _off: false }, 0)
        .to({ x: 133.5, alpha: 1 }, 10, cjs.Ease.get(1))
        .to({ x: 143.5 }, 5)
        .wait(72)
    );

    // obj_png
    this.instance_7 = new lib.Symbol7();
    this.instance_7.parent = this;
    this.instance_7.setTransform(
      150.5,
      418.5,
      0.1914,
      0.1914,
      0,
      0,
      0,
      90.4,
      185.5
    );
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(38)
        .to({ _off: false }, 0)
        .to(
          { regX: 90.5, scaleX: 1.1213, scaleY: 1.1213, x: 150.55, y: 418.55 },
          9,
          cjs.Ease.get(1)
        )
        .to({ scaleX: 1, scaleY: 1, x: 150.5, y: 418.5 }, 5)
        .wait(51)
        .to({ y: 218.5 }, 16, cjs.Ease.quadInOut)
        .wait(96)
    );

    // Layer_10
    this.instance_8 = new lib.Symbol8();
    this.instance_8.parent = this;
    this.instance_8.setTransform(
      150.55,
      418.55,
      0.2458,
      0.2458,
      0,
      0,
      0,
      89.5,
      9.6
    );
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(38)
        .to({ _off: false }, 0)
        .to(
          { regY: 9.5, scaleX: 1.1341, scaleY: 1.1341, x: 150.5, y: 418.5 },
          9,
          cjs.Ease.get(1)
        )
        .to({ scaleX: 1, scaleY: 1 }, 5)
        .wait(51)
        .to({ y: 218.5 }, 16, cjs.Ease.quadInOut)
        .wait(96)
    );

    // Layer_7
    this.instance_9 = new lib.Symbol4();
    this.instance_9.parent = this;
    this.instance_9.setTransform(220.05, 106.6, 1, 1, 0, 0, 0, 117, 64.2);
    this.instance_9.alpha = 0;
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(18)
        .to({ _off: false }, 0)
        .to({ x: 140.05, alpha: 1 }, 10, cjs.Ease.get(1))
        .to({ x: 150.05 }, 5)
        .wait(70)
        .to({ y: 63.6, alpha: 0 }, 16, cjs.Ease.quadInOut)
        .to({ _off: true }, 1)
        .wait(95)
    );

    // Symbol_5
    this.instance_10 = new lib.Symbol5();
    this.instance_10.parent = this;
    this.instance_10.setTransform(217.25, 192.7, 1, 1, 0, 0, 0, 114.2, 27.3);
    this.instance_10.alpha = 0;
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(23)
        .to({ _off: false }, 0)
        .to({ x: 137.25, alpha: 1 }, 10, cjs.Ease.get(1))
        .to({ x: 147.25 }, 5)
        .wait(65)
        .to({ y: 149.7, alpha: 0 }, 16, cjs.Ease.quadInOut)
        .to({ _off: true }, 1)
        .wait(95)
    );

    // Layer_5
    this.instance_11 = new lib.Symbol1();
    this.instance_11.parent = this;
    this.instance_11.setTransform(155, 809.5, 1, 1, 0, 0, 0, 188, 89.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .to({ y: 419.5 }, 11, cjs.Ease.get(1))
        .to({ y: 429.5 }, 7)
        .wait(85)
        .to({ y: 229.5 }, 16, cjs.Ease.quadInOut)
        .wait(96)
    );

    // Layer_19
    this.instance_12 = new lib.Symbol6copy();
    this.instance_12.parent = this;
    this.instance_12.setTransform(-10, 706.5, 1, 1, 0, 0, 0, 47, 84.5);
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(103)
        .to({ _off: false }, 0)
        .to({ _off: true }, 111)
        .wait(1)
    );

    // Layer_12 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_11 = new cjs.Graphics().p(
      "EgY/AnxMAAAhPhMAx/AAAMAAABPhg"
    );

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(11)
        .to({ graphics: mask_graphics_11, x: 150, y: 183.525 })
        .wait(204)
    );

    // Layer_3
    this.instance_13 = new lib.Symbol9();
    this.instance_13.parent = this;
    this.instance_13.setTransform(150, 589, 1, 1, 0, 0, 0, 150, 247);
    this.instance_13._off = true;

    var maskedShapeInstanceList = [this.instance_13];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(11)
        .to({ _off: false }, 0)
        .to({ y: 137 }, 17, cjs.Ease.get(1))
        .wait(75)
        .to({ y: -63 }, 16, cjs.Ease.quadInOut)
        .wait(96)
    );

    // Layer_2
    this.instance_14 = new lib.Symbol15();
    this.instance_14.parent = this;
    this.instance_14.setTransform(150, 300, 1, 1, 0, 0, 0, 150, 300);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
    this.shape_1.setTransform(150, 300);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.instance_14 }] })
        .wait(215)
    );

    // Layer_1
    this.instance_15 = new lib._300x600_kino();
    this.instance_15.parent = this;
    this.instance_15.setTransform(-320, 0);

    this.instance_16 = new lib._300x600_kino2();
    this.instance_16.parent = this;
    this.instance_16.setTransform(320, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_16 }, { t: this.instance_15 }] })
        .wait(215)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-170, 229.1, 790, 986.9999999999999);
  // library properties:
  lib.properties = {
    id: "CCFCF0BFBB3B61409A6EB03B9EFA4D30",
    width: 300,
    height: 600,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "/files/1/index_atlas_P_.png", id: "index_atlas_P_" },
      { src: "/files/1/index_atlas_NP_.jpg", id: "index_atlas_NP_" },
    ],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["CCFCF0BFBB3B61409A6EB03B9EFA4D30"] = {
    getStage: function () {
      return exportRoot.getStage();
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
