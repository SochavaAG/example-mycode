var createjs, AdobeAn;
!function (cjs, an) {
  var p, lib = {}, ss = {}, img = {};

  function mc_symbol_clone() {
    var e = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    return e.gotoAndStop(this.currentFrame), e.paused = this.paused, e.framerate = this.framerate, e
  }

  function getMCSymbolPrototype(e, t, s) {
    var i = cjs.extend(e, cjs.MovieClip);
    return i.clone = mc_symbol_clone, i.nominalBounds = t, i.frameBounds = s, i
  }

  lib.ssMetadata = [], (lib.rocket_arm1_1 = function () {
    this.initialize(img.rocket_arm1_1)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 97, 125), (lib.rocket_arm1_2 = function () {
    this.initialize(img.rocket_arm1_2)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 71, 36), (lib.rocket_bag_1 = function () {
    this.initialize(img.rocket_bag_1)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 155, 72), (lib.rocket_bag_2 = function () {
    this.initialize(img.rocket_bag_2)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 86, 50), (lib.rocket_bag_bag = function () {
    this.initialize(img.rocket_bag_bag)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 82, 81), (lib.rocket_bag_sh = function () {
    this.initialize(img.rocket_bag_sh)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 93, 81), (lib.rocket_body = function () {
    this.initialize(img.rocket_body)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 246, 308), (lib.rocket_cloud_1 = function () {
    this.initialize(img.rocket_cloud_1)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 227, 222), (lib.rocket_cloud_2 = function () {
    this.initialize(img.rocket_cloud_2)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 125, 135), (lib.rocket_cloud_3 = function () {
    this.initialize(img.rocket_cloud_3)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 74, 75), (lib.rocket_cloud_4 = function () {
    this.initialize(img.rocket_cloud_4)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 264, 239), (lib.rocket_cloud_bulb = function () {
    this.initialize(img.rocket_cloud_bulb)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 33, 33), (lib.rocket_daster = function () {
    this.initialize(img.rocket_daster)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 170, 135), (lib.rocket_flame_1 = function () {
    this.initialize(img.rocket_flame_1)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 157, 151), (lib.rocket_flame_2 = function () {
    this.initialize(img.rocket_flame_2)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 103, 112), (lib.rocket_hand_top = function () {
    this.initialize(img.rocket_hand_top)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 42, 95), (lib.rocket_head_1 = function () {
    this.initialize(img.rocket_head_1)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 26, 21), (lib.rocket_head_back = function () {
    this.initialize(img.rocket_head_back)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 154, 86), (lib.rocket_head_bottom = function () {
    this.initialize(img.rocket_head_bottom)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 63, 54), (lib.rocket_head_face = function () {
    this.initialize(img.rocket_head_face)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 74, 120), (lib.rocket_head_main = function () {
    this.initialize(img.rocket_head_main)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 171, 103), (lib.rocket_head_top = function () {
    this.initialize(img.rocket_head_top)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 111, 93), (lib.rocket_leg = function () {
    this.initialize(img.rocket_leg)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 84, 148), (lib.rocket_neck = function () {
    this.initialize(img.rocket_neck)
  }).prototype = p = new cjs.Bitmap, p.nominalBounds = new cjs.Rectangle(0, 0, 26, 32), (lib.rukav = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_hand_top, this.instance.parent = this, this.instance.setTransform(-21, -47.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-21, -47.5, 42, 95), (lib.paper_Слой_1 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#EEF8FA").s().p("AiqkqIEADOIBVFtIigAaQhqlKhLkLg"), this.shape.setTransform(-2.725, -8.55), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#EEF8FA").s().p("AAIEsQgghkgdhgQhDjVgvi+QCDBzB4BfIBTFrIieAaIgBAAg"), this.shape_1.setTransform(-2.4, -8.65), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#EEF8FA").s().p("AgBEvQgghjgehhQg/jRgfjIIABABQCGCVBlBHQAgCfAvDHIifAag"), this.shape_2.setTransform(-1.45, -8.95), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#EEF8FA").s().p("AhIBsQg8jLgQjRIACABQCMC3BQAwQAXCNAzDTIieAaQghhhgdhlg"), this.shape_3.setTransform(-.5, -9.25), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f("#EEF8FA").s().p("AhMBtQg7jJgJjVQCODDBKApQAVCHA0DXIifAaQgghggehmg"), this.shape_4.setTransform(-.175, -9.35), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#EEF8FA").s().p("AgIExIgBgFQgghfgehjQgjh2gVh4QgOhSgJhVIABgFQB7CdBKA5QAOALANAHQAXCCA0DdIicAaIgCAAg"), this.shape_5.setTransform(-.7, -9.175), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f("#EEF8FA").s().p("AAFEqIgBgEIg8jCQgnh6gdhyQgVhOgUhUIADAAQCECIBVA9QAOAKANAIQAdB1A3DwIifAZIgCgBg"), this.shape_6.setTransform(-2.25, -8.625), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f("#EEF8FA").s().p("AAVEmIgBgFIg9jCQgrh+glhrQgchLgghSIAFAEQCOBzBfBBIAcATQAlBoA4ECIigAaIgBgCg"), this.shape_7.setTransform(-3.825, -8.25), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f("#EEF8FA").s().p("AAZEgQhMj5hGiyQgdhJgkhSQCUBwBlBEIAcATQAoBkA4EIIigAaIgCgHg"), this.shape_8.setTransform(-4.35, -8.15), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f("#EEF8FA").s().p("AAPEhIAAgBQhNj1g7izIg3idIAMAGQB5BuBlBDIAcASQAnB0A0D0IifAaIgDgFg"), this.shape_9.setTransform(-3.35, -8.075), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f("#EEF8FA").s().p("AgIEoIAAgBQhOjugmi1QgRhVgKhMIAEgKQBPB8BwBKIAaARQAnCdArDDIiaAYIgGAAg"), this.shape_10.setTransform(-.85, -8.425), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f("#EEF8FA").s().p("AiNkqQBGCQCHBPIBOFcIifAaQh4lpgEjsg"), this.shape_11.setTransform(.125, -8.6), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f("#EEF8FA").s().p("AiSkpQBTCJCDBRIBPFfIieAaQh4lrgPjog"), this.shape_12.setTransform(-.4, -8.475), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f("#EEF8FA").s().p("AiiklQB5BzB3BXQAlCVAwDTIigAZQh2lzgvjYg"), this.shape_13.setTransform(-1.925, -8.125), this.shape_14 = new cjs.Shape, this.shape_14.graphics.f("#EEF8FA").s().p("AixkiQCfBeBqBeQAkCCA2DtIigAaQh1l7hOjKg"), this.shape_14.setTransform(-3.475, -7.775), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f("#EEF8FA").s().p("Ai2khQCsBXBlBgQAkB8A4D2IifAaQh2l+hYjFg"), this.shape_15.setTransform(-4, -7.65), this.shape_16 = new cjs.Shape, this.shape_16.graphics.f("#EEF8FA").s().p("AivkiQCYBfBtBdQAlCIA0DoIifAaQh0lyhLjUg"), this.shape_16.setTransform(-3.2, -7.85), this.shape_17 = new cjs.Shape, this.shape_17.graphics.f("#EEF8FA").s().p("AiakoQBgB6CCBTQAoCoArDCIifAaQhtlVgpj8g"), this.shape_17.setTransform(-1.175, -8.4), this.shape_18 = new cjs.Shape, this.shape_18.graphics.f("#EEF8FA").s().p("AiSkqQBKCDCLBQIBQFoIifAaQhqlJgckMg"), this.shape_18.setTransform(-.375, -8.6), this.shape_19 = new cjs.Shape, this.shape_19.graphics.f("#EEF8FA").s().p("AiXkqQBWB9CIBVIBRFpIieAaQhrlJgmkMg"), this.shape_19.setTransform(-.9, -8.6), this.shape_20 = new cjs.Shape, this.shape_20.graphics.f("#EEF8FA").s().p("AikkqQB0BuCBBhIBUFsIifAaQhqlKhAkLg"), this.shape_20.setTransform(-2.2, -8.55), this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape_2}]}, 1).to({state: [{t: this.shape_3}]}, 1).to({state: [{t: this.shape_4}]}, 1).to({state: [{t: this.shape_5}]}, 1).to({state: [{t: this.shape_6}]}, 1).to({state: [{t: this.shape_7}]}, 1).to({state: [{t: this.shape_8}]}, 1).to({state: [{t: this.shape_9}]}, 1).to({state: [{t: this.shape_10}]}, 1).to({state: [{t: this.shape_11}]}, 1).to({state: [{t: this.shape_12}]}, 1).to({state: [{t: this.shape_13}]}, 1).to({state: [{t: this.shape_14}]}, 1).to({state: [{t: this.shape_15}]}, 1).to({state: [{t: this.shape_16}]}, 1).to({state: [{t: this.shape_17}]}, 1).to({state: [{t: this.shape_18}]}, 1).to({state: [{t: this.shape_19}]}, 1).to({state: [{t: this.shape_20}]}, 1).to({state: [{t: this.shape}]}, 1).wait(1))
  }).prototype = p = new cjs.MovieClip, (lib.neck = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_neck, this.instance.parent = this, this.instance.setTransform(-13, -16), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-13, -16, 26, 32), (lib.leg_inin = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_leg, this.instance.parent = this, this.instance.setTransform(-42, -74), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = getMCSymbolPrototype(lib.leg_inin, new cjs.Rectangle(-42, -74, 84, 148), null), (lib.h_top = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_head_top, this.instance.parent = this, this.instance.setTransform(-55.5, -46.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-55.5, -46.5, 111, 93), (lib.h_t = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_head_1, this.instance.parent = this, this.instance.setTransform(-13, -10.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-13, -10.5, 26, 21), (lib.h_main = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_head_main, this.instance.parent = this, this.instance.setTransform(-85.5, -51.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-85.5, -51.5, 171, 103), (lib.h_back = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_head_back, this.instance.parent = this, this.instance.setTransform(-77, -43), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-77, -43, 154, 86), (lib.h_1 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_head_bottom, this.instance.parent = this, this.instance.setTransform(-31.5, -27), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-31.5, -27, 63, 54), (lib.flame_fl = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_flame_2, this.instance.parent = this, this.instance.setTransform(-51.5, -56), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-51.5, -56, 103, 112), (lib.flame_b = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_flame_1, this.instance.parent = this, this.instance.setTransform(-78.5, -75.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-78.5, -75.5, 157, 151), (lib.face = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_head_face, this.instance.parent = this, this.instance.setTransform(-37, -60), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-37, -60, 74, 120), (lib.daster_in = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_daster, this.instance.parent = this, this.instance.setTransform(-85, -67.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = getMCSymbolPrototype(lib.daster_in, new cjs.Rectangle(-85, -67.5, 170, 135), null), (lib.bulb = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_cloud_bulb, this.instance.parent = this, this.instance.setTransform(-16.5, -16.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-16.5, -16.5, 33, 33), (lib.br2 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_bag_2, this.instance.parent = this, this.instance.setTransform(-43, -25), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-43, -25, 86, 50), (lib.br1 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_bag_1, this.instance.parent = this, this.instance.setTransform(-77.5, -36), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-77.5, -36, 155, 72), (lib.body = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_body, this.instance.parent = this, this.instance.setTransform(-123, -154), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-123, -154, 246, 308), (lib.bag = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_bag_bag, this.instance.parent = this, this.instance.setTransform(-41, -40.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-41, -40.5, 82, 81), (lib.b_sh = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_bag_sh, this.instance.parent = this, this.instance.setTransform(-46.5, -40.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-46.5, -40.5, 93, 81), (lib.с4 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_cloud_3, this.instance.parent = this, this.instance.setTransform(-37, -37.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-37, -37.5, 74, 75), (lib.с3 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_cloud_4, this.instance.parent = this, this.instance.setTransform(-132, -119.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-132, -119.5, 264, 239), (lib.с2 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_cloud_2, this.instance.parent = this, this.instance.setTransform(-66.65, -64.1, .9541, 1, 0, 0, 1.4791), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-66.6, -64.1, 119.19999999999999, 138.1), (lib.с1 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_cloud_1, this.instance.parent = this, this.instance.setTransform(-113.5, -111), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-113.5, -111, 227, 222), (lib.arm12 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_arm1_2, this.instance.parent = this, this.instance.setTransform(-35.5, -18), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-35.5, -18, 71, 36), (lib.smb = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.с3("synched", 0), this.instance.parent = this, this.instance.setTransform(-44.5, -71.2, 1, 1, 0, 0, 0, -44.5, -71.2), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      regX: -44.4,
      scaleX: 1.0377,
      scaleY: 1.0379,
      skewX: -1.1861,
      x: -44.45,
      y: -71.25
    }, 8, cjs.Ease.quadInOut).to({
      regX: -44.6,
      scaleX: 1.0292,
      scaleY: 1.0004,
      skewX: 1.5453,
      x: -44.7,
      y: -71.2
    }, 7, cjs.Ease.quadInOut).to({
      regX: -44.5,
      regY: -71.3,
      scaleX: 1.0263,
      scaleY: 1.0005,
      skewX: 0,
      skewY: -1.1518,
      x: -44.5,
      y: -71.35
    }, 11, cjs.Ease.quadInOut).to({
      regY: -71.2,
      scaleX: 1.0005,
      scaleY: 1,
      skewY: -1.8336,
      y: -71.25
    }, 9, cjs.Ease.quadInOut).to({
      regY: -71.3,
      scaleX: 1,
      scaleY: .973,
      skewY: 0,
      y: -71.3
    }, 9, cjs.Ease.quadInOut).to({regY: -71.2, scaleY: 1, y: -71.2}, 8, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-139.7, -125.1, 282.5, 251.8), (lib.sm3 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.с4("synched", 0), this.instance.parent = this, this.instance.setTransform(-23.1, -17.9, 1, 1, 0, 0, 0, -23.1, -17.9), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      regX: -22.9,
      scaleX: 1.0958,
      scaleY: 1.0941,
      skewY: -3.1476,
      x: -22.9,
      y: -18
    }, 8).to({regX: -23.2, scaleX: .9234, scaleY: .999, skewY: 0, x: -23.2, y: -22.05}, 5).to({
      regX: -23,
      scaleX: 1.1532,
      scaleY: 1.2883,
      x: -29.65,
      y: -35.3
    }, 10).to({regX: -23.1, scaleX: 1, scaleY: 1.2066, x: -23.1, y: -30.75}, 11).to({scaleY: 1, y: -17.9}, 10).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-45.8, -60.5, 88.5, 104), (lib.sm2 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.с1("synched", 0), this.instance.parent = this, this.instance.setTransform(-42, -68.6, 1, 1, 0, 0, 0, -42, -68.6), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      regY: -68.5,
      scaleX: 1.0295,
      scaleY: 1.0458,
      skewX: 1.4824,
      skewY: .1384,
      y: -70
    }, 11).to({regY: -68.6, scaleX: 1.0007, scaleY: 1, skewX: 0, skewY: -2.0816, y: -68.6}, 10).to({
      scaleX: 1.0496,
      scaleY: 1.0259,
      skewY: 0,
      x: -42.05,
      y: -68.65
    }, 11).to({scaleX: 1, scaleY: 1, x: -42, y: -68.6}, 16).wait(1))
  }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(-120.4, -116.6, 241.60000000000002, 234.7), (lib.sm1 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.с2("synched", 0), this.instance.parent = this, this.instance.setTransform(-50.7, 9.8, 1, 1, 0, 0, 0, -50.7, 9.8), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      regX: -50.6,
      scaleX: 1.1318,
      skewY: -1.6649,
      x: -50.65
    }, 11, cjs.Ease.quadInOut).to({
      regX: -50.7,
      scaleX: .9355,
      skewY: 4.9836,
      x: -50.7,
      y: 9.85
    }, 10, cjs.Ease.quadInOut).to({
      regX: -50.6,
      scaleX: 1.0495,
      scaleY: 1.0595,
      skewY: 0,
      x: -50.6
    }, 11, cjs.Ease.quadInOut).to({
      regX: -50.8,
      scaleX: .9731,
      scaleY: 1,
      x: -50.85,
      y: 9.8
    }, 7, cjs.Ease.quadInOut).to({
      regX: -50.7,
      scaleX: 1.059,
      scaleY: 1.0796,
      skewY: 1.2129,
      x: -50.75,
      y: 9.85
    }, 6, cjs.Ease.quadInOut).to({scaleX: 1, scaleY: 1, skewY: 0, x: -50.7, y: 9.8}, 7, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-68.8, -70.2, 134.89999999999998, 152.60000000000002),(lib.paper = function (e, t, s) {
    this.initialize(e, t, s, {}), this.frame_21 = function () {
      this.___loopingOver___ = !0
    }, this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1)), this.Слой_1 = new lib.paper_Слой_1, this.Слой_1.name = "Слой_1", this.Слой_1.parent = this, this.Слой_1.setTransform(-2.8, -8.6, 1, 1, 0, 0, 0, -2.8, -8.6), this.Слой_1.depth = 0, this.Слой_1.isAttachedToCamera = 0, this.Слой_1.isAttachedToMask = 0, this.Слой_1.layerDepth = 0, this.Слой_1.layerIndex = 0, this.Слой_1.maskLayerName = 0, this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(22))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-23, -40, 37.4, 61.3),(lib.leg_in = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.leg_inin, this.instance.parent = this, this.instance.setTransform(-15.3, -56.6, 1, 1, 0, 0, 0, -15.3, -56.6), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      rotation: -7.7327,
      y: -56.65
    }, 7, cjs.Ease.quadInOut).to({rotation: 6.1966, y: -56.6}, 6, cjs.Ease.quadInOut).to({
      rotation: -6.4508,
      y: -56.65
    }, 6, cjs.Ease.quadInOut).to({rotation: 7.2425, x: -15.35}, 7, cjs.Ease.quadInOut).to({
      rotation: -3.9794,
      y: -56.6
    }, 6, cjs.Ease.quadInOut).to({rotation: 0, x: -15.3}, 5, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-58.3, -81.6, 117.3, 161.8),(lib.leg = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.leg_in, this.instance.parent = this, this.instance.setTransform(-20.1, -61.5, 1, 1, 0, 0, 0, -20.1, -61.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-42, -74, 84, 148),(lib.h_topi = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.h_top("synched", 0), this.instance.parent = this, this.instance.setTransform(-48, -11.8, 1, 1, 0, 0, 0, -48, -11.8), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      scaleX: .999,
      scaleY: 1.0025,
      skewX: -4.0333,
      skewY: -.9146,
      x: -48.85,
      y: -11.85
    }, 4, cjs.Ease.quadInOut).to({
      scaleX: 1,
      scaleY: 1.0599,
      skewX: 1.9479,
      skewY: -.4432,
      x: -48.05,
      y: -11.9
    }, 3, cjs.Ease.quadInOut).to({
      scaleY: 1.0025,
      skewX: -4.0333,
      skewY: 0,
      x: -49.65,
      y: -13.8
    }, 3, cjs.Ease.quadInOut).to({
      regX: -47.8,
      regY: -11.9,
      scaleX: 1.0011,
      scaleY: .9369,
      skewX: -2.6371,
      skewY: .3852,
      x: -48.3,
      y: -13.9
    }, 4, cjs.Ease.quadInOut).to({
      regX: -48,
      regY: -11.8,
      scaleX: 1.0003,
      scaleY: 1,
      skewX: 0,
      skewY: 1.3566,
      x: -48,
      y: -13.45
    }, 3, cjs.Ease.quadInOut).to({scaleX: 1.0004, skewY: -1.5776, y: -10.25}, 3, cjs.Ease.quadInOut).to({
      regY: -11.7,
      scaleX: .9807,
      skewY: -1.5737,
      x: -48.05,
      y: -11.8
    }, 5, cjs.Ease.quadInOut).to({
      regX: -47.9,
      regY: -11.8,
      scaleX: 1.0007,
      scaleY: 1.0004,
      skewX: -4.7025,
      skewY: -2.0484,
      x: -49.1,
      y: -10.2
    }, 6, cjs.Ease.quadInOut).to({
      regX: -48,
      scaleX: 1,
      scaleY: 1.0034,
      skewX: 4.6887,
      skewY: 0,
      x: -48.45,
      y: -11.8
    }, 4, cjs.Ease.quadInOut).to({
      scaleX: 1.0003,
      scaleY: 1,
      skewX: 0,
      skewY: 1.3566,
      x: -48,
      y: -13.85
    }, 3, cjs.Ease.quadInOut).to({scaleX: 1.0004, skewY: 1.5776, y: -13.8}, 3, cjs.Ease.quadInOut).to({
      scaleX: 1.0008,
      skewY: -2.2693,
      y: -9.85
    }, 4, cjs.Ease.quadInOut).to({scaleX: 1, skewY: 0, y: -11.8}, 3, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-60.7, -49.4, 119.80000000000001, 99.4),(lib.h_ti = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.h_t("synched", 0), this.instance.parent = this, this.instance.setTransform(-10.2, -8.2, 1, 1, 0, 0, 0, -10.2, -8.2), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      scaleX: 1.0041,
      skewY: 5.172
    }, 4, cjs.Ease.quadInOut).to({scaleX: 1.0696, skewY: -1.9743}, 5, cjs.Ease.quadInOut).to({
      scaleX: .9341,
      skewY: -9.0615
    }, 4, cjs.Ease.quadInOut).to({
      regY: -8.1,
      scaleX: 1.0078,
      skewY: 7.125,
      y: -8.1
    }, 4, cjs.Ease.quadInOut).to({
      regY: -8.2,
      scaleX: 1.0032,
      skewY: -4.5593,
      y: -8.25
    }, 5, cjs.Ease.quadInOut).to({scaleX: 1.0024, skewY: 3.9454, y: -8.2}, 3, cjs.Ease.quadInOut).to({
      scaleX: 1.0051,
      skewY: -5.7836
    }, 4, cjs.Ease.quadInOut).to({
      regX: -10.1,
      regY: -8.1,
      scaleX: 1.062,
      skewY: 6.0835,
      x: -10.1,
      y: -8.15
    }, 4, cjs.Ease.quadInOut).to({
      regX: -10.2,
      regY: -8.2,
      scaleX: 1.0144,
      skewY: 9.6624,
      x: -10.2,
      y: -8.25
    }, 5, cjs.Ease.quadInOut).to({
      scaleX: .9945,
      skewY: -5.9057,
      x: -10.25,
      y: -8.2
    }, 3, cjs.Ease.quadInOut).to({scaleX: 1, skewY: 0, x: -10.2}, 3, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-13.2, -13.8, 27.9, 28.3),(lib.h_main1 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.h_main("synched", 0), this.instance.parent = this, this.instance.setTransform(2.9, -46.1, 1, 1, 0, 0, 0, 2.9, -46.1), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      regX: 2.8,
      regY: -46.2,
      scaleX: 1.0569,
      skewY: .3276,
      x: 2.8,
      y: -46.25
    }, 5, cjs.Ease.quadInOut).to({
      regY: -46.1,
      scaleX: 1.0268,
      skewY: -3.0035,
      y: -46.15
    }, 5, cjs.Ease.quadInOut).to({
      regX: 2.9,
      scaleX: .9679,
      skewY: -4.5201,
      x: 2.95,
      y: -46.1
    }, 5, cjs.Ease.quadInOut).to({
      regY: -46.3,
      scaleX: 1.0001,
      skewX: 1.7331,
      skewY: 2.2876,
      x: 3,
      y: -46.35
    }, 6, cjs.Ease.quadInOut).to({
      regY: -46.1,
      scaleX: .9692,
      skewX: 0,
      skewY: -2.0762,
      x: 2.9,
      y: -46.1
    }, 5, cjs.Ease.quadInOut).to({
      scaleX: 1.0481,
      skewY: -2.3571,
      x: 2.95,
      y: -46.15
    }, 8, cjs.Ease.quadInOut).to({
      regY: -46.2,
      scaleX: 1.0201,
      skewY: 2.9101,
      x: 2.9,
      y: -46.2
    }, 4, cjs.Ease.quadInOut).to({
      regY: -46.1,
      scaleX: 1.001,
      skewY: -2.5302,
      y: -46.15
    }, 6, cjs.Ease.quadInOut).to({
      regY: -46.2,
      scaleX: .9851,
      skewY: 3.1175,
      y: -46.2
    }, 4, cjs.Ease.quadInOut).to({regY: -46.1, scaleX: 1, skewY: 0, y: -46.1}, 7, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-90.5, -57.8, 180.8, 116.1),(lib.h_backi = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.h_back("synched", 0), this.instance.parent = this, this.instance.setTransform(-27.1, -5.3, 1, 1, 0, 0, 0, -27.1, -5.3), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      regY: -5.4,
      scaleX: 1.0154,
      skewY: -1.7327,
      y: -5.4
    }, 4, cjs.Ease.quadInOut).to({
      regY: -5.3,
      scaleX: 1.0002,
      skewX: 1.1838,
      skewY: 2.2016,
      x: -27.15
    }, 3, cjs.Ease.quadInOut).to({
      regY: -5.4,
      scaleX: .9832,
      skewX: 0,
      skewY: -2.5848,
      x: -27.1
    }, 7, cjs.Ease.quadInOut).to({
      regY: -5.3,
      scaleX: 1.0178,
      skewY: 0,
      x: -27.15,
      y: -5.3
    }, 5, cjs.Ease.quadInOut).to({scaleX: 1.0009, skewY: 2.4752, x: -27.1}, 3, cjs.Ease.quadInOut).to({
      scaleX: 1,
      scaleY: 1.0002,
      skewX: -1.1399,
      skewY: 0
    }, 5, cjs.Ease.quadInOut).to({
      scaleX: 1.0403,
      scaleY: 1,
      skewX: 0,
      x: -27.15
    }, 3, cjs.Ease.quadInOut).to({
      scaleX: 1.0165,
      skewY: 2.7214,
      x: -27.1,
      y: -5.35
    }, 4, cjs.Ease.quadInOut).to({
      regX: -27.2,
      regY: -5.4,
      scaleX: .9728,
      skewY: -2.0639,
      x: -27.25,
      y: -5.45
    }, 5, cjs.Ease.quadInOut).to({
      regX: -27.1,
      regY: -5.3,
      scaleX: 1.0182,
      skewY: 1.7329,
      x: -27.15,
      y: -5.35
    }, 5, cjs.Ease.quadInOut).to({scaleX: 1, skewY: 0, x: -27.1, y: -5.3}, 4, cjs.Ease.quadInOut).to({
      scaleX: 1.0005,
      skewY: -1.8703
    }, 5, cjs.Ease.quadInOut).to({scaleX: 1, skewY: 0}, 5, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-79, -47.6, 160.2, 95.6),(lib.h_1i = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.h_1("synched", 0), this.instance.parent = this, this.instance.setTransform(-29.6, -24.2, 1, 1, 0, 0, 0, -29.6, -24.2), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      scaleX: 1.0018,
      skewY: -3.4213,
      y: -24.25
    }, 3, cjs.Ease.quadInOut).to({skewY: 3.4683}, 3, cjs.Ease.quadInOut).to({
      scaleX: 1.0007,
      skewX: -1.9762,
      skewY: -4.1805,
      x: -29.65,
      y: -24.2
    }, 4, cjs.Ease.quadInOut).to({
      regX: -29.7,
      regY: -24.3,
      scaleX: 1.0033,
      skewX: 2.2378,
      skewY: -2.3858,
      x: -29.7,
      y: -24.3
    }, 4, cjs.Ease.quadInOut).to({
      regX: -29.6,
      regY: -24.2,
      scaleX: 1.0011,
      skewX: 0,
      skewY: -2.6724,
      x: -29.6,
      y: -24.2
    }, 4, cjs.Ease.quadInOut).to({skewY: 2.6724, y: -24.25}, 4, cjs.Ease.quadInOut).to({
      scaleX: 1.0004,
      skewY: -1.4545
    }, 3, cjs.Ease.quadInOut).to({scaleX: 1.0008, skewY: 2.2509, y: -24.2}, 4, cjs.Ease.quadInOut).to({
      scaleX: 1,
      skewY: 0
    }, 6, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-33.5, -31.4, 66.7, 62.099999999999994),(lib.flame_bg = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.flame_b("synched", 0), this.instance.parent = this, this.timeline.addTween(cjs.Tween.get(this.instance).to({
      scaleX: 1.0803,
      scaleY: 1.0001,
      skewX: 1.2266,
      skewY: 3.9445,
      x: 1.6,
      y: 1.2
    }, 5, cjs.Ease.quadInOut).to({scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, x: 0, y: 0}, 4, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-84.6, -80.1, 172.5, 162.7),(lib.fl_ss2 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.flame_fl("synched", 0), this.instance.parent = this, this.instance.setTransform(-46.7, -49.95, .9049, .9049), this.instance.alpha = .5586, this.timeline.addTween(cjs.Tween.get(this.instance).to({
      scaleX: 1.2388,
      scaleY: 1.2388,
      x: 70.05,
      y: 79.05,
      alpha: 0
    }, 7).to({_off: !0}, 1).wait(3))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-93.3, -100.6, 227.2, 249),(lib.fl_ss = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.flame_fl("synched", 0), this.instance.parent = this, this.instance.setTransform(-46.7, -49.95, .9049, .9049), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      scaleX: 1.2388,
      scaleY: 1.2388,
      x: 70.05,
      y: 79.05,
      alpha: 0
    }, 8).to({_off: !0}, 1).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-93.3, -100.6, 227.2, 249),(lib.daster = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.daster_in, this.instance.parent = this, this.instance.setTransform(-79.7, -62.3, 1, 1, 0, 0, 0, -79.7, -62.3), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      regY: -62.4,
      scaleX: 1.0144,
      skewY: -.9912,
      x: -79.75,
      y: -62.4
    }, 7, cjs.Ease.quadInOut).to({
      regY: -62.3,
      scaleX: 1.0007,
      scaleY: .9995,
      skewX: 1.0383,
      skewY: 2.1043,
      x: -79.7,
      y: -62.35
    }, 10, cjs.Ease.quadInOut).to({
      regY: -62.4,
      scaleX: 1.0001,
      scaleY: .9999,
      skewX: -1.038,
      skewY: -.9397,
      x: -79.75,
      y: -62.45
    }, 7, cjs.Ease.quadInOut).to({
      regY: -62.3,
      scaleX: .989,
      scaleY: 1,
      skewX: 0,
      skewY: 1.3022,
      x: -79.7,
      y: -62.35
    }, 8, cjs.Ease.quadInOut).to({
      scaleX: 1,
      scaleY: 1.0003,
      skewX: -1.236,
      skewY: 0,
      x: -79.75,
      y: -62.3
    }, 8, cjs.Ease.quadInOut).to({
      scaleX: 1.0002,
      scaleY: .9998,
      skewX: 1.0153,
      skewY: 1.1312,
      y: -62.35
    }, 6, cjs.Ease.quadInOut).to({
      scaleY: 1,
      skewX: 0,
      skewY: -.9738,
      x: -79.7
    }, 6, cjs.Ease.quadInOut).to({
      scaleX: .9857,
      scaleY: 1.0003,
      skewX: 1.4344,
      skewY: 0,
      x: -79.75,
      y: -62.3
    }, 6, cjs.Ease.quadInOut).to({
      scaleX: 1.0343,
      scaleY: 1,
      skewX: 0,
      skewY: 1.3044,
      x: -79.7,
      y: -62.35
    }, 9, cjs.Ease.quadInOut).to({
      regX: -79.8,
      scaleX: .9835,
      skewY: 1.804,
      x: -79.85,
      y: -62.3
    }, 6, cjs.Ease.quadInOut).to({regX: -79.7, scaleX: 1, skewY: 0, x: -79.7}, 8, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-88.2, -70.4, 178.8, 143.8),(lib.bulb_g = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.bulb("synched", 0), this.instance.parent = this, this.instance.setTransform(0, -.25, .2051, .2051, 0, 0, 0, 0, -.3), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      regY: -.1,
      scaleX: 1.427,
      scaleY: 1.4271,
      x: 49.65,
      y: 41.5
    }, 9, cjs.Ease.get(-1)).to({
      regX: .2,
      regY: 0,
      scaleX: 1.6711,
      scaleY: 1.6712,
      x: 66.35,
      y: 57.6
    }, 8, cjs.Ease.get(1)).to({
      regX: .4,
      regY: .2,
      scaleX: .2543,
      scaleY: .2543,
      x: 66.6,
      y: 57.9
    }, 7, cjs.Ease.get(-1)).to({_off: !0}, 1).wait(10).to({
      _off: !1,
      regX: 0,
      regY: -.3,
      scaleX: .2051,
      scaleY: .2051,
      x: 0,
      y: -.25
    }, 0).to({regY: -.1, scaleX: 1.427, scaleY: 1.4271, x: 49.65, y: 41.5}, 9, cjs.Ease.get(-1)).to({
      regX: .2,
      regY: 0,
      scaleX: 1.6711,
      scaleY: 1.6712,
      x: 66.35,
      y: 57.6
    }, 8, cjs.Ease.get(1)).to({
      regX: .4,
      regY: .2,
      scaleX: .2543,
      scaleY: .2543,
      x: 66.6,
      y: 57.9
    }, 7, cjs.Ease.get(-1)).to({_off: !0}, 1).wait(21).to({
      _off: !1,
      regX: 0,
      regY: -.3,
      scaleX: .2051,
      scaleY: .2051,
      x: 0,
      y: -.25
    }, 0).to({regY: -.1, scaleX: 1.427, scaleY: 1.4271, x: 49.65, y: 41.5}, 9, cjs.Ease.get(-1)).to({
      regX: .2,
      regY: 0,
      scaleX: 1.6711,
      scaleY: 1.6712,
      x: 66.35,
      y: 57.6
    }, 8, cjs.Ease.get(1)).to({
      regX: .4,
      regY: .2,
      scaleX: .2543,
      scaleY: .2543,
      x: 66.6,
      y: 57.9
    }, 7, cjs.Ease.get(-1)).to({_off: !0}, 1).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-3.3, -3.5, 96.89999999999999, 88.7),(lib.bag_all = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.br2("synched", 0), this.instance.parent = this, this.instance.setTransform(16.75, 49.7, 1, 1, 0, 0, 0, 41.4, 22.9), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      regX: 41.2,
      regY: 23.3,
      scaleX: .9973,
      skewX: -4.6554,
      skewY: -8.4756,
      x: 16.6,
      y: 38.75
    }, 7, cjs.Ease.quadInOut).to({
      regX: 41.3,
      regY: 22.9,
      scaleX: 1.0005,
      skewX: -1.1532,
      skewY: .7454,
      x: 16.7,
      y: 51.75
    }, 8, cjs.Ease.quadInOut).to({
      regX: 41.4,
      scaleX: 1.0004,
      skewX: -1.266,
      skewY: -2.9262,
      x: 16.8,
      y: 45.3
    }, 9, cjs.Ease.quadInOut).to({
      regX: 41.3,
      scaleX: 1.026,
      rotation: -2.1328,
      skewX: 0,
      skewY: 0,
      x: 19.6,
      y: 47.45
    }, 8, cjs.Ease.quadInOut).to({
      regX: 41.1,
      scaleX: .9156,
      scaleY: 1.001,
      rotation: 0,
      skewX: 2.1902,
      skewY: 1.9636,
      x: 6.5,
      y: 51.15
    }, 8, cjs.Ease.quadInOut).to({
      regX: 41.3,
      scaleX: 1.0144,
      scaleY: 1,
      skewX: 0,
      skewY: -2.6296,
      x: 16.05,
      y: 45.45
    }, 7, cjs.Ease.quadInOut).to({
      regX: 41.4,
      scaleX: 1,
      skewY: 0,
      x: 16.75,
      y: 49.7
    }, 7, cjs.Ease.quadInOut).wait(1)), this.instance_1 = new lib.br1("synched", 0), this.instance_1.parent = this, this.instance_1.setTransform(-93.95, -70.4, 1, 1, 0, 0, 0, -74.6, -33.6), this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
      scaleX: 1.0022,
      skewY: -3.821,
      y: -69.9
    }, 7, cjs.Ease.quadInOut).to({scaleX: 1.0005, skewY: 1.9008, y: -70.6}, 8, cjs.Ease.quadInOut).to({
      scaleX: 1.0004,
      skewY: -1.6606,
      y: -70.15
    }, 9, cjs.Ease.quadInOut).to({scaleX: 1.026, skewY: 0, x: -94.05, y: -70.4}, 8, cjs.Ease.quadInOut).to({
      regX: -74.7,
      scaleX: .9167,
      skewY: 1.1073,
      x: -93.4,
      y: -70.6
    }, 8, cjs.Ease.quadInOut).to({
      regX: -74.6,
      scaleX: 1.0138,
      skewY: -1.7922,
      x: -94.05,
      y: -70.1
    }, 7, cjs.Ease.quadInOut).to({
      scaleX: 1,
      skewY: 0,
      x: -93.95,
      y: -70.4
    }, 7, cjs.Ease.quadInOut).wait(1)), this.instance_2 = new lib.bag("synched", 0), this.instance_2.parent = this, this.instance_2.setTransform(57.25, -2.6, 1, 1, 0, 0, 0, 1.4, -34.9), this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
      regX: 1.5,
      regY: -34.8,
      scaleX: 1.0022,
      scaleY: .9982,
      y: -12.2
    }, 7, cjs.Ease.quadInOut).to({scaleX: 1.0008, scaleY: 1, x: 57.3, y: 1.45}, 8, cjs.Ease.quadInOut).to({
      regX: 1.4,
      scaleX: 1.0004,
      x: 57.25,
      y: -6.5
    }, 9, cjs.Ease.quadInOut).to({
      scaleX: .9636,
      rotation: 1.9509,
      x: 61.15,
      y: -2.55
    }, 8, cjs.Ease.quadInOut).to({
      regX: 1.6,
      regY: -34.7,
      scaleX: .9694,
      rotation: 0,
      x: 45.25,
      y: .55
    }, 8, cjs.Ease.quadInOut).to({regY: -34.8, scaleX: 1.0138, x: 59.25, y: -7.1}, 7, cjs.Ease.quadInOut).to({
      regX: 1.4,
      regY: -34.9,
      scaleX: 1,
      x: 57.25,
      y: -2.6
    }, 7, cjs.Ease.quadInOut).wait(1)), this.instance_3 = new lib.b_sh("synched", 0), this.instance_3.parent = this, this.instance_3.setTransform(-87.45, -64.3, 1, 1, 0, 0, 0, -43.3, -37.1), this.timeline.addTween(cjs.Tween.get(this.instance_3).to({
      scaleX: 1.0009,
      skewY: -2.4884
    }, 7, cjs.Ease.quadInOut).to({scaleX: 1.0001, skewY: -.862, y: -64.35}, 8, cjs.Ease.quadInOut).to({
      scaleX: 1.0252,
      skewY: -1.0208,
      x: -87.5,
      y: -64.3
    }, 9, cjs.Ease.quadInOut).to({scaleX: 1, skewY: 0, x: -87.45}, 8, cjs.Ease.quadInOut).to({
      regX: -43.5,
      scaleX: .8933,
      skewY: -4.0572,
      x: -87.6
    }, 8, cjs.Ease.quadInOut).to({
      regX: -43.4,
      regY: -37.2,
      scaleX: 1.0613,
      skewY: -.1928,
      y: -64.4
    }, 7, cjs.Ease.quadInOut).to({
      regX: -43.3,
      regY: -37.1,
      scaleX: 1,
      skewY: 0,
      x: -87.45,
      y: -64.3
    }, 7, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-97, -82.4, 196.4, 159.2),(lib.arm11 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket_arm1_1, this.instance.parent = this, this.instance.setTransform(-48.5, -62.5), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1)), this.instance_1 = new lib.paper, this.instance_1.parent = this, this.instance_1.setTransform(-32.15, -73.1, .934, 1.3025, 0, -5.4382, -8.7457, -.4, 0), this.shape = new cjs.Shape, this.shape.graphics.f().s("#00A1F1").ss(1, 1, 1).p("AgFgSIAMAlQgCgBgCAA"), this.shape.setTransform(-14.55, -45.5), this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}, {t: this.instance_1}]}).wait(1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#EEF8FA").s().p("AgVCYIgnheQglhkgGg/QgGg+A6AAQATAAAWAGIASAHQAVAZAXAqQAtBTAHBTQAIBUg8AEIgCABQgQAAg3gQg"), this.shape_1.setTransform(-26.5109, -56.6973), this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1))
  }).prototype = getMCSymbolPrototype(lib.arm11, new cjs.Rectangle(-54.8, -125, 103.3, 187.5), null),(lib.smoke2 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.sm1, this.instance.parent = this, this.instance.setTransform(80.5, -47.15), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1)), this.instance_1 = new lib.sm2, this.instance_1.parent = this, this.instance_1.setTransform(-29.5, 3.7), this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1)), this.instance_2 = new lib.sm3, this.instance_2.parent = this, this.instance_2.setTransform(63, 57.85), this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-143, -111.2, 276.1, 225.9),(lib.head = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.h_ti, this.instance.parent = this, this.instance.setTransform(-15.8, 9), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1)), this.instance_1 = new lib.face("synched", 0), this.instance_1.parent = this, this.instance_1.setTransform(-51, 64.85, 1, 1, 0, 0, 0, -1.6, 52.9), this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1)), this.instance_2 = new lib.h_main1, this.instance_2.parent = this, this.instance_2.setTransform(.55, -50, 1, 1, 0, 0, 0, -.3, -47.5), this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1)), this.instance_3 = new lib.h_backi, this.instance_3.parent = this, this.instance_3.setTransform(-33.85, 13.2, 1, 1, 0, 0, 0, -26.2, -4.8), this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1)), this.instance_4 = new lib.h_topi, this.instance_4.parent = this, this.instance_4.setTransform(-77.25, -41.1, 1, 1, 0, 0, 0, -49.1, -15.6), this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1)), this.instance_5 = new lib.h_1i, this.instance_5.parent = this, this.instance_5.setTransform(-34.75, 20.7, 1, 1, 0, 0, 0, -28.6, -21.3), this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1)), this.shape = new cjs.Shape, this.shape.graphics.f("#E6B834").s().p("AjuDjQhjheAAiFQAAiEBjhfQBjhdCLAAQCMAABjBdQBjBfAACEQAACFhjBeQhjBeiMAAQiLAAhjheg"), this.shape.setTransform(-8.8, -4.7), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-86.4, -72, 172.8, 144), null),(lib.flame = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.fl_ss2, this.instance.parent = this, this.instance.setTransform(-9, 3.5), this.instance.alpha = .4688, this.timeline.addTween(cjs.Tween.get(this.instance).wait(1)), this.instance_1 = new lib.fl_ss, this.instance_1.parent = this, this.instance_1.setTransform(-9, 3.5), this.instance_1.alpha = .4688, this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1)), this.instance_2 = new lib.flame_bg, this.instance_2.parent = this, this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1))
  }).prototype = getMCSymbolPrototype(lib.flame, new cjs.Rectangle(-102.3, -97.1, 180.8, 172.6), null),(lib.flamer = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.bulb_g("synched", 0, !1), this.instance.parent = this, this.instance.setTransform(-21.05, -182.95, .824, .824, 0, 0, 0, -.1, -97.5), this.instance._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off: !1}, 0).wait(208)), this.instance_1 = new lib.bulb_g("synched", 0, !1), this.instance_1.parent = this, this.instance_1.setTransform(-94.05, -172.1, .92, .92, 0, 0, 0, -.1, -97.7), this.instance_1._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off: !1}, 0).wait(124)), this.instance_2 = new lib.bulb_g("synched", 0, !1), this.instance_2.parent = this, this.instance_2.setTransform(2.65, -159.25, .5281, .5281, 0, 0, 0, -.1, -97.5), this.instance_2._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off: !1}, 0).wait(134)), this.instance_3 = new lib.bulb_g("synched", 0, !1), this.instance_3.parent = this, this.instance_3.setTransform(44, -158.1, .4204, .4204, 0, 0, 0, 0, -97.5), this.instance_3._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off: !1}, 0).wait(202)), this.instance_4 = new lib.bulb_g("synched", 0, !1), this.instance_4.parent = this, this.instance_4.setTransform(-2.55, -40.5, .5281, .5281, 0, 0, 0, -.1, -97.5), this.instance_4._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56).to({_off: !1}, 0).wait(166)), this.instance_5 = new lib.bulb_g("synched", 0, !1), this.instance_5.parent = this, this.instance_5.setTransform(44.25, -115.85, .3563, .3563, 0, 0, 0, 0, -97.4), this.instance_5._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off: !1}, 0).wait(193)), this.instance_6 = new lib.bulb_g("synched", 0, !1), this.instance_6.parent = this, this.instance_6.setTransform(13.9, -203, .5281, .5281, 0, 0, 0, -.1, -97.5), this.instance_6._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(116).to({_off: !1}, 0).wait(106)), this.instance_7 = new lib.bulb_g("synched", 0, !1), this.instance_7.parent = this, this.instance_7.setTransform(-50.35, -186.45, .4291, .4291, 0, 0, 0, 0, -97.5), this.instance_7._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(103).to({_off: !1}, 0).wait(119)), this.instance_8 = new lib.bulb_g("synched", 0, !1), this.instance_8.parent = this, this.instance_8.setTransform(-43.45, -143.75, .5281, .5281, 0, 0, 0, -.1, -97.5), this.instance_8._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({_off: !1}, 0).wait(181)), this.instance_9 = new lib.bulb_g("synched", 0, !1), this.instance_9.parent = this, this.instance_9.setTransform(-169.1, -57.5, .342, .342, 0, 0, 0, -.1, -97.5), this.instance_9._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76).to({_off: !1}, 0).wait(146)), this.instance_10 = new lib.bulb_g("synched", 0, !1), this.instance_10.parent = this, this.instance_10.setTransform(-200.9, -49.15, .9211, .9211, 0, 0, 0, -.2, -97.4), this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(222)), this.instance_11 = new lib.bulb_g("synched", 0, !1), this.instance_11.parent = this, this.instance_11.setTransform(-131, -97.6, .5281, .5281, 0, 0, 0, -.1, -97.5), this.instance_11._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off: !1}, 0).wait(173)), this.instance_12 = new lib.bulb_g("synched", 0, !1), this.instance_12.parent = this, this.instance_12.setTransform(-10.6, -157.25, .824, .824, 0, 0, 0, -.1, -97.5), this.instance_12._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(63).to({_off: !1}, 0).wait(159)), this.instance_13 = new lib.bulb_g("synched", 0, !1), this.instance_13.parent = this, this.instance_13.setTransform(-85.15, -121.75, .92, .92, 0, 0, 0, -.1, -97.7), this.instance_13._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({_off: !1}, 0).wait(195)), this.instance_14 = new lib.bulb_g("synched", 0, !1), this.instance_14.parent = this, this.instance_14.setTransform(-2.35, -134.25, .5281, .5281, 0, 0, 0, -.1, -97.5), this.instance_14._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(16).to({_off: !1}, 0).wait(206)), this.instance_15 = new lib.bulb_g("synched", 0, !1), this.instance_15.parent = this, this.instance_15.setTransform(39, -133.1, .4204, .4204, 0, 0, 0, 0, -97.5), this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(222)), this.instance_16 = new lib.bulb_g("synched", 0, !1), this.instance_16.parent = this, this.instance_16.setTransform(-7.55, -15.5, .5281, .5281, 0, 0, 0, -.1, -97.5), this.instance_16._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({_off: !1}, 0).wait(212)), this.instance_17 = new lib.bulb_g("synched", 0, !1), this.instance_17.parent = this, this.instance_17.setTransform(39.25, -90.85, .3563, .3563, 0, 0, 0, 0, -97.4), this.instance_17._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(71).to({_off: !1}, 0).wait(151)), this.instance_18 = new lib.bulb_g("synched", 0, !1), this.instance_18.parent = this, this.instance_18.setTransform(8.9, -178, .5281, .5281, 0, 0, 0, -.1, -97.5), this.instance_18._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(16).to({_off: !1}, 0).wait(206)), this.instance_19 = new lib.bulb_g("synched", 0, !1), this.instance_19.parent = this, this.instance_19.setTransform(-55.35, -161.45, .4291, .4291, 0, 0, 0, 0, -97.5), this.instance_19._off = !0, this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(33).to({_off: !1}, 0).wait(189)), this.instance_20 = new lib.bulb_g("synched", 0, !1), this.instance_20.parent = this,this.instance_20.setTransform(-48.45, -118.75, .5281, .5281, 0, 0, 0, -.1, -97.5),this.instance_20._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(81).to({_off: !1}, 0).wait(141)),this.instance_21 = new lib.bulb_g("synched", 0, !1),this.instance_21.parent = this,this.instance_21.setTransform(-174.1, -32.5, .342, .342, 0, 0, 0, -.1, -97.5),this.instance_21._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(19).to({_off: !1}, 0).wait(203)),this.instance_22 = new lib.bulb_g("synched", 0, !1),this.instance_22.parent = this,this.instance_22.setTransform(-79, -14.6, .5281, .5281, 0, 0, 0, -.1, -97.5),this.instance_22._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(14).to({_off: !1}, 0).to({_off: !0}, 22).wait(186)),this.instance_23 = new lib.smoke2("synched", 0),this.instance_23.parent = this,this.instance_23.setTransform(24.5, 34.3),this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(222)),this.instance_24 = new lib.flame,this.instance_24.parent = this,this.instance_24.setTransform(-89, -73.5),this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(222)),this.instance_25 = new lib.smb,this.instance_25.parent = this,this.instance_25.setTransform(-14.9, 28.2),this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(222)),this.instance_26 = new lib.bulb_g("synched", 0, !1),this.instance_26.parent = this,this.instance_26.setTransform(-31.8, -180.2, .809, .809, 0, 0, 0, -.1, -97.6),this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(222)),this.instance_27 = new lib.bulb_g("synched", 0, !1),this.instance_27.parent = this,this.instance_27.setTransform(-103.45, -169.55, .9032, .9032, 0, 0, 0, -.1, -97.8),this.instance_27._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(18).to({_off: !1}, 0).wait(204)),this.instance_28 = new lib.bulb_g("synched", 0, !1),this.instance_28.parent = this,this.instance_28.setTransform(-8.55, -156.9, .5185, .5185, 0, 0, 0, -.1, -97.6),this.instance_28._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(27).to({_off: !1}, 0).wait(195)),this.instance_29 = new lib.bulb_g("synched", 0, !1),this.instance_29.parent = this,this.instance_29.setTransform(32.05, -155.75, .4127, .4127, 0, 0, 0, .1, -97.5),this.instance_29._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(7).to({_off: !1}, 0).wait(215)),this.instance_30 = new lib.bulb_g("synched", 0, !1),this.instance_30.parent = this,this.instance_30.setTransform(-13.65, -40.3, .5185, .5185, 0, 0, 0, -.1, -97.4),this.instance_30._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(11).to({_off: !1}, 0).wait(24).to({
      regX: .1,
      regY: -97.5,
      scaleX: .3498,
      scaleY: .3498,
      x: 32.3,
      y: -114.3
    }, 0).wait(187)),this.instance_31 = new lib.bulb_g("synched", 0, !1),this.instance_31.parent = this,this.instance_31.setTransform(2.5, -199.85, .5185, .5185, 0, 0, 0, 0, -97.6),this.instance_31._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(6).to({_off: !1}, 0).to({_off: !0}, 167).wait(49)),this.instance_32 = new lib.bulb_g("synched", 0, !1),this.instance_32.parent = this,this.instance_32.setTransform(-60.6, -183.55, .4213, .4213, 0, 0, 0, -.1, -97.5),this.instance_32._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(9).to({_off: !1}, 0).to({_off: !0}, 164).wait(49)),this.instance_33 = new lib.bulb_g("synched", 0, !1),this.instance_33.parent = this,this.instance_33.setTransform(-53.8, -141.65, .5185, .5185, 0, 0, 0, -.1, -97.5),this.instance_33._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(15).to({_off: !1}, 0).to({_off: !0}, 158).wait(49)),this.instance_34 = new lib.bulb_g("synched", 0, !1),this.instance_34.parent = this,this.instance_34.setTransform(-177.15, -57, .3358, .3358, 0, 0, 0, -.1, -97.5),this.instance_34._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(33).to({_off: !1}, 0).to({_off: !0}, 140).wait(49)),this.instance_35 = new lib.bulb_g("synched", 0, !1),this.instance_35.parent = this,this.instance_35.setTransform(-140.1, -28.05, .9042, .9042, 0, 0, 0, -.2, -97.3),this.instance_35._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(6).to({_off: !1}, 0).to({_off: !0}, 167).wait(49)),this.instance_36 = new lib.bulb_g("synched", 0, !1),this.instance_36.parent = this,this.instance_36.setTransform(-139.75, -96.35, .5185, .5185, 0, 0, 0, -.1, -97.5),this.instance_36._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(22).to({_off: !1}, 0).to({_off: !0}, 151).wait(49)),this.instance_37 = new lib.bulb_g("synched", 0, !1),this.instance_37.parent = this,this.instance_37.setTransform(-21.55, -155.05, .809, .809, 0, 0, 0, -.1, -97.7),this.instance_37._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(46).to({_off: !1}, 0).to({_off: !0}, 127).wait(49)),this.instance_38 = new lib.bulb_g("synched", 0, !1),this.instance_38.parent = this,this.instance_38.setTransform(-94.7, -120.15, .9032, .9032, 0, 0, 0, -.1, -97.8),this.instance_38._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(16).to({_off: !1}, 0).to({_off: !0}, 157).wait(49)),this.instance_39 = new lib.bulb_g("synched", 0, !1),this.instance_39.parent = this,this.instance_39.setTransform(-13.45, -132.35, .5185, .5185, 0, 0, 0, -.1, -97.6),this.instance_39._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(27).to({_off: !1}, 0).to({_off: !0}, 146).wait(49)),this.instance_40 = new lib.bulb_g("synched", 0, !1),this.instance_40.parent = this,this.instance_40.setTransform(27.15, -131.2, .4127, .4127, 0, 0, 0, .1, -97.5),this.instance_40._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(38).to({_off: !1}, 0).to({_off: !0}, 135).wait(49)),this.instance_41 = new lib.bulb_g("synched", 0, !1),this.instance_41.parent = this,this.instance_41.setTransform(-18.55, -15.75, .5185, .5185, 0, 0, 0, -.1, -97.4),this.instance_41._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(10).to({_off: !1}, 0).to({_off: !0}, 163).wait(49)),this.instance_42 = new lib.bulb_g("synched", 0, !1),this.instance_42.parent = this,this.instance_42.setTransform(27.4, -89.75, .3498, .3498, 0, 0, 0, .1, -97.5),this.instance_42._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(37).to({_off: !1}, 0).to({_off: !0}, 136).wait(49)),this.instance_43 = new lib.bulb_g("synched", 0, !1),this.instance_43.parent = this,this.instance_43.setTransform(-2.4, -175.3, .5185, .5185, 0, 0, 0, 0, -97.6),this.instance_43._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(19).to({_off: !1}, 0).to({_off: !0}, 154).wait(49)),this.instance_44 = new lib.bulb_g("synched", 0, !1),this.instance_44.parent = this,this.instance_44.setTransform(-65.5, -159, .4213, .4213, 0, 0, 0, -.1, -97.5),this.instance_44._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(31).to({_off: !1}, 0).to({_off: !0}, 142).wait(49)),this.instance_45 = new lib.bulb_g("synched", 0, !1),this.instance_45.parent = this,this.instance_45.setTransform(-58.7, -117.15, .5185, .5185, 0, 0, 0, -.1, -97.6),this.instance_45._off = !0,this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(10).to({_off: !1}, 0).to({_off: !0}, 163).wait(49)),this.instance_46 = new lib.bulb_g("synched", 0, !1),this.instance_46.parent = this,this.instance_46.setTransform(-182.05, -32.45, .3358, .3358, 0, 0, 0, -.1, -97.4),this.timeline.addTween(cjs.Tween.get(this.instance_46).to({_off: !0}, 173).wait(49))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-203.8, -170.6, 361.4, 319.6),(lib.rocket = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rukav("synched", 0), this.instance.parent = this, this.instance.setTransform(-74.5, -134.15), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1)), this.instance_1 = new lib.bag_all, this.instance_1.parent = this, this.instance_1.setTransform(-87.55, -179.5, 1, 1, 0, 0, 0, -92.2, -69.2), this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1)), this.instance_2 = new lib.neck("synched", 0), this.instance_2.parent = this, this.instance_2.setTransform(-110.4, -176.7), this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1)), this.instance_3 = new lib.head, this.instance_3.parent = this, this.instance_3.setTransform(-113.45, -172.3, 1, 1, 0, 0, 0, -50.1, 63.7), this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1)), this.instance_4 = new lib.daster, this.instance_4.parent = this, this.instance_4.setTransform(-88.6, -180.35, 1.0037, 1, 0, 0, -4.9335, -76.6, -60.8), this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1)), this.instance_5 = new lib.body("synched", 0), this.instance_5.parent = this, this.instance_5.setTransform(-113.3, -27.1, 1, 1, 0, 0, 0, -36.5, 11.6), this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1)), this.instance_6 = new lib.leg("synched", 0), this.instance_6.parent = this, this.instance_6.setTransform(-144.45, -8, 1, 1, 0, 0, 0, -25, -64), this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1)), this.instance_7 = new lib.arm11, this.instance_7.parent = this, this.instance_7.setTransform(-178.5, -149, 1, 1, 0, 0, 0, 35.2, 49.3), this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1)), this.instance_8 = new lib.arm12("synched", 0), this.instance_8.parent = this, this.instance_8.setTransform(-119.8, -158.95, 1, 1, 0, 0, 0, 30.9, -6.4), this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1)), this.instance_9 = new lib.flamer, this.instance_9.parent = this, this.instance_9.setTransform(111.5, 184), this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1))
  }).prototype = getMCSymbolPrototype(lib.rocket, new cjs.Rectangle(-268.5, -323.3, 537.6, 656.3), null),(lib.roket_dr = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocket, this.instance.parent = this, this.instance.setTransform(-18.6, -17.85), this.timeline.addTween(cjs.Tween.get(this.instance).to({
      x: -6.6,
      y: -11.5
    }, 11, cjs.Ease.quadInOut).to({x: -3.7, y: -3.05}, 8, cjs.Ease.quadInOut).to({
      x: 1.35,
      y: .95
    }, 7, cjs.Ease.quadInOut).wait(1).to({regX: 5.4, regY: 7.3, x: 3.6, y: 5.3}, 0).wait(1).to({
      x: -.6,
      y: 1.35
    }, 0).wait(1).to({x: -4.95, y: -2.75}, 0).wait(1).to({x: -8.6, y: -6.2}, 0).wait(1).to({
      x: -11.1,
      y: -8.6
    }, 0).wait(1).to({x: -12.6, y: -9.95}, 0).wait(1).to({regX: 0, regY: 0, x: -18.6, y: -17.85}, 0).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-287.1, -341.1, 557.5, 675.1),(lib.rocketer = function (e, t, s) {
    this.initialize(e, t, s, {}), this.frame_275 = function () {
      this.gotoAndPlay(11)
    }, this.timeline.addTween(cjs.Tween.get(this).wait(275).call(this.frame_275).wait(1)), this.instance = new lib.roket_dr, this.instance.parent = this, this.instance.setTransform(39.85, 27), this.instance.alpha = 0, this.timeline.addTween(cjs.Tween.get(this.instance).to({
      x: 5.45,
      y: 8.45,
      alpha: 1
    }, 10, cjs.Ease.quadInOut).to({x: 23.4, y: 20.65}, 46, cjs.Ease.quadInOut).to({
      rotation: -2.4924,
      y: -5.45
    }, 76, cjs.Ease.quadInOut).to({rotation: 1.2398, x: -2.7, y: -13.5}, 86, cjs.Ease.quadInOut).to({
      rotation: 0,
      x: 5.45,
      y: 8.45
    }, 57, cjs.Ease.quadInOut).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(-283.4, -360, 573.7, 702.2),(lib.Main = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.rocketer, this.instance.parent = this, this.instance.setTransform(109.25, 126.75, .34, .34), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Main, new cjs.Rectangle(25.1, 19.8, 182.70000000000002, 223.2), null),(lib.Монтажный_кадр_1_Слой_1 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.instance = new lib.Main, this.instance.parent = this, this.instance.setTransform(150, 300, 1, 1, 0, 0, 0, 150, 300), this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Монтажный_кадр_1_Слой_1, null, null),(lib.banner_220x250 = function (e, t, s) {
    this.initialize(e, t, s, {}), this.___GetDepth___ = function (e) {
      var t = e.depth, s = this.___camera___instance;
      return s && s.depth && e.isAttachedToCamera && (t += t + s.depth), t
    }, this.___needSorting___ = function () {
      for (var e = 0; e < this.getNumChildren() - 1; e++) {
        if (this.___GetDepth___(this.getChildAt(e)) < this.___GetDepth___(this.getChildAt(e + 1)))return !0
      }
      return !1
    }, this.___sortFunction___ = function (e, t) {
      return this.exportRoot.___GetDepth___(t) - this.exportRoot.___GetDepth___(e)
    }, this.on("tick", function (e) {
      var t = e.currentTarget;
      t.___needSorting___() && this.sortChildren(t.___sortFunction___)
    }), this.Слой_1 = new lib.Монтажный_кадр_1_Слой_1, this.Слой_1.name = "Слой_1", this.Слой_1.parent = this, this.Слой_1.setTransform(116.5, 160, 1, 1, 0, 0, 0, 116.5, 160), this.Слой_1.depth = 0, this.Слой_1.isAttachedToCamera = 0, this.Слой_1.isAttachedToMask = 0, this.Слой_1.layerDepth = 0, this.Слой_1.layerIndex = 0, this.Слой_1.maskLayerName = 0, this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1))
  }).prototype = p = new cjs.MovieClip,p.nominalBounds = new cjs.Rectangle(135.1, 144.8, 72.70000000000002, 98.19999999999999),lib.properties = {
    id: "3446CFD6F5D2F74397BB20AD98599894",
    width: 220,
    height: 250,
    fps: 31,
    color: "#00A1F1",
    opacity: 1,
    manifest: [{
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_arm1_1.png",
      id: "rocket_arm1_1"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_arm1_2.png",
      id: "rocket_arm1_2"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_bag_1.png",
      id: "rocket_bag_1"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_bag_2.png",
      id: "rocket_bag_2"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_bag_bag.png",
      id: "rocket_bag_bag"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_bag_sh.png",
      id: "rocket_bag_sh"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_body.png",
      id: "rocket_body"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_cloud_1.png",
      id: "rocket_cloud_1"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_cloud_2.png",
      id: "rocket_cloud_2"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_cloud_3.png",
      id: "rocket_cloud_3"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_cloud_4.png",
      id: "rocket_cloud_4"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_cloud_bulb.png",
      id: "rocket_cloud_bulb"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_daster.png",
      id: "rocket_daster"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_flame_1.png",
      id: "rocket_flame_1"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_flame_2.png",
      id: "rocket_flame_2"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_hand_top.png",
      id: "rocket_hand_top"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_head_1.png",
      id: "rocket_head_1"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_head_back.png",
      id: "rocket_head_back"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_head_bottom.png",
      id: "rocket_head_bottom"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_head_face.png",
      id: "rocket_head_face"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_head_main.png",
      id: "rocket_head_main"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_head_top.png",
      id: "rocket_head_top"
    }, {
      src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_leg.png",
      id: "rocket_leg"
    }, {src: host + "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/rocket/images/rocket_neck.png", id: "rocket_neck"}],
    preloads: []
  },(lib.Stage = function (e) {
    createjs.Stage.call(this, e)
  }).prototype = p = new createjs.Stage,p.setAutoPlay = function (e) {
    this.tickEnabled = e
  },p.play = function () {
    this.tickEnabled = !0, this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
  },p.stop = function (e) {
    e && this.seek(e), this.tickEnabled = !1
  },p.seek = function (e) {
    this.tickEnabled = !0, this.getChildAt(0).gotoAndStop(lib.properties.fps * e / 1e3)
  },p.getDuration = function () {
    return this.getChildAt(0).totalFrames / lib.properties.fps * 1e3
  },p.getTimelinePosition = function () {
    return this.getChildAt(0).currentFrame / lib.properties.fps * 1e3
  },an.bootcompsLoaded = an.bootcompsLoaded || [],an.bootstrapListeners || (an.bootstrapListeners = []),an.bootstrapCallback = function (e) {
    if (an.bootstrapListeners.push(e), an.bootcompsLoaded.length > 0)for (var t = 0; t < an.bootcompsLoaded.length; ++t)e(an.bootcompsLoaded[t])
  },an.compositions = an.compositions || {},an.compositions["3446CFD6F5D2F74397BB20AD98599894"] = {
    getStage: function () {
      return exportRoot.getStage()
    }, getLibrary: function () {
      return lib
    }, getSpriteSheet: function () {
      return ss
    }, getImages: function () {
      return img
    }
  },an.compositionLoaded = function (e) {
    an.bootcompsLoaded.push(e);
    for (var t = 0; t < an.bootstrapListeners.length; t++)an.bootstrapListeners[t](e)
  },an.getComposition = function (e) {
    return an.compositions[e]
  },AdobeAn.Layer = new function () {
    this.getLayerZDepth = function (timeline, layerName) {
      "Camera" === layerName && (layerName = "___camera___instance");
      var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
      return eval(script)
    }, this.setLayerZDepth = function (timeline, layerName, zDepth) {
      const MAX_zDepth = 1e4, MIN_zDepth = -5e3;
      zDepth > MAX_zDepth ? zDepth = MAX_zDepth : zDepth < MIN_zDepth && (zDepth = MIN_zDepth), "Camera" === layerName && (layerName = "___camera___instance");
      var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
      eval(script)
    }, this.removeLayer = function (timeline, layerName) {
      "Camera" === layerName && (layerName = "___camera___instance");
      var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
      eval(script)
    }, this.addNewLayer = function (e, t, s) {
      "Camera" === t && (t = "___camera___instance"), s = void 0 !== s ? s : 0;
      var i = new createjs.MovieClip;
      i.name = t, i.depth = s, i.layerIndex = 0, e.addChild(i)
    }
  }
}(createjs = createjs || {}, AdobeAn = AdobeAn || {});