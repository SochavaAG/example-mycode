/*var agObject = {
  initialWidth: 0,
  initialHeight: 0,
  maskDOM: null,
  svgDOM: null,
  loaded: false,
  scaleX: 1,
  scaleY: 1,
  appearTimeout: null,
  hideTimeout: null,
  length: 0,
  path: "M0 0"
};*/

function onLoad () {
  var t = this;

  console.log(t);

  //t.$emit("loaded");


/*  agIconSVG = $('.js-icon_invest-path');

  console.log(agIconSVG);

  agMaskSVG = $('[class*=drawer-mask]');

  console.log(agMaskSVG);

  agPathSVG = agMaskSVG.attr('d');

  console.log(agPathSVG);*/


//var e = Object(a["a"])(t.$el.children, 1);

  agIconSVG = $('.js-icon_invest-path');

  t.svgDOM = agIconSVG[0];
  t.maskDOM = t.svgDOM.querySelector("[class*=drawer-mask]");
  t.initialWidth = t.svgDOM.width.baseVal.value;
  t.initialHeight = t.svgDOM.height.baseVal.value;

  console.log(t.maskDOM);

  var agIconSVGItem = t.svgDOM.getBoundingClientRect();

  t.scaleX = agIconSVGItem.width / t.initialWidth;
  t.scaleY = agIconSVGItem.height / t.initialHeight;
  t.path = t.maskDOM.getAttribute("d");
  t.maskDOM.style.willChange = "stroke-dashoffset";
  t.maskDOM.style.strokeDasharray = t.length / t.coefficient;
  t.maskDOM.style.strokeDashoffset = t.length * t.coefficient;
}

onLoad();