(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "index_atlas_P_",
      frames: [
        [297, 0, 80, 76],
        [0, 0, 295, 486],
      ],
    },
    {
      name: "index_atlas_NP_",
      frames: [
        [0, 0, 300, 600],
        [302, 0, 300, 600],
      ],
    },
  ];

  // symbols:

  (lib.bg1 = function () {
    this.initialize(ss["index_atlas_NP_"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.bg2 = function () {
    this.initialize(ss["index_atlas_NP_"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.hand = function () {
    this.initialize(ss["index_atlas_P_"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.mask = function () {
    this.initialize(ss["index_atlas_P_"]);
    this.gotoAndStop(1);
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

  (lib.Symbol12888 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        [
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0.498)",
          "rgba(255,255,255,0)",
        ],
        [0, 0.816, 0.992],
        -80,
        0,
        80.1,
        0
      )
      .s()
      .p("AsfQaMAAAggzIY/AAMAAAAgzg");
    this.shape.setTransform(-0.025, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol12888,
    new cjs.Rectangle(-80, -105, 160, 210.1),
    null
  );

  (lib.Symbol15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.hand();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol15,
    new cjs.Rectangle(0, 0, 80, 76),
    null
  );

  (lib.Symbol14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("Ag8BpIAAjRIB3AAIAAAPIhmAAIAABSIBfAAIAAANIhfAAIAABUIBoAAIAAAPg");
    this.shape.setTransform(89.85, 26.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AA9BpIAAi0Ih7C0IgOAAIAAjRIAQAAIAAC0IB7i0IAOAAIAADRg");
    this.shape_1.setTransform(70.9, 26.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguBeQgZgPgOgYQgOgZAAgeQAAgdAOgZQAOgYAZgPQAYgOAfgBQAeABAXANQAYAOANAXIgOAIQgLgTgUgMQgTgMgaAAQgbAAgUANQgWAMgLAVQgMAVAAAZQAAAaAMAVQALAVAWAMQAUAMAbABQAZgBAVgLQAUgMALgUIAOAIQgJAPgNAMQgOAMgSAGQgRAGgUABQgfgBgYgOg"
      );
    this.shape_2.setTransform(49.45, 26.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("Ag7BpIAAjRIB2AAIAAAPIhmAAIAABSIBeAAIAAANIheAAIAABUIBnAAIAAAPg");
    this.shape_3.setTransform(30.7, 26.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhJBpIAAjRIBTAAQAPAAANAIQAMAHAHANQAIAMAAAPQAAAQgIAMQgHALgMAHQAQAFAKAOQAKANAAATQAAAQgIAMQgHANgNAIQgOAIgPAAgAg5BaIBKAAQALAAAKgGQAJgGAGgJQAFgJAAgMQAAgMgFgKQgGgJgJgGQgKgFgLgBIhKAAgAg5gJIBDAAQAKABAJgGQAJgFAGgKQAFgIAAgMQAAgLgFgJQgGgJgJgGQgJgFgKAAIhDAAg"
      );
    this.shape_4.setTransform(13.35, 26.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag2BeQgYgPgPgYQgOgZAAgeQAAgdAOgZQAPgYAYgPQAZgOAdgBQAfABAYAOQAZAPAOAYQAOAZAAAdQAAAegOAZQgOAYgZAPQgYAOgfABQgdgBgZgOgAguhPQgVAMgMAVQgMAVAAAZQAAAaAMAVQAMAVAVAMQAVAMAZABQAagBAVgMQAVgMAMgVQAMgVAAgaQAAgZgMgVQgMgVgVgMQgVgNgaAAQgZAAgVANg"
      );
    this.shape_5.setTransform(-8.925, 26.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p("AA9BpIAAhlIh5AAIAABlIgQAAIAAjRIAQAAIAABeIB5AAIAAheIAQAAIAADRg");
    this.shape_6.setTransform(-31.45, 26.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhJBpIAAjRIBTAAQAPAAAMAIQANAHAHANQAIAMAAAPQAAAQgIAMQgGALgNAHQAQAFAKAOQAJANABATQAAAQgIAMQgIANgMAIQgNAIgQAAgAg5BaIBKAAQALAAAJgGQAKgGAGgJQAFgJAAgMQAAgMgFgKQgGgJgKgGQgJgFgLgBIhKAAgAg5gJIBDAAQALABAIgGQAJgFAGgKQAFgIAAgMQAAgLgFgJQgGgJgJgGQgIgFgLAAIhDAAg"
      );
    this.shape_7.setTransform(-50.45, 26.1);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("ABJBpIgUg2IhpAAIgUA2IgRAAIBSjRIAQAAIBRDRgAAvAlIgvh6IgtB6IBcAAg");
    this.shape_8.setTransform(-69.875, 26.1);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhEBpIAAjRIBHAAQATAAAPAJQAPAIAIAOQAIAPAAATQAAASgIAPQgIAOgPAIQgPAIgTABIg3AAIAABQgAg0AKIA3AAQAOAAALgGQAMgGAGgLQAHgLAAgPQAAgPgHgLQgGgLgMgHQgLgGgOAAIg3AAg"
      );
    this.shape_9.setTransform(-87.45, 26.1);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p("AA9BpIAAi0Ih7C0IgOAAIAAjRIAQAAIAAC0IB7i0IAOAAIAADRg");
    this.shape_10.setTransform(38.25, -4.5);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p("AgHBpIAAjCIhCAAIAAgPICTAAIAAAPIhCAAIAADCg");
    this.shape_11.setTransform(19.85, -4.5);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AA9B9IAAi0Ih7C0IgOAAIAAjRIAQAAIAACzIB7izIAOAAIAADRgAgmhuIAAgOIBMAAIAAAOg"
      );
    this.shape_12.setTransform(1.45, -6.475);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p("ABJBpIgUg2IhpAAIgUA2IgRAAIBSjRIAQAAIBRDRgAAvAlIgvh6IgtB6IBcAAg");
    this.shape_13.setTransform(-18.275, -4.5);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p("AA9BpIAAhlIh5AAIAABlIgQAAIAAjRIAQAAIAABeIB5AAIAAheIAQAAIAADRg");
    this.shape_14.setTransform(-38, -4.5);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p("ABPBpIAAi6IhNCBIgDAAIhNiBIAAC6IgQAAIAAjRIAUAAIBKB7IBLh7IAUAAIAADRg");
    this.shape_15.setTransform(67.4, -35.1);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p("Ag7BpIAAjRIB2AAIAAAPIhnAAIAABSIBfAAIAAANIhfAAIAABUIBoAAIAAAPg");
    this.shape_16.setTransform(47.95, -35.1);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABlBpIhdhoIAABoIgPAAIAAhoIhcBoIgUAAIBghrIhchmIATAAIBZBiIAAhiIAPAAIAABiIBahiIATAAIhdBmIBgBrg"
      );
    this.shape_17.setTransform(26.75, -35.1);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag2BeQgYgPgPgYQgOgZAAgeQAAgdAOgZQAPgYAYgPQAZgOAdgBQAfABAYAOQAZAPAOAYQAOAZAAAdQAAAegOAZQgOAYgZAPQgYAOgfABQgdgBgZgOgAguhPQgVAMgMAVQgMAVAAAZQAAAaAMAVQAMAVAVAMQAVAMAZABQAagBAVgMQAVgMAMgVQAMgVAAgaQAAgZgMgVQgMgVgVgMQgVgNgaAAQgZAAgVANg"
      );
    this.shape_18.setTransform(1.925, -35.1);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p("ABPBpIAAi6IhNCBIgDAAIhNiBIAAC6IgQAAIAAjRIAUAAIBKB7IBLh7IAUAAIAADRg");
    this.shape_19.setTransform(-22.4, -35.1);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag2BeQgYgPgPgYQgOgZAAgeQAAgdAOgZQAPgYAYgPQAZgOAdgBQAfABAYAOQAZAPAOAYQAOAZAAAdQAAAegOAZQgOAYgZAPQgYAOgfABQgdgBgZgOgAguhPQgVAMgMAVQgMAVAAAZQAAAaAMAVQAMAVAVAMQAVAMAZABQAagBAVgMQAVgMAMgVQAMgVAAgaQAAgZgMgVQgMgVgVgMQgVgNgaAAQgZAAgVANg"
      );
    this.shape_20.setTransform(-46.775, -35.1);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p("AA7BpIAAjCIh1AAIAADCIgQAAIAAjRICVAAIAADRg");
    this.shape_21.setTransform(-69.1, -35.1);

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
    lib.Symbol14,
    new cjs.Rectangle(-99, -54, 198.3, 99.8),
    null
  );

  (lib.Symbol13 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#0B1127")
      .s()
      .p("AgXAqIAAhTIAuAAIAAAGIgoAAIAAAhIAlAAIAAAEIglAAIAAAiIApAAIAAAGg");
    this.shape.setTransform(32.625, 0.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#0B1127")
      .s()
      .p("AgXAqIAAhTIAuAAIAAAGIgoAAIAAAhIAlAAIAAAEIglAAIAAAiIApAAIAAAGg");
    this.shape_1.setTransform(26.225, 0.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#0B1127")
      .s()
      .p("AAYAqIAAgoIgvAAIAAAoIgHAAIAAhTIAHAAIAAAmIAvAAIAAgmIAHAAIAABTg");
    this.shape_2.setTransform(18.625, 0.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#0B1127")
      .s()
      .p(
        "AgaAqIAAhTIAvAAIAAAGIgpAAIAAAcIAXAAQAGAAAHAEQAFADADAFQADAFAAAHQAAAHgDAFQgDAHgFACQgHAEgGAAgAgUAkIAXAAQAFAAAEgCQAEgDACgFQADgDAAgGQAAgFgDgEQgCgEgEgDQgEgBgFgBIgXAAg"
      );
    this.shape_3.setTransform(11.3, 0.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#0B1127")
      .s()
      .p(
        "AgVAlQgKgFgGgKQgFgKAAgMQAAgLAFgKQAGgJAKgHQAJgFAMgBQAMABAKAFQAJAHAHAJQAFAKAAALQAAAMgFAKQgHAKgJAFQgKAGgMAAQgMAAgJgGgAgSgfQgIAFgFAIQgFAIAAAKQAAAKAFAJQAFAIAIAFQAIAFAKAAQAKAAAJgFQAIgFAFgIQAFgJAAgKQAAgKgFgIQgFgIgIgFQgJgFgKAAQgKAAgIAFg"
      );
    this.shape_4.setTransform(2.6, 0.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#0B1127")
      .s()
      .p(
        "AgaAqIAAhTIAbAAQAIAAAGAEQAGADADAGQADAFAAAIQAAAHgDAHQgDAEgGAEQgGADgIAAIgVAAIAAAggAgUAEIAVAAQAGAAAFgDQAEgBADgEQACgFAAgGQAAgGgCgFQgDgEgEgDQgFgCgGAAIgVAAg"
      );
    this.shape_5.setTransform(-5.575, 0.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#0B1127")
      .s()
      .p(
        "AAgAyIAAgQIg/AAIAAAQIgGAAIAAgWIAHAAQADgEADgHQACgHAAgLIAAgwIAzAAIAABNIAJAAIAAAWgAgPgBQAAAKgCAIQgDAHgDAEIAuAAIAAhHIgmAAg"
      );
    this.shape_6.setTransform(-13.65, 1.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#0B1127")
      .s()
      .p(
        "AgVAlQgKgFgFgKQgHgKAAgMQAAgLAHgKQAFgJAKgHQAKgFALgBQAMABAKAFQAKAHAFAJQAGAKABALQgBAMgGAKQgFAKgKAFQgKAGgMAAQgLAAgKgGgAgSgfQgIAFgFAIQgFAIAAAKQAAAKAFAJQAFAIAIAFQAJAFAJAAQAKAAAJgFQAIgFAFgIQAFgJAAgKQAAgKgFgIQgFgIgIgFQgJgFgKAAQgJAAgJAFg"
      );
    this.shape_7.setTransform(-22.55, 0.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#0B1127")
      .s()
      .p("AAXAqIAAhNIgtAAIAABNIgHAAIAAhTIA7AAIAABTg");
    this.shape_8.setTransform(-31.5, 0.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#E2B48C")
      .s()
      .p("ApcCgQhQAAAAhQIAAifQAAhQBQAAIS5AAQBQAAAABQIAACfQAABQhQAAg");

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    new cjs.Rectangle(-68.5, -16, 137, 32),
    null
  );

  (lib.Symbol12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E2B48C")
      .s()
      .p("AAnBCIAAhxIhOBxIgJAAIAAiEIAKAAIAAByIBOhyIAJAAIAACEg");
    this.shape.setTransform(38.925, 6.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#E2B48C")
      .s()
      .p(
        "ABHBPIAAgZIiXAAIAAiEIAKAAIAAB6IA7AAIAAh6IAKAAIAAB6IA6AAIAAh6IALAAIAAB6IANAAIAAAjg"
      );
    this.shape_1.setTransform(23.575, 7.875);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#E2B48C")
      .s()
      .p(
        "AgiA7QgPgJgKgPQgJgQAAgTQAAgSAJgQQAKgPAPgJQAPgKATAAQAUAAAPAKQAQAJAIAPQAJAQAAASQAAATgJAQQgIAPgQAJQgPAJgUAAQgTAAgPgJgAgdgyQgNAIgIANQgHANgBAQQABARAHANQAIANANAIQANAIAQAAQAQAAAOgIQANgIAHgNQAJgNgBgRQABgQgJgNQgHgNgNgIQgOgIgQAAQgQAAgNAIg"
      );
    this.shape_2.setTransform(6.05, 6.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E2B48C")
      .s()
      .p("AAyBCIAAh1IgxBRIgBAAIgxhRIAAB1IgKAAIAAiEIAMAAIAvBOIAvhOIANAAIAACEg");
    this.shape_3.setTransform(-9.375, 6.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#E2B48C")
      .s()
      .p(
        "AgiA7QgPgJgKgPQgIgQgBgTQABgSAIgQQAKgPAPgJQAQgKASAAQAUAAAPAKQAPAJAKAPQAIAQABASQgBATgIAQQgKAPgPAJQgPAJgUAAQgSAAgQgJgAgcgyQgOAIgIANQgHANgBAQQABARAHANQAIANAOAIQANAIAPAAQARAAANgIQANgIAIgNQAHgNAAgRQAAgQgHgNQgIgNgNgIQgNgIgRAAQgPAAgNAIg"
      );
    this.shape_4.setTransform(-24.8, 6.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#E2B48C")
      .s()
      .p("AAmBCIAAh6IhKAAIAAB6IgLAAIAAiEIBeAAIAACEg");
    this.shape_5.setTransform(-38.95, 6.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#E2B48C")
      .s()
      .p(
        "AAnBPIAAhyIhOByIgJAAIAAiEIAKAAIAAByIBOhyIAJAAIAACEgAgXhGIAAgIIAvAAIAAAIg"
      );
    this.shape_6.setTransform(121.475, -12.55);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#E2B48C")
      .s()
      .p(
        "AgiA8QgPgKgJgPQgKgQAAgTQAAgSAKgQQAJgPAPgJQAQgKASAAQAUAAAPAKQAQAJAIAPQAKAQgBASQABATgKAQQgIAPgQAKQgPAIgUABQgSgBgQgIgAgdgyQgNAIgHANQgJANAAAQQAAARAJANQAHANANAIQANAIAQAAQAQAAAOgIQANgIAHgNQAJgNgBgRQABgQgJgNQgHgNgNgIQgOgIgQAAQgQAAgNAIg"
      );
    this.shape_7.setTransform(107.2, -11.3);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E2B48C")
      .s()
      .p("AAgBCIhChBIAABBIgKAAIAAiDIAKAAIAAA9IBAg9IANAAIhCBAIBEBDg");
    this.shape_8.setTransform(94.825, -11.3);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#E2B48C")
      .s()
      .p(
        "AgdA8QgQgKgIgPQgJgQAAgTQAAgSAJgQQAIgPAQgJQAPgKAUAAQASAAAPAJQAPAIAJAQIgJAEQgHgMgNgIQgMgGgQgBQgRAAgNAIQgNAIgIANQgHANAAAQQAAARAHANQAIANANAIQANAIARAAQAQAAANgIQANgHAGgNIAJAFQgFAKgJAHQgJAIgLADQgLAEgMABQgUgBgPgIg"
      );
    this.shape_9.setTransform(81.625, -11.3);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#E2B48C")
      .s()
      .p("AglBCIAAiDIBKAAIAAAJIhAAAIAAAzIA8AAIAAAJIg8AAIAAA1IBBAAIAAAJg");
    this.shape_10.setTransform(69.775, -11.3);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#E2B48C")
      .s()
      .p(
        "AAiBCIAAg5QgJAFgJACQgJACgJAAQgNAAgKgGQgJgEgEgIQgGgIAAgKIAAgvIAKAAIAAAvQABAMAHAGQAJAIAPAAQAJAAAJgCQAJgCAJgEIAAhBIAKAAIAACDg"
      );
    this.shape_11.setTransform(58.2, -11.3);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#E2B48C")
      .s()
      .p("AAnBCIAAhxIhOBxIgJAAIAAiDIAKAAIAABxIBOhxIAJAAIAACDg");
    this.shape_12.setTransform(45.875, -11.3);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#E2B48C")
      .s()
      .p("AgjBCIAAiDIBIAAIAAAJIg+AAIAAB6g");
    this.shape_13.setTransform(35.3, -11.3);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#E2B48C")
      .s()
      .p(
        "AgiA8QgPgKgKgPQgJgQAAgTQAAgSAJgQQAKgPAPgJQAPgKATAAQAUAAAPAKQAQAJAIAPQAJAQAAASQAAATgJAQQgIAPgQAKQgPAIgUABQgTgBgPgIgAgdgyQgNAIgIANQgHANgBAQQABARAHANQAIANANAIQANAIAQAAQAQAAAOgIQANgIAHgNQAJgNgBgRQABgQgJgNQgHgNgNgIQgOgIgQAAQgQAAgNAIg"
      );
    this.shape_14.setTransform(22.25, -11.3);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#E2B48C")
      .s()
      .p(
        "Ag3BCIAAgJQAIACAHgEQAGgEAEgLQADgLAAgTIAAhMIBTAAIAACEIgKAAIAAh6Ig/AAIAABCQAAAWgEANQgFAMgIAFQgIAFgJAAIgEgBg"
      );
    this.shape_15.setTransform(7.225, -11.2917);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#E2B48C")
      .s()
      .p(
        "AgiA8QgPgKgJgPQgJgQAAgTQAAgSAJgQQAJgPAPgJQAPgKATAAQAUAAAPAKQAPAJAKAPQAJAQAAASQAAATgJAQQgKAPgPAKQgPAIgUABQgTgBgPgIgAgdgyQgNAIgHANQgJANABAQQgBARAJANQAHANANAIQAOAIAPAAQAQAAAOgIQANgIAIgNQAHgNABgRQgBgQgHgNQgIgNgNgIQgOgIgQAAQgPAAgOAIg"
      );
    this.shape_16.setTransform(-6.5, -11.3);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#E2B48C")
      .s()
      .p("AAnBCIgng7IgmA7IgLAAIAshDIgqhAIAMAAIAjA3IAkg3IAMAAIgrBAIAtBDg");
    this.shape_17.setTransform(-19.7, -11.3);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#E2B48C")
      .s()
      .p("AAnBCIAAhxIhOBxIgJAAIAAiDIAKAAIAABxIBOhxIAJAAIAACDg");
    this.shape_18.setTransform(-31.675, -11.3);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#E2B48C")
      .s()
      .p(
        "AgdA8QgQgKgIgPQgJgQAAgTQAAgSAJgQQAIgPAQgJQAPgKAUAAQASAAAPAJQAPAIAJAQIgJAEQgHgMgNgIQgMgGgQgBQgRAAgNAIQgNAIgIANQgHANAAAQQAAARAHANQAIANANAIQANAIARAAQAQAAANgIQANgHAGgNIAJAFQgFAKgJAHQgJAIgLADQgLAEgMABQgUgBgPgIg"
      );
    this.shape_19.setTransform(-45.225, -11.3);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#E2B48C")
      .s()
      .p("AAmBCIAAh6IhLAAIAAB6IgKAAIAAiDIBfAAIAACDg");
    this.shape_20.setTransform(-58.85, -11.3);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#E2B48C")
      .s()
      .p(
        "AgqBCIAAiDIAsAAQAMgBAJAGQAKAFAFAKQAFAJAAALQAAANgFAIQgFAJgKAFQgJAFgMABIgiAAIAAAygAggAHIAiAAQAJgBAHgEQAHgDAEgHQAEgHAAgKQAAgJgEgHQgEgHgHgEQgHgEgJAAIgiAAg"
      );
    this.shape_21.setTransform(-75.475, -11.3);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#E2B48C")
      .s()
      .p("AgEBCIAAh6IgqAAIAAgJIBdAAIAAAJIgqAAIAAB6g");
    this.shape_22.setTransform(-86.575, -11.3);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#E2B48C")
      .s()
      .p("AAnBCIAAg/IhNAAIAAA/IgKAAIAAiDIAKAAIAAA7IBNAAIAAg7IAKAAIAACDg");
    this.shape_23.setTransform(-98.225, -11.3);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#E2B48C")
      .s()
      .p("AglBCIAAiDIBKAAIAAAJIhAAAIAAAzIA8AAIAAAJIg8AAIAAA1IBBAAIAAAJg");
    this.shape_24.setTransform(-109.375, -11.3);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#E2B48C")
      .s()
      .p("AAsBPIAAgZIhhAAIAAiEIAKAAIAAB6IBJAAIAAh6IAKAAIAAB6IAOAAIAAAjg");
    this.shape_25.setTransform(-120.925, -10.025);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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

    // Layer_1
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f("#0B1127").s().p("A3bGzIAAtlMAu3AAAIAANlg");
    this.shape_26.setTransform(0, -15);

    this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol12,
    new cjs.Rectangle(-150, -58.5, 300, 87),
    null
  );

  (lib.Symbol10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.bg2();
    this.instance.parent = this;
    this.instance.setTransform(-150, -300, 1, 1, 0, 180, 0);

    this.instance_1 = new lib.bg2();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-150, -300);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.Symbol10,
    new cjs.Rectangle(-150, -900, 300, 1200),
    null
  );

  (lib.Symbol9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhpC1QgvgcgcgvQgbgwgBg6QABg6AbgvQAcgvAvgcQAvgcA7gBQA6ABAwAcQAvAcAbAvQAcAvAAA6QAAA6gcAwQgbAvgvAcQgwAbg6ACQg7gCgvgbgAhZibQgpAZgXAoQgYApgBAxQABAzAYAoQAXApApAYQAoAXAyABQAygBAogXQAogYAYgpQAXgoABgzQgBgxgXgpQgYgogogZQgogYgyAAQgyAAgoAYg"
      );
    this.shape.setTransform(99.3, -3.35);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AB2DLIAAjDIjrAAIAADDIgfAAIAAmVIAfAAIAAC3IDrAAIAAi3IAfAAIAAGVg");
    this.shape_1.setTransform(55.725, -3.35);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ACZDyIAAhOIkxAAIAABOIgfAAIAAhrIAhAAQARgSAMgjQAMgiAAg5IAAjoID6AAIAAF4IArAAIAABrgAhOgJQAAA2gKAjQgLAjgPAUIDgAAIAAlbIi8AAg"
      );
    this.shape_2.setTransform(15.225, 0.525);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhCDFQgcgMgRgUQgSgUgJgZIAbgPQAFAVAOAQQANARAXALQAYAKAiAAQAyAAAbgXQAcgYAAgmQAAgYgMgTQgLgTgVgLQgVgMgeAAIgtAAIAAgcIAgAAQAdAAAVgKQAVgKALgTQAMgSAAgXQAAgYgMgSQgMgSgUgLQgWgKgbgBQgsACgYASQgZATgLAdIgZgPQAJgXARgTQAQgSAagLQAagKAjgBQAlABAbAPQAcAOAPAYQAQAZAAAgQAAAfgQAYQgQAYgcANQAkALAUAbQATAbABAkQgBAhgQAZQgQAagfAPQgfAPgqABQgngBgdgMg"
      );
    this.shape_3.setTransform(-20.35, -3.35);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhpC1QgvgcgcgvQgcgwgBg6QABg6AcgvQAcgvAvgcQAvgcA7gBQA7ABAuAcQAwAcAbAvQAcAvABA6QgBA6gcAwQgbAvgwAcQguAbg7ACQg7gCgvgbgAhZibQgpAZgYAoQgXApAAAxQAAAzAXAoQAYApApAYQAoAXAyABQAygBAogXQApgYAXgpQAXgoAAgzQAAgxgXgpQgXgogpgZQgogYgyAAQgyAAgoAYg"
      );
    this.shape_4.setTransform(-60.2, -3.35);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AByDLIAAl4IjjAAIAAF4IgfAAIAAmVIEhAAIAAGVg");
    this.shape_5.setTransform(-103.35, -3.35);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    lib.Symbol9,
    new cjs.Rectangle(-125, -38, 250.1, 70.9),
    null
  );

  (lib.Symbol8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AB8CkIAAkjIh6DJIgDAAIh6jJIAAEjIgZAAIAAlHIAfAAIB1DBIB1jBIAgAAIAAFHg");
    this.shape.setTransform(105.725, -2.55);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhVCSQgmgWgXgmQgWgngBgvQABgvAWgmQAXgmAmgXQAmgWAvgBQAwABAmAWQAmAXAXAmQAWAmABAvQgBAvgWAnQgXAmgmAWQgmAXgwABQgvgBgmgXgAhJh9QggATgTAhQgTAhgBAoQABApATAgQATAhAgAUQAhATAoAAQApAAAhgTQAggUATghQATggABgpQgBgogTghQgTghgggTQghgUgpAAQgoAAghAUg"
      );
    this.shape_1.setTransform(67.575, -2.525);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("ABPCkIiliiIAACiIgZAAIAAlHIAZAAIAACZICfiZIAiAAIimCgICqCng");
    this.shape_2.setTransform(36.75, -2.55);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("Ai3CkIAAlHIAZAAIAAEwICSAAIAAkwIAZAAIAAEwICSAAIAAkwIAZAAIAAFHg");
    this.shape_3.setTransform(-1, -2.55);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("ABgCkIAAkaIjCEaIgVAAIAAlHIAYAAIAAEZIDCkZIAVAAIAAFHg");
    this.shape_4.setTransform(-39.65, -2.55);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiLCkIAAgWQAXADAPgKQAQgKAJgaQAJgbAAgvIAAi9IDOAAIAAFIIgZAAIAAkwIicAAIAAClQgBA3gLAfQgMAfgUANQgSAKgXAAIgMgBg"
      );
    this.shape_5.setTransform(-73.8, -2.521);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhJCSQgmgWgWgmQgWgnAAgvQAAgvAWgmQAWgmAmgXQAmgWAygBQAtABAlAVQAmAVAUAkIgWANQgQgfgfgSQgggTgnAAQgrAAghAUQghATgSAhQgSAhAAAoQAAApASAgQASAhAhAUQAhATArAAQAoAAAfgTQAggSAQggIAXANQgOAYgVASQgWASgbAKQgbAKgfABQgygBgmgXg"
      );
    this.shape_6.setTransform(-106.05, -2.525);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    lib.Symbol8,
    new cjs.Rectangle(-126, -31, 252.8, 58.2),
    null
  );

  (lib.Symbol7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgHBpIAAjCIhCAAIAAgPICTAAIAAAPIhCAAIAADCg");
    this.shape.setTransform(113.7, -1.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("Ag8BpIAAjRIB3AAIAAAPIhnAAIAABRIBgAAIAAAOIhgAAIAABUIBpAAIAAAPg");
    this.shape_1.setTransform(98.25, -1.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("AA9BpIAAhkIh5AAIAABkIgQAAIAAjRIAQAAIAABeIB5AAIAAheIAQAAIAADRg");
    this.shape_2.setTransform(79.3, -1.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("ABJBpIgUg2IhpAAIgUA2IgRAAIBSjRIAQAAIBRDRgAAvAkIgvh4IgtB4IBcAAg");
    this.shape_3.setTransform(59.575, -1.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AgHBpIAAjCIhCAAIAAgPICTAAIAAAPIhCAAIAADCg");
    this.shape_4.setTransform(42.05, -1.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguBeQgZgPgOgYQgOgZAAgeQAAgeAOgYQAOgYAZgOQAYgPAggBQAcABAYAOQAYANAOAXIgPAIQgLgTgTgMQgVgMgYAAQgbAAgWAMQgUANgMAVQgMAVAAAZQAAAaAMAVQAMAVAUAMQAWAMAbABQAZAAAUgMQAUgMALgUIAOAIQgJAPgOAMQgNAMgSAGQgRAGgTAAQggAAgYgOg"
      );
    this.shape_5.setTransform(22.8, -1.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p("Ag7BpIAAjRIB2AAIAAAPIhmAAIAABRIBeAAIAAAOIheAAIAABUIBnAAIAAAPg");
    this.shape_6.setTransform(-3.95, -1.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("AA9BpIAAhkIh5AAIAABkIgQAAIAAjRIAQAAIAABeIB5AAIAAheIAQAAIAADRg");
    this.shape_7.setTransform(-22.9, -1.1);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("ABJBpIgUg2IhpAAIgUA2IgRAAIBSjRIAQAAIBRDRgAAvAkIgvh4IgtB4IBcAAg");
    this.shape_8.setTransform(-50.625, -1.1);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p("AAyBpIhohoIAABoIgQAAIAAjRIAQAAIAABiIBlhiIAVAAIhpBmIBsBrg");
    this.shape_9.setTransform(-67.475, -1.1);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag2BeQgYgPgPgYQgOgZAAgeQAAgeAOgYQAPgYAYgOQAZgPAdgBQAfABAYAPQAZAOAOAYQAOAYAAAeQAAAegOAZQgOAYgZAPQgYAOgfAAQgdAAgZgOgAguhQQgVANgMAVQgMAVAAAZQAAAaAMAVQAMAVAVAMQAVAMAZABQAagBAVgMQAVgMAMgVQAMgVAAgaQAAgZgMgVQgMgVgVgNQgVgMgaAAQgZAAgVAMg"
      );
    this.shape_10.setTransform(-89.475, -1.1);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p("AA7BpIAAjCIh1AAIAADCIgQAAIAAjRICVAAIAADRg");
    this.shape_11.setTransform(-111.8, -1.1);

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
    lib.Symbol7,
    new cjs.Rectangle(-124, -20, 247.9, 38.6),
    null
  );

  (lib.Symbol6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.bg1();
    this.instance.parent = this;
    this.instance.setTransform(-150, -300, 1, 1, 0, 180, 0);

    this.instance_1 = new lib.bg1();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-150, -300);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.Symbol6,
    new cjs.Rectangle(-150, -900, 300, 1200),
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
        "AhkDIQg1gfgdg0Qgeg1AAhAQAAhAAeg0QAdg0A1gfQA0gfBEAAQA+AAAzAdQAyAdAdAyIgeARQgXgqgrgZQgrgZg1AAQg6AAgtAbQgtAagZAsQgZAuAAA2QAAA3AZAuQAZAsAtAbQAtAaA6ABQA2gBArgZQArgaAXgrIAeARQgSAigdAZQgeAXglAPQglANgqAAQhEAAg0gfg"
      );
    this.shape.setTransform(101.675, -3.95);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhkDIQg1gfgdg0Qgeg1AAhAQAAhAAeg0QAdg0A1gfQA0gfBEAAQA+AAAzAdQAyAdAdAyIgeARQgXgqgrgZQgrgZg1AAQg6AAgtAbQgtAagZAsQgZAuAAA2QAAA3AZAuQAZAsAtAbQAtAaA6ABQA2gBArgZQArgaAXgrIAeARQgSAigdAZQgeAXglAPQglANgqAAQhEAAg0gfg"
      );
    this.shape_1.setTransform(53.625, -3.95);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("AiADgIAAm/ID+AAIAAAgIjcAAIAACuIDMAAIAAAfIjMAAIAACyIDfAAIAAAgg");
    this.shape_2.setTransform(13.675, -3.95);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiRDgIAAm/ICYAAQAoAAAgATQAfARASAfQASAgAAAoQAAAogSAeQgSAfgfARQggATgoAAIh2AAIAACrgAhvAVIB2AAQAeAAAZgOQAXgMAOgZQANgXAAgfQAAgggNgYQgOgYgXgNQgZgOgeAAIh2AAg"
      );
    this.shape_3.setTransform(-22.2, -3.95);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQDgIAAmfIiNAAIAAggIE7AAIAAAgIiNAAIAAGfg");
    this.shape_4.setTransform(-59.625, -3.95);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhkDIQg1gfgdg0Qgeg1AAhAQAAhAAeg0QAdg0A1gfQA0gfBEAAQA+AAAzAdQAyAdAdAyIgeARQgXgqgrgZQgrgZg1AAQg6AAgtAbQgtAagZAsQgZAuAAA2QAAA3AZAuQAZAsAtAbQAtAaA6ABQA2gBArgZQArgaAXgrIAeARQgSAigdAZQgeAXglAPQglANgqAAQhEAAg0gfg"
      );
    this.shape_5.setTransform(-100.625, -3.95);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    new cjs.Rectangle(-127, -42, 254.5, 77.8),
    null
  );

  (lib.Symbol2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#10162D").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol2,
    new cjs.Rectangle(-150, -300, 300, 600),
    null
  );

  (lib.Symbol1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.mask();
    this.instance.parent = this;
    this.instance.setTransform(0, -486);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Symbol1,
    new cjs.Rectangle(0, -486, 295, 486),
    null
  );

  (lib.Symbol = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("ABkCFIAAjsIhiCjIgDAAIhiijIAADsIgUAAIAAkJIAZAAIBeCdIBfidIAZAAIAAEJg");
    this.shape.setTransform(79.875, -0.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("ABNCFIAAjkIicDkIgRAAIAAkJIAUAAIAADjICcjjIASAAIAAEJg");
    this.shape_1.setTransform(51.5, -0.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABkCfIAAg0IjHAAIAAA0IgUAAIAAhGIAVAAQALgNAIgWQAIgWAAgmIAAiXICjAAIAAD2IAcAAIAABGgAgzgGQAAAjgHAXQgGAXgKAOICSAAIAAjjIh7AAg"
      );
    this.shape_2.setTransform(24.975, 1.95);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("ABNCFIAAjkIicDkIgRAAIAAkJIAUAAIAADjICbjjIASAAIAAEJg");
    this.shape_3.setTransform(-0.8, -0.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhdCFIAAkJIBpAAQAUAAAQAJQAPAKAKAQQAJAQAAATQAAAUgJAPQgJAOgQAJQAUAHANARQAMARABAYQgBAUgJAQQgKAQgQAKQgRAKgUAAgAhIByIBdAAQAPAAALgHQAMgIAHgLQAHgMAAgPQAAgQgHgLQgHgNgMgHQgLgHgPAAIhdAAgAhIgLIBUAAQAOAAALgHQAMgHAGgLQAHgMAAgOQAAgOgHgMQgGgLgMgHQgLgHgOAAIhUAAg"
      );
    this.shape_4.setTransform(-24.775, -0.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AhMCFIAAkJICWAAIAAATIiBAAIAABoIB4AAIAAASIh4AAIAABpICEAAIAAATg");
    this.shape_5.setTransform(-56.825, -0.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p("ABOCFIAAiAIiaAAIAACAIgVAAIAAkJIAVAAIAAB4ICaAAIAAh4IATAAIAAEJg");
    this.shape_6.setTransform(-80.85, -0.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    lib.Symbol,
    new cjs.Rectangle(-96, -24, 193.3, 47.8),
    null
  );

  // stage content:
  (lib.index = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
    this.shape.setTransform(150, 300);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(265));

    // Layer_20
    this.instance = new lib.Symbol2();
    this.instance.parent = this;
    this.instance.setTransform(150, 300);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(249)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 15, cjs.Ease.get(-1))
        .wait(1)
    );

    // Layer_19
    this.instance_1 = new lib.Symbol15();
    this.instance_1.parent = this;
    this.instance_1.setTransform(361.1, 360.05, 1, 1, -35.4391, 0, 0, 40, 38);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(164)
        .to({ _off: false }, 0)
        .to({ rotation: 0, x: 241, y: 242 }, 15, cjs.Ease.get(1))
        .wait(10)
        .to(
          { regX: 40.1, scaleX: 0.9, scaleY: 0.9, x: 237.1, y: 238.2 },
          5,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 40, scaleX: 1, scaleY: 1, x: 241, y: 242 },
          5,
          cjs.Ease.quadInOut
        )
        .wait(66)
    );

    // Layer_25 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_204 = new cjs.Graphics().p(
      "ApcCqQhaAAAAhaIAAifQAAhaBaAAIS5AAQBaAAAABaIAACfQAABahaAAgAqihPIAACfQAABGBGAAIS5AAQBGAAAAhGIAAifQAAhGhGAAIy5AAQhGAAAABGg"
    );

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(204)
        .to({ graphics: mask_graphics_204, x: 150, y: 202.05 })
        .wait(41)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(20)
    );

    // Layer_24
    this.instance_2 = new lib.Symbol12888();
    this.instance_2.parent = this;
    this.instance_2.setTransform(
      16.9,
      209.05,
      0.6375,
      2.0095,
      -19.7132,
      0,
      0,
      -0.2,
      0.1
    );
    this.instance_2._off = true;

    var maskedShapeInstanceList = [this.instance_2];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(221)
        .to({ _off: false }, 0)
        .to({ x: 304, y: 200.55 }, 23, cjs.Ease.quadInOut)
        .to({ _off: true }, 1)
        .wait(20)
    );

    // Layer_23
    this.instance_3 = new lib.Symbol12888();
    this.instance_3.parent = this;
    this.instance_3.setTransform(
      16.9,
      209.05,
      0.6375,
      2.0095,
      -19.7132,
      0,
      0,
      -0.2,
      0.1
    );
    this.instance_3._off = true;

    var maskedShapeInstanceList = [this.instance_3];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(204)
        .to({ _off: false }, 0)
        .to({ x: 304, y: 200.55 }, 27, cjs.Ease.quadInOut)
        .to({ _off: true }, 14)
        .wait(20)
    );

    // Layer_22 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_204 = new cjs.Graphics().p(
      "ApcCgQhQAAAAhQIAAifQAAhQBQAAIS5AAQBQAAAABQIAACfQAABQhQAAg"
    );

    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(204)
        .to({ graphics: mask_1_graphics_204, x: 150, y: 202.05 })
        .wait(41)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(20)
    );

    // Layer_21
    this.instance_4 = new lib.Symbol12888();
    this.instance_4.parent = this;
    this.instance_4.setTransform(
      16.9,
      209.05,
      0.6375,
      2.0095,
      -19.7132,
      0,
      0,
      -0.2,
      0.1
    );
    this.instance_4._off = true;

    var maskedShapeInstanceList = [this.instance_4];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(211)
        .to({ _off: false }, 0)
        .to({ x: 304, y: 200.55 }, 30, cjs.Ease.quadInOut)
        .to({ _off: true }, 4)
        .wait(20)
    );

    // Layer_17
    this.instance_5 = new lib.Symbol13();
    this.instance_5.parent = this;
    this.instance_5.setTransform(
      149.65,
      203.15,
      4.6941,
      4.6941,
      -44.9993,
      0,
      0,
      0,
      0.2
    );
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(154)
        .to({ _off: false }, 0)
        .to(
          { regY: 0, scaleX: 1, scaleY: 1, rotation: 0, x: 150, y: 202.05 },
          10,
          cjs.Ease.get(-1)
        )
        .wait(30)
        .to({ scaleX: 0.8832, scaleY: 0.8832 }, 5, cjs.Ease.quadInOut)
        .to({ scaleX: 1, scaleY: 1 }, 5, cjs.Ease.quadInOut)
        .wait(61)
    );

    // Layer_16
    this.instance_6 = new lib.Symbol12();
    this.instance_6.parent = this;
    this.instance_6.setTransform(150, -31.5);
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(129)
        .to({ _off: false }, 0)
        .to({ y: 38.5 }, 10, cjs.Ease.get(1))
        .to({ y: 28.5 }, 5)
        .wait(121)
    );

    // Symbol_14
    this.instance_7 = new lib.Symbol14();
    this.instance_7.parent = this;
    this.instance_7.setTransform(150, -28.25);
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(139)
        .to({ _off: false }, 0)
        .to({ y: 131.75 }, 10, cjs.Ease.get(1))
        .to({ y: 121.75 }, 5)
        .wait(111)
    );

    // Layer_13
    this.instance_8 = new lib.Symbol7();
    this.instance_8.parent = this;
    this.instance_8.setTransform(150, 12.6);
    this.instance_8.alpha = 0;
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(60)
        .to({ _off: false }, 0)
        .to({ y: 32.6, alpha: 1 }, 10, cjs.Ease.get(1))
        .wait(49)
        .to({ y: 12.6, alpha: 0 }, 9, cjs.Ease.get(-1))
        .to({ _off: true }, 1)
        .wait(136)
    );

    // СЛИШКОМ
    this.instance_9 = new lib.Symbol8();
    this.instance_9.parent = this;
    this.instance_9.setTransform(150, 69.3);
    this.instance_9.alpha = 0;
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(60)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 10, cjs.Ease.get(1))
        .wait(49)
        .to({ alpha: 0 }, 9, cjs.Ease.get(-1))
        .to({ _off: true }, 1)
        .wait(136)
    );

    // ПОЗДНО
    this.instance_10 = new lib.Symbol9();
    this.instance_10.parent = this;
    this.instance_10.setTransform(150, 137.2);
    this.instance_10.alpha = 0;
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(60)
        .to({ _off: false }, 0)
        .to({ y: 117.2, alpha: 1 }, 10, cjs.Ease.get(1))
        .wait(49)
        .to({ y: 137.2, alpha: 0 }, 9, cjs.Ease.get(-1))
        .to({ _off: true }, 1)
        .wait(136)
    );

    // Layer_2
    this.instance_11 = new lib.Symbol5();
    this.instance_11.parent = this;
    this.instance_11.setTransform(150, 38.4);
    this.instance_11.alpha = 0;
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ y: 58.4, alpha: 1 }, 10, cjs.Ease.get(1))
        .wait(30)
        .to({ y: 38.4, alpha: 0 }, 10, cjs.Ease.get(-1))
        .to({ _off: true }, 1)
        .wait(205)
    );

    // _
    this.instance_12 = new lib.Symbol();
    this.instance_12.parent = this;
    this.instance_12.setTransform(150, 123.85);
    this.instance_12.alpha = 0;
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ y: 103.85, alpha: 1 }, 10, cjs.Ease.get(1))
        .wait(30)
        .to({ y: 123.85, alpha: 0 }, 10, cjs.Ease.get(-1))
        .to({ _off: true }, 1)
        .wait(205)
    );

    // Layer_5
    this.instance_13 = new lib.Symbol1();
    this.instance_13.parent = this;
    this.instance_13.setTransform(
      -39.4,
      956.3,
      1,
      1,
      33.6697,
      0,
      0,
      105.5,
      -19.9
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .to({ rotation: 18.6705, x: 24.65, y: 649.1 }, 24, cjs.Ease.get(1))
        .to(
          { regX: 105.4, regY: -19.8, rotation: 3.6711, x: 24.6, y: 649.2 },
          46,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: -19.7, rotation: -6.7998, x: 24.7, y: 649.3 },
          39,
          cjs.Ease.get(-1)
        )
        .to(
          {
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: 39.9095,
            x: 8.7,
            y: 934.25,
          },
          19,
          cjs.Ease.quadInOut
        )
        .to({ _off: true }, 1)
        .wait(136)
    );

    // Layer_10
    this.instance_14 = new lib.Symbol10();
    this.instance_14.parent = this;
    this.instance_14.setTransform(150, 300);
    this.instance_14.alpha = 0;
    this.instance_14._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(109)
        .to({ _off: false }, 0)
        .to({ y: 380, alpha: 1 }, 19, cjs.Ease.quadInOut)
        .wait(137)
    );

    // Layer_4
    this.instance_15 = new lib.Symbol6();
    this.instance_15.parent = this;
    this.instance_15.setTransform(150, 300, 1.1533, 1.1533);
    this.instance_15.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 19, cjs.Ease.get(1))
        .wait(90)
        .to({ y: 380 }, 19, cjs.Ease.quadInOut)
        .wait(137)
    );

    // Layer_6
    this.instance_16 = new lib.Symbol2();
    this.instance_16.parent = this;
    this.instance_16.setTransform(150, 300);

    this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(265));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(11.8, -438, 441.5, 1515.9);
  // library properties:
  lib.properties = {
    id: "DE865EAE10558B4F9F6736F8BAD15C9A",
    width: 300,
    height: 600,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "/files/4/index_atlas_P_.png", id: "index_atlas_P_" },
      { src: "/files/4/index_atlas_NP_.jpg", id: "index_atlas_NP_" },
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
  an.compositions["DE865EAE10558B4F9F6736F8BAD15C9A"] = {
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
