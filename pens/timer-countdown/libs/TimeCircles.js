(function($){var debug=(location.hash==='#debug');function debug_log(msg){if(debug){console.log(msg)}}var allUnits=['Days','Hours','Minutes','Seconds'];var nextUnits={Seconds:'Minutes',Minutes:'Hours',Hours:'Days',Days:'Years'};var secondsIn={Seconds:1,Minutes:60,Hours:3600,Days:86400,Years:31536000};function hexToRgb(hex){var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null}function s4(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1)}function guid(){return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4()}function parse_date(str){var match=str.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);if(match!==null&&match.length>0){var parts=str.split(' ');var date=parts[0].split('-');var time=parts[1].split(':');return new Date(date[0],date[1]-1,date[2],time[0],time[1],time[2])}var d=Date.parse(str);if(!isNaN(d))return d;d=Date.parse(str.replace(/-/g,'/').replace('T',' '));if(!isNaN(d))return d;return new Date()}function parse_times(diff,old_diff,super_unit,units){var raw_time={};var raw_old_time={};var time={};var pct={};var old_time={};var greater_unit=null;for(var i in units){var unit=units[i];if(greater_unit===null)greater_unit=super_unit;var maxUnits=secondsIn[greater_unit]/secondsIn[unit];var curUnits=(diff/secondsIn[unit]);var oldUnits=(old_diff/secondsIn[unit]);if(unit!=='Days'){curUnits=curUnits%maxUnits;oldUnits=oldUnits%maxUnits}raw_time[unit]=curUnits;time[unit]=Math.abs(curUnits);raw_old_time[unit]=oldUnits;old_time[unit]=Math.abs(oldUnits);pct[unit]=Math.abs(curUnits)/maxUnits;greater_unit=unit}return{raw_time:raw_time,raw_old_time:raw_old_time,time:time,old_time:old_time,pct:pct}}var TC_Instance_List={};if(window!==window.top&&typeof window.top.TC_Instance_List!=='undefined'){TC_Instance_List=window.top.TC_Instance_List}else{window.top.TC_Instance_List=TC_Instance_List}var TC_Instance=function(element,options){this.element=element;this.container;this.timer=null;this.listeners=null;this.data={prev_time:null,drawn_units:[],super_unit:null,text_elements:{Days:null,Hours:null,Minutes:null,Seconds:null},attributes:{canvas:null,context:null,item_size:null,line_width:null,radius:null,outer_radius:null},state:{fading:{Days:false,Hours:false,Minutes:false,Seconds:false}}};this.config=null;this.setOptions(options);this.initialize()};TC_Instance.prototype.initialize=function(clear_listeners){this.data.super_unit=null;this.data.drawn_units=[];for(var unit in this.config.time){if(this.data.super_unit===null)this.data.super_unit=nextUnits[unit];if(this.config.time[unit].show){this.data.drawn_units.push(unit)}}

  $(this.element).children('div.js-ag-timer-block').remove();
  if (typeof clear_listeners === 'undefined') clear_listeners = true;
  if (clear_listeners || this.listeners === null) {
    this.listeners = {all: [], visible: []}
  }
  this.container = $('<div>');
  this.container.addClass('js-ag-timer-block');
  this.container.appendTo(this.element);
  this.data.attributes.canvas = $('<canvas>');
  this.data.attributes.context = this.data.attributes.canvas[0].getContext('2d');
  var height = this.element.offsetHeight;
  var width = this.element.offsetWidth;
  if (height === 0) height = $(this.element).height();
  if (width === 0) width = $(this.element).width();
  if (height === 0 && width > 0) height = width / this.data.drawn_units.length; else if (width === 0 && height > 0) width = height * this.data.drawn_units.length;
  this.data.attributes.canvas[0].height = height;
  this.data.attributes.canvas[0].width = width;
  this.data.attributes.canvas.appendTo(this.container);
  this.data.attributes.item_size = Math.min(this.data.attributes.canvas[0].width / this.data.drawn_units.length, this.data.attributes.canvas[0].height);
  this.data.attributes.line_width = this.data.attributes.item_size * this.config.fg_width;
  this.data.attributes.radius = ((this.data.attributes.item_size * 0.8) - this.data.attributes.line_width) / 2;
  this.data.attributes.outer_radius = this.data.attributes.radius + 0.5 * Math.max(this.data.attributes.line_width, this.data.attributes.line_width * this.config.bg_width);
  var i = 0;
  for (var key in this.data.text_elements) {
    if (!this.config.time[key].show)continue;
    var textElement = $('<div>');
    textElement.addClass('js-ag-timer_item js-ag-timer_' + key);
    textElement.css('top', Math.round(0.35 * this.data.attributes.item_size));
    textElement.css('left', Math.round(i++ * this.data.attributes.item_size));
    textElement.css('width', this.data.attributes.item_size);
    textElement.appendTo(this.container);
    var numberElement = $('<div>');
    numberElement.addClass('js-ag-timer_num');
    numberElement.css('font-size', Math.round(0.21 * this.data.attributes.item_size));
    numberElement.css('line-height', Math.round(0.07 * this.data.attributes.item_size) + 'px');
    numberElement.appendTo(textElement);
    var headerElement = $('<div>');
    headerElement.addClass('js-ag-timer_name');
    headerElement.text(this.config.time[key].text);
    headerElement.css('font-size', Math.round(0.07 * this.data.attributes.item_size));
    headerElement.css('line-height', Math.round(0.07 * this.data.attributes.item_size) + 'px');
    headerElement.appendTo(textElement);
    this.data.text_elements[key] = numberElement;
  }
  if (this.config.start && this.timer === null) this.start()
};

  TC_Instance.prototype.updateArc=function(){var diff,old_diff;var prevDate=this.data.prev_time;var curDate=new Date();this.data.prev_time=curDate;if(prevDate===null)prevDate=curDate;if(!this.config.count_past_zero){if(curDate>this.data.attributes.ref_date){for(var i in this.data.drawn_units){var key=this.data.drawn_units[i];this.data.text_elements[key].text(Math.floor(time[key]));var x=(i*this.data.attributes.item_size)+(this.data.attributes.item_size/2);var y=this.data.attributes.item_size/2;var color=this.config.time[key].color;this.drawArc(x,y,color,0)}this.stop();return}}diff=(this.data.attributes.ref_date-curDate)/1000;old_diff=(this.data.attributes.ref_date-prevDate)/1000;var visible_times=parse_times(diff,old_diff,this.data.super_unit,this.data.drawn_units);var all_times=parse_times(diff,old_diff,'Years',allUnits);var i=0;var j=0;var lastKey=null;var cur_shown=this.data.drawn_units.slice();for(var i in allUnits){var key=allUnits[i];if(Math.floor(all_times.raw_time[key])!==Math.floor(all_times.raw_old_time[key])){this.notifyListeners(key,Math.floor(all_times.time[key]),Math.floor(diff),'all')}if(cur_shown.indexOf(key)<0)continue;if(Math.floor(visible_times.raw_time[key])!==Math.floor(visible_times.raw_old_time[key])){this.notifyListeners(key,Math.floor(visible_times.time[key]),Math.floor(diff),'visible')}this.data.text_elements[key].text(Math.floor(Math.abs(visible_times.time[key])));var x=(j*this.data.attributes.item_size)+(this.data.attributes.item_size/2);var y=this.data.attributes.item_size/2;var color=this.config.time[key].color;if(lastKey!==null){if(Math.floor(visible_times.time[lastKey])>Math.floor(visible_times.old_time[lastKey])){this.radialFade(x,y,color,1,key);this.data.state.fading[key]=true}else if(Math.floor(visible_times.time[lastKey])<Math.floor(visible_times.old_time[lastKey])){this.radialFade(x,y,color,0,key);this.data.state.fading[key]=true}}if(!this.data.state.fading[key]){this.drawArc(x,y,color,visible_times.pct[key])}lastKey=key;j++}};TC_Instance.prototype.drawArc=function(x,y,color,pct){var clear_radius=Math.max(this.data.attributes.outer_radius,this.data.attributes.item_size/2);this.data.attributes.context.clearRect(x-clear_radius,y-clear_radius,clear_radius*2,clear_radius*2);if(this.config.use_background){this.data.attributes.context.beginPath();this.data.attributes.context.arc(x,y,this.data.attributes.radius,0,2*Math.PI,false);this.data.attributes.context.lineWidth=this.data.attributes.line_width*this.config.bg_width;this.data.attributes.context.strokeStyle=this.config.circle_bg_color;this.data.attributes.context.stroke()}var startAngle=(-0.5*Math.PI);var endAngle=(-0.5*Math.PI)+(2*pct*Math.PI);var counterClockwise=false;this.data.attributes.context.beginPath();this.data.attributes.context.arc(x,y,this.data.attributes.radius,startAngle,endAngle,counterClockwise);this.data.attributes.context.lineWidth=this.data.attributes.line_width;this.data.attributes.context.strokeStyle=color;this.data.attributes.context.stroke()};TC_Instance.prototype.radialFade=function(x,y,color,from,key){var rgb=hexToRgb(color);var _this=this;var step=0.2*((from===1)?-1:1);var i;for(i=0;from<=1&&from>=0;i++){(function(){var rgba="rgba("+rgb.r+", "+rgb.g+", "+rgb.b+", "+(Math.round(from*10)/10)+")";window.top.setTimeout(function(){_this.drawArc(x,y,rgba,1)},50*i)}());from+=step}window.top.setTimeout(function(){_this.data.state.fading[key]=false},50*i)};TC_Instance.prototype.timeLeft=function(){var now=new Date();return((this.data.attributes.ref_date-now)/1000)};TC_Instance.prototype.start=function(){var attr_data_date=$(this.element).data('date');if(typeof attr_data_date==='undefined'){attr_data_date=$(this.element).attr('data-date')}if(typeof attr_data_date==='string'){this.data.attributes.ref_date=parse_date(attr_data_date)}else if(typeof this.data.attributes.timer==='number'){this.data.attributes.ref_date=(new Date()).getTime()+(this.data.attributes.timer*1000)}else{var attr_data_timer=$(this.element).data('timer');if(typeof attr_data_timer==='undefined'){attr_data_timer=$(this.element).attr('data-timer')}if(typeof attr_data_timer==='string'){attr_data_timer=parseFloat(attr_data_timer)}if(typeof attr_data_timer==='number'){this.data.attributes.ref_date=(new Date()).getTime()+(attr_data_timer*1000)}else{this.data.attributes.ref_date=this.config.ref_date}}var _this=this;this.timer=window.top.setInterval(function(){_this.updateArc()},this.config.refresh_interval*1000)};TC_Instance.prototype.restart=function(){this.data.attributes.timer=null;this.start()};TC_Instance.prototype.stop=function(){if(typeof this.data.attributes.timer==='number'){this.data.attributes.timer=this.timeLeft(this)}window.top.clearInterval(this.timer)};TC_Instance.prototype.destroy=function(){this.stop();this.container.remove();$(this.element).removeAttr('data-tc-id');$(this.element).removeData('tc-id')};

  TC_Instance.prototype.setOptions = function (options) {
    if (this.config === null) {
      this.default_options.ref_date = new Date();
      this.config = $.extend(true, {}, this.default_options)
    }
    $.extend(true, this.config, options)
  };
  TC_Instance.prototype.addListener = function (f, context, type) {
    if (typeof f !== 'function')return;
    if (typeof type === 'undefined') type = 'visible';
    this.listeners[type].push({func: f, scope: context})
  };
  TC_Instance.prototype.notifyListeners = function (unit, value, total, type) {
    for (var i = 0; i < this.listeners[type].length; i++) {
      var listener = this.listeners[type][i];
      listener.func.apply(listener.scope, [unit, value, total])
    }
  };
  TC_Instance.prototype.default_options = {
    ref_date: new Date(),
    start: true,
    refresh_interval: 0.1,
    count_past_zero: true,
    circle_bg_color: '#60686F',
    use_background: true,
    fg_width: 0.1,
    bg_width: 1.2,
    time: {
      Days: {show: true, text: 'Days', color: '#FC6'},
      Hours: {show: true, text: 'Hours', color: '#9CF'},
      Minutes: {show: true, text: 'Minutes', color: '#BFB'},
      Seconds: {show: true, text: 'Seconds', color: '#F99'}
    }
  };
  var TC_Class = function (elements, options) {
    this.elements = elements;
    this.options = options;
    this.foreach();
  };
  TC_Class.prototype.getInstance = function (element) {
    var instance;
    var cur_id = $(element).data('tc-id');
    if (typeof cur_id === 'undefined') {
      cur_id = guid();
      $(element).attr('data-tc-id', cur_id);
    }
    if (typeof TC_Instance_List[cur_id] === 'undefined') {
      var element_options = $(element).data('options');
      var options = this.options;
      if (typeof element_options === 'object') {
        options = $.extend(true, {}, this.options, element_options)
      }
      instance = new TC_Instance(element, options);
      TC_Instance_List[cur_id] = instance;
    } else {
      instance = TC_Instance_List[cur_id];
      if (typeof this.options !== 'undefined') {
        instance.setOptions(this.options);
      }
    }
    return instance;
  };
  TC_Class.prototype.foreach = function (callback) {
    var _this = this;
    this.elements.each(function () {
      var instance = _this.getInstance(this);
      if (typeof callback === 'function') {
        callback(instance)
      }
    });
    return this
  };
  TC_Class.prototype.start = function () {
    this.foreach(function (instance) {
      instance.start();
    });
    return this
  };
  TC_Class.prototype.stop = function () {
    this.foreach(function (instance) {
      instance.stop();
    });
    return this;
  };
  TC_Class.prototype.restart = function () {
    this.foreach(function (instance) {
      instance.restart();
    });
    return this;
  };
  TC_Class.prototype.rebuild = function () {
    this.foreach(function (instance) {
      instance.initialize(false);
    });
    return this
  };
  TC_Class.prototype.getTime = function () {
    return this.getInstance(this.elements[0]).timeLeft();
  };
  TC_Class.prototype.addListener = function (f, type) {
    if (typeof type === 'undefined') type = 'visible';
    var _this = this;
    this.foreach(function (instance) {
      instance.addListener(f, _this.elements, type);
    });
    return this
  };
  TC_Class.prototype.destroy = function () {
    this.foreach(function (instance) {
      instance.destroy();
    });
    return this
  };
  TC_Class.prototype.end = function () {
    return this.elements
  };
  $.fn.TimeCircles = function (options) {
    return new TC_Class(this, options);
  }
}(jQuery));
