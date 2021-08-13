(function ($) {
  $(function () {


    // slider
    function Slider(selector, settings) {
      this.defaultSettings = {
        dots: true,
        arrows: true,
        multiSlide: true,
        autoPlay: false,
        autoPlaySpeed: 5000,
        arrowNext: 'Next',
        arrowPrev: 'Prev',
        infinity: true,
        clone: false,
        swipe: true
      };

      if(settings){
        for (var key in settings){
          this.defaultSettings[key] = settings[key];
        }
      }

      this.slider = document.querySelector(selector);

      this.sliderArr = [];

      const _self = this;

      if(this.defaultSettings.clone) {
        var sliderBox =  this.slider.querySelector('.slider_box');
        var sliderInner =  sliderBox.innerHTML;
        sliderBox.innerHTML += sliderInner;
      }

      for(var i = 0; i < this.slider.children.length; i++){
        var sliderChild = this.slider.children[i];

        if(sliderChild.classList.contains('slider_box')){
          this.sliderArr = this.slider.children[i].children;
        }
      }

      if(this.defaultSettings.multiSlide){
        this.sliderArr[0].classList.add('slide--active');
        this.sliderArr[this.sliderArr.length - 1].classList.add('slide--prev');
        this.sliderArr[0].nextElementSibling.classList.add('slide--next');
      } else {
        this.sliderArr[0].classList.add('slide--active');
      }

      if(this.defaultSettings.autoPlay){
        this.interval = this.intervalStart();
      }

      if(this.defaultSettings.dots){
        const ul = document.createElement('ul');

        ul.classList.add('slider_dots');

        for(var i = 0; i < this.sliderArr.length; i++){
          var li = document.createElement('li');
          ul.appendChild(li)
        }

        this.slider.appendChild(ul);
        ul.firstChild.classList.add('slide--active');

        this.dotsArr = ul.children;
      }

      if(this.defaultSettings.arrows){
        const buttonPrev = document.createElement('button');
        const buttonNext = document.createElement('button');

        const spanP = document.createElement('span');
        const spanN = document.createElement('span');

        buttonPrev.classList.add('slider_arrow');
        buttonPrev.classList.add('slider_arrow--prev');
        spanP.innerHTML = this.defaultSettings.arrowPrev;
        buttonPrev.appendChild(spanP);
        buttonNext.classList.add('slider_arrow');
        buttonNext.classList.add('slider_arrow--next');
        spanN.innerHTML = this.defaultSettings.arrowNext;
        buttonNext.appendChild(spanN);

        this.slider.appendChild(buttonPrev);
        this.slider.appendChild(buttonNext);
      }

      var clX1;
      var clX2;
      const SWIPE_LENGTH = 20;

      this.slider.addEventListener('mousedown', function (event) {
        clX1 = event.clientX;
      });

      this.slider.addEventListener('click', function (event) {
        var target = event.target;

        if(target.closest('.slide--prev') || target.closest('.slider_arrow--prev') ){

          _self.slidePrev();

          _self.autoPlayStart();

        }

        if(target.closest('.slide--next')  || target.closest('.slider_arrow--next') ){

          _self.slideNext();

          _self.autoPlayStart();
        }

        if(_self.defaultSettings.swipe){
          clX2 = event.clientX;

          var res = clX1 - clX2;

          if( res < -SWIPE_LENGTH && !('ontouchstart' in window)){

            _self.slidePrev();

            _self.autoPlayStart();
          }
          if( res > SWIPE_LENGTH && !('ontouchstart' in window)){

            _self.slideNext();

            _self.autoPlayStart();
          }
        }
      });

      if(_self.defaultSettings.swipe){
        var touchX1;
        var touchX2;

        this.slider.addEventListener('touchstart', function (event) {
          touchX1 = event.changedTouches[0].clientX;
        });

        this.slider.addEventListener('touchend', function (event) {
          touchX2 = event.changedTouches[0].clientX;

          var res = touchX1 - touchX2;

          if( res < -SWIPE_LENGTH && ('ontouchstart' in window)){

            _self.slidePrev();

            _self.autoPlayStart();
          }
          if( res > SWIPE_LENGTH && ('ontouchstart' in window)){

            _self.slideNext();

            _self.autoPlayStart();
          }
        });
      }
      
      // if(this.defaultSettings.autoPlay){
      //     setInterval(function ()  {
      //         const currentIdx = _self.currentIndex();
      //
      //         _self.slideMultiOneNext(currentIdx);
      //         _self.slideDotsNext(currentIdx)
      //
      //     }, this.defaultSettings.autoPlaySpeed)
      // }
    }

    Slider.prototype.intervalStart = function () {
      const _self = this;
      return setInterval(function () {
        _self.slideNext();
      }, 3000)
    };

    Slider.prototype.autoPlayStart = function () {
      if(this.defaultSettings.autoPlay){
        clearInterval(this.interval);
        this.interval = this.intervalStart();
      }
    };

    Slider.prototype.currentIndex = function (arr){
      // return [].findIndex.call(sliderArr,  elem => elem.classList.contains('slide--active'));
      var index = 0;

      for (var i = 0; i < this.sliderArr.length; i++){
        if(this.sliderArr[i].classList.contains('slide--active')){
          index = i;
        }
      }

      return index;
    };

    Slider.prototype.slideMultiPrev = function (index, arr){
      if(index === 0 && !this.defaultSettings.infinity) {

      } else if(index === 0){
        this.removeSlideClass(arr);
        arr[arr.length - 1].classList.add('slide--active');
        arr[arr.length - 2].classList.add('slide--prev');
        this.sliderArr[index].classList.add('slide--next');
      } else if(index === 1){
        this.removeSlideClass(arr);
        arr[index - 1].classList.add('slide--active');
        arr[arr.length - 1].classList.add('slide--prev');
        arr[index].classList.add('slide--next');
      } else{
        this.removeSlideClass(arr);
        arr[index - 1].classList.add('slide--active');
        arr[index - 2].classList.add('slide--prev');
        arr[index].classList.add('slide--next');
      }
    };

    Slider.prototype.slideMultiNext = function (index, arr){
      if(index === arr.length - 1 && !this.defaultSettings.infinity){

      }else if(index === arr.length - 2){
        this.removeSlideClass(arr);
        arr[index + 1].classList.add('slide--active');
        arr[index].classList.add('slide--prev');
        arr[0].classList.add('slide--next');
      }
      else if(index === arr.length - 1){
        this.removeSlideClass(arr);
        arr[0].classList.add('slide--active');
        arr[arr.length - 1].classList.add('slide--prev');
        arr[1].classList.add('slide--next');
      }
      else{
        this.removeSlideClass(arr);
        arr[index + 1].classList.add('slide--active');
        arr[index].classList.add('slide--prev');
        arr[index + 2].classList.add('slide--next');
      }
    };

    Slider.prototype.removeSlideClass = function (arr){
      // [].forEach.call(sliderArr,  elem => elem.classList.remove('slide--active', 'slide--prev', 'slide--next'));
      for (var i = 0; i < arr.length; i++){
        arr[i].classList.remove('slide--active');
        arr[i].classList.remove( 'slide--prev');
        arr[i].classList.remove('slide--next');
      }
    };

    Slider.prototype.slidePrevOne = function (index, arr){
      if(index === 0 && !this.defaultSettings.infinity){

      } else if (index === 0){
        this.removeSlideClass(arr);
        arr[arr.length - 1].classList.add('slide--active');
      } else {
        this.removeSlideClass(arr);
        arr[index - 1].classList.add('slide--active');
      }
    };

    Slider.prototype.slideNextOne = function (index, arr){
      if((index === (arr.length - 1)) && !this.defaultSettings.infinity){

      } else if(index === (arr.length - 1)){
        this.removeSlideClass(arr);
        arr[0].classList.add('slide--active');
      } else{
        this.removeSlideClass(arr);
        arr[index + 1].classList.add('slide--active');
      }
    };

    Slider.prototype.slideNext = function (){
      var currentIndex = this.currentIndex();

      if(this.defaultSettings.multiSlide){
        this.slideMultiNext(currentIndex, this.sliderArr);
      } else {
        this.slideNextOne(currentIndex, this.sliderArr);
      }
      if(this.defaultSettings.dots){
        this.slideNextOne(currentIndex, this.dotsArr)
      }
    };

    Slider.prototype.slidePrev = function (){
      var currentIndex = this.currentIndex();

      if(this.defaultSettings.multiSlide){
        this.slideMultiPrev(currentIndex, this.sliderArr);
      } else {
        this.slidePrevOne(currentIndex, this.sliderArr)
      }
      if(this.defaultSettings.dots){
        this.slidePrevOne(currentIndex, this.dotsArr)
      }
    };
    
    Slider.prototype.slideTo = function (index) {
      if(this.defaultSettings.multiSlide){
        this.slideMultiNext(index, this.sliderArr);
      } else {
        this.slideNextOne(index, this.sliderArr);
      }
      if(this.defaultSettings.dots){
        this.slideNextOne(index, this.dotsArr)
      }
    };
    
// Slider.prototype.slideDotsPrev = function (){
//     if(this.defaultSettings.dots){
//         this.slidePrevOne(this.currentIndex(), this.dotsArr)
//     }
// };
// Slider.prototype.slideDotsNext = function (){
//     if(this.defaultSettings.dots){
//         this.slideNextOne(this.currentIndex(), this.dotsArr)
//     }
// };
// /slider


    /*
    function SliderPage(selector) {
      this.slider = document.querySelector(selector);
      this.sliderArr = [];

      const _self = this;

      for (var i = 0; i < this.slider.children.length; i++) {
        var sliderChild = this.slider.children[i];

        if (sliderChild.classList.contains('slider_box')) {
          this.sliderArr = this.slider.children[i].children;
        }
      }
      this.sliderArr[0].classList.add('slide--active');
    }

    SliderPage.prototype.currentIndex = function () {
      var index = 0;

      for (var i = 0; i < this.sliderArr.length; i++) {
        if (this.sliderArr[i].classList.contains('slide--active')) {
          index = i;
        }
      }
      return index;
    };

    SliderPage.prototype.slidePrevOne = function (index, arr) {
      if (index === 0) {
        this.removeSlideClass();
        arr[arr.length - 1].classList.add('slide--active');
      } else {
        this.removeSlideClass();
        arr[index - 1].classList.add('slide--active');
      }
    };

    SliderPage.prototype.slideNextOne = function (index, arr) {
      if (index === (arr.length - 1)) {
        this.removeSlideClass();
        arr[0].classList.add('slide--active');
      } else {
        this.removeSlideClass();
        arr[index + 1].classList.add('slide--active');
      }
    };

    SliderPage.prototype.slideNext = function () {
      var currentIndex = this.currentIndex();
      this.slideNextOne(currentIndex, this.sliderArr)
    };

    SliderPage.prototype.slidePrev = function () {
      var currentIndex = this.currentIndex();
      this.slidePrevOne(currentIndex, this.sliderArr)
    };

    SliderPage.prototype.removeSlideClass = function () {
      for (var i = 0; i < this.sliderArr.length; i++) {
        this.sliderArr[i].classList.remove('slide--active');
      }
    };

    SliderPage.prototype.slideTo = function (index) {
      this.slideNextOne(index, this.sliderArr)
    };
    */


    if (document.querySelector('.photo_container')) {
      var sliderSwipe = new SliderSwipe('.photo_container', {progress: !0});
      var sliderUnder = new Slider('.photo_block', {multiSlide: !1, dots: !0, arrows: !1, infinity: !1});
      var cursor = new Cursor('.cursor', '.photo_container');
    }

  });
})(jQuery);