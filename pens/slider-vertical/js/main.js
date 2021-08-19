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
      this.slideNextOne(currentIndex, this.sliderArr);
    };

    SliderPage.prototype.slidePrev = function () {
      var currentIndex = this.currentIndex();
      this.slidePrevOne(currentIndex, this.sliderArr);
    };

    SliderPage.prototype.removeSlideClass = function () {
      for (var i = 0; i < this.sliderArr.length; i++) {
        this.sliderArr[i].classList.remove('slide--active');
      }
    };

    SliderPage.prototype.slideTo = function (index) {
      this.slideNextOne(index, this.sliderArr);
    };


    if (document.querySelector('.slider_page')) {
      var pageSlider = new SliderPage('.slider_page');
    }






    if (document.querySelector('.slider_product')) {
      var slPr = document.querySelectorAll('.slider_product');
      for (var i = 0; i < slPr.length; i++) {
        slPr[i].classList.add('slider_product' + (i + 1));
        var sliderProduct = new Slider('.slider_product' + (i + 1), {arrows: !1})
      }

      var cursorSL = new Cursor('.cursor-sl', '.slider_product');
      window.addEventListener('load', scrollElem);
      window.addEventListener('scroll', scrollElem);

      function scrollElem() {
        var scrollElement = document.querySelectorAll('.slide');

        for (var i = 0; i < scrollElement.length; i++) {

          var coordinateTop = scrollElement[i].getBoundingClientRect().top, elementHeight = scrollElement[i].getBoundingClientRect().height, windowHeight = document.documentElement.clientHeight, result = coordinateTop > 0 - elementHeight && coordinateTop < windowHeight + 50;

          if (result) {
            if (!scrollElement[i].classList.contains('load')) {
              scrollElement[i].querySelector('img').src = scrollElement[i].dataset.img;
              scrollElement[i].classList.add('load')
            }
          }
        }
      }
    }

    if (document.querySelector('.slider_product')) {
      if (document.querySelector('.slider_title')) {
        var sliderTitle = new Slider('.slider_title', {arrows: !1, dots: !1, clone: !0})
      }
      if (document.querySelector('.slider_arr_up')) {
        var sliderUp = new Slider('.slider_arr_up', {arrows: !1, dots: !1, clone: !0})
      }
      if (document.querySelector('.slider_arr_down')) {
        var sliderDown = new Slider('.slider_arr_down', {arrows: !1, dots: !1, clone: !0})
      }
      if (document.querySelector('.slider_page')) {
        var pageSlider = new SliderPage('.slider_page')
      }
      if (document.querySelector('.slider_top .product_title__left')) {
        document.querySelector('.slider_top .product_title__left').addEventListener('click', function (event) {
          var target = event.target;
          if (target.closest('.title_arrow--up')) {
            sliderTitle.slidePrev();
            sliderUp.slidePrev();
            sliderDown.slidePrev();
            pageSlider.slidePrev()
          }
          if (target.closest('.title_arrow--down')) {
            sliderTitle.slideNext();
            sliderUp.slideNext();
            sliderDown.slideNext();
            pageSlider.slideNext()
          }
        })
      }


      document.addEventListener('DOMContentLoaded', function () {
        var cursorSL = new Cursor('.cursor-sl', '.slider_product');
        var cursorTop = new Cursor('.cursor-up', '.title_arrow--up');
        var cursorBottom = new Cursor('.cursor-down', '.title_arrow--down');
        var myHash = location.hash;
        location.hash = '';
        var hasHash = /\d/.test(myHash);
        var hasHref = +myHash[1];
        if (hasHash) {
          sliderTitle.slideTo(hasHref);
          sliderUp.slideTo(hasHref);
          sliderDown.slideTo(hasHref);
          pageSlider.slideTo(hasHref)
        }
      })
    }

    function Cursor(selector, elem){
      this.cursor = document.querySelectorAll(selector);
      this.block = document.querySelectorAll(elem);

      const _self = this;

      function move() {
        _self.cursor.forEach(function (item) {
          item.classList.add('active');
          const cursorHeigth = item.getBoundingClientRect().height/2,
            cursorWidth = item.getBoundingClientRect().width/2,
            trX = event.clientX - cursorWidth,
            trY = event.clientY - cursorHeigth;
          item.style.transform = 'translate3d(' + trX + 'px, ' + trY + 'px, 0)';
        });
      }

      this.block.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          _self.cursor.forEach(function (item) {
            item.classList.add('active');
          });

          item.addEventListener('mousemove', move, false);
        });
        item.addEventListener('mouseleave', function () {
          _self.cursor.forEach(function (item) {
            item.classList.remove('active');
          });
          item.removeEventListener('mousemove', move, false)
        });
      });

      window.addEventListener('scroll', function () {
        _self.cursor.forEach(function (item) {
          item.classList.remove('active');
        });
      })

    }
    function CursorView(cursor, elem, clas) {
      var $cursor = document.querySelectorAll(cursor);
      var $answerContainer = document.querySelectorAll(elem);

      $answerContainer.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          $cursor.forEach(function (item) {
            item.classList.add(clas);
          });

        });
      });

      $answerContainer.forEach(function (item) {
        item.addEventListener('mouseleave', function () {
          $cursor.forEach(function (item) {
            item.classList.remove(clas);
          });
        });
      })
    }

// cursor('.cursor');

    function cursorCapture(selector){
      var sel = document.querySelectorAll(selector);
      for (var i = 0; i < sel.length; i++){
        sel[i].addEventListener('mousemove', function (e){
          var coordinateTop = this.getBoundingClientRect().top,
            coordinateLeft = this.getBoundingClientRect().left,
            selHeigth = this.getBoundingClientRect().height/2,
            selWidth = this.getBoundingClientRect().width/2,
            trX = e.clientX - coordinateLeft - selWidth,
            trY = e.clientY - coordinateTop - selHeigth;
          this.style.transform = 'translate3d(' + trX + 'px, ' + trY + 'px, 0)';
          this.onmouseout = function () {
            this.style.transform = 'translate3d(0, 0, 0)';
          };
        });
      }
    }








  });
})(jQuery);