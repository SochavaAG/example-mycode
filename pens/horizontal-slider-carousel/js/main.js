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
        var sliderBox =  this.slider.querySelector('.js-photo_container');
        var sliderInner =  sliderBox.innerHTML;
        sliderBox.innerHTML += sliderInner;
      }

      for(var i = 0; i < this.slider.children.length; i++){
        var sliderChild = this.slider.children[i];

        if(sliderChild.classList.contains('js-photo_container')){
          this.sliderArr = this.slider.children[i].children;
        }
      }

      if(this.defaultSettings.multiSlide){
        this.sliderArr[0].classList.add('js-ag-slide__active');
        this.sliderArr[this.sliderArr.length - 1].classList.add('js-ag-slide__prev');
        this.sliderArr[0].nextElementSibling.classList.add('js-ag-slide__next');
      } else {
        this.sliderArr[0].classList.add('js-ag-slide__active');
      }

      if(this.defaultSettings.autoPlay){
        this.interval = this.intervalStart();
      }

      if(this.defaultSettings.dots){
        const ul = document.createElement('ul');

        ul.classList.add('js-ag-slide_dots');

        for(var i = 0; i < this.sliderArr.length; i++){
          var li = document.createElement('li');
          ul.appendChild(li)
        }

        this.slider.appendChild(ul);
        ul.firstChild.classList.add('js-ag-slide__active');

        this.dotsArr = ul.children;
      }

      if(this.defaultSettings.arrows){
        const buttonPrev = document.createElement('button');
        const buttonNext = document.createElement('button');

        const spanP = document.createElement('span');
        const spanN = document.createElement('span');

        buttonPrev.classList.add('slider_arrow');
        buttonPrev.classList.add('js-ag-slide_arrow__prev');
        spanP.innerHTML = this.defaultSettings.arrowPrev;
        buttonPrev.appendChild(spanP);
        buttonNext.classList.add('slider_arrow');
        buttonNext.classList.add('js-ag-slide_arrow__next');
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

        if(target.closest('.js-ag-slide__prev') || target.closest('.js-ag-slide_arrow__prev') ){
          _self.slidePrev();

          _self.autoPlayStart();
        }

        if(target.closest('.js-ag-slide__next')  || target.closest('.js-ag-slide_arrow__next') ){
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

      /*
       if (this.defaultSettings.autoPlay) {
       setInterval(function () {
       const currentIdx = _self.currentIndex();

       _self.slideMultiOneNext(currentIdx);
       _self.slideDotsNext(currentIdx)

       }, this.defaultSettings.autoPlaySpeed)
       }
       */
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
      // return [].findIndex.call(sliderArr,  elem => elem.classList.contains('js-ag-slide__active'));
      var index = 0;

      for (var i = 0; i < this.sliderArr.length; i++){
        if(this.sliderArr[i].classList.contains('js-ag-slide__active')){
          index = i;
        }
      }

      return index;
    };

    Slider.prototype.slideMultiPrev = function (index, arr){
      if(index === 0 && !this.defaultSettings.infinity) {

      } else if(index === 0){
        this.removeSlideClass(arr);
        arr[arr.length - 1].classList.add('js-ag-slide__active');
        arr[arr.length - 2].classList.add('js-ag-slide__prev');
        this.sliderArr[index].classList.add('js-ag-slide__next');
      } else if(index === 1){
        this.removeSlideClass(arr);
        arr[index - 1].classList.add('js-ag-slide__active');
        arr[arr.length - 1].classList.add('js-ag-slide__prev');
        arr[index].classList.add('js-ag-slide__next');
      } else{
        this.removeSlideClass(arr);
        arr[index - 1].classList.add('js-ag-slide__active');
        arr[index - 2].classList.add('js-ag-slide__prev');
        arr[index].classList.add('js-ag-slide__next');
      }
    };

    Slider.prototype.slideMultiNext = function (index, arr){
      if(index === arr.length - 1 && !this.defaultSettings.infinity){

      }else if(index === arr.length - 2){
        this.removeSlideClass(arr);
        arr[index + 1].classList.add('js-ag-slide__active');
        arr[index].classList.add('js-ag-slide__prev');
        arr[0].classList.add('js-ag-slide__next');
      }
      else if(index === arr.length - 1){
        this.removeSlideClass(arr);
        arr[0].classList.add('js-ag-slide__active');
        arr[arr.length - 1].classList.add('js-ag-slide__prev');
        arr[1].classList.add('js-ag-slide__next');
      }
      else{
        this.removeSlideClass(arr);
        arr[index + 1].classList.add('js-ag-slide__active');
        arr[index].classList.add('js-ag-slide__prev');
        arr[index + 2].classList.add('js-ag-slide__next');
      }
    };

    Slider.prototype.removeSlideClass = function (arr){
      // [].forEach.call(sliderArr,  elem => elem.classList.remove('js-ag-slide__active', 'js-ag-slide__prev', 'js-ag-slide__next'));
      for (var i = 0; i < arr.length; i++){
        arr[i].classList.remove('js-ag-slide__active');
        arr[i].classList.remove( 'js-ag-slide__prev');
        arr[i].classList.remove('js-ag-slide__next');
      }
    };

    Slider.prototype.slidePrevOne = function (index, arr){
      if(index === 0 && !this.defaultSettings.infinity){

      } else if (index === 0){
        this.removeSlideClass(arr);
        arr[arr.length - 1].classList.add('js-ag-slide__active');
      } else {
        this.removeSlideClass(arr);
        arr[index - 1].classList.add('js-ag-slide__active');
      }
    };

    Slider.prototype.slideNextOne = function (index, arr){
      if((index === (arr.length - 1)) && !this.defaultSettings.infinity){

      } else if(index === (arr.length - 1)){
        this.removeSlideClass(arr);
        arr[0].classList.add('js-ag-slide__active');
      } else{
        this.removeSlideClass(arr);
        arr[index + 1].classList.add('js-ag-slide__active');
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

    function SliderSwipe(selector, settings) {
      this.defaultSettings = {
        progress: false
      };

      if(settings){
        for (var key in settings){
          this.defaultSettings[key] = settings[key];
        }
      }

      var start = 0;
      var startX = 0;
      var startXX = 0;
      var banSliderBoxWidth = 0;
      var banSliderWidth = 0;
      var rightEnd = 0;

      this.container = document.querySelector(selector);

      const _self = this;

      if(this.defaultSettings.progress && !this.inSel('.js-ag-progress-block')){
        this.div = document.createElement('div');
        this.divP = document.createElement('div');
        this.div.classList.add('js-ag-progress-block');
        this.divP.classList.add('js-ag-progress');
        this.div.appendChild(this.divP);
        this.container.parentNode.appendChild(this.div);
      }

      function fnF() {
        banSliderWidth = _self.container.parentNode.clientWidth;
        rightEnd = banSliderBoxWidth - banSliderWidth;

        startX = startXX - (event.clientX - start);

        if ('ontouchstart' in window) {
          startX = startXX - (event.changedTouches[0].clientX - start);
        }

        if (startX < 0) {
          startX = 0;
        }

        if (startX > rightEnd) {
          startX = rightEnd;
        }

        this.style.transform = 'translateX(' + -startX + 'px)';

        if (_self.defaultSettings.progress) {
          var transformP = ((_self.div.clientWidth - _self.divP.clientWidth) / 100) * (startX / (rightEnd / 100));
          _self.divP.style.transform = 'translateX(' + transformP + 'px)'
        }
      }

      var banSlides = this.container.children;

      $(banSlides).each(function (index, item) {
        banSliderBoxWidth += item.clientWidth;
      });

      this.container.style.width = banSliderBoxWidth + 'px';

      banSliderWidth = this.container.parentNode.clientWidth;
      rightEnd = banSliderBoxWidth - banSliderWidth;

      this.container.addEventListener('mousedown', function (e) {

        start = e.clientX;
        if(banSliderWidth < banSliderBoxWidth){
          this.addEventListener('mousemove', fnF)
        }
      });

      this.container.addEventListener('mouseup', function (e) {
        startXX = startX;
        this.removeEventListener('mousemove', fnF)
      });

      this.container.addEventListener('touchstart', function (e) {
        start = e.changedTouches[0].clientX;

        if(banSliderWidth < banSliderBoxWidth){
          this.addEventListener('touchmove', fnF)
        }
      });

      this.container.addEventListener('touchend', function (e) {
        startXX = startX;
        this.removeEventListener('touchmove', fnF)
      });

      this.container.ondragstart = function () {
        return false;
      }
    }

    SliderSwipe.prototype.inSel = function (selector){
      return  this.container.parentNode.querySelector(selector);
    };

    function Cursor(selector, elem) {
      this.cursor = document.querySelectorAll(selector);
      this.block = document.querySelectorAll(elem);

      const _self = this;

      function move() {
        _self.cursor.forEach(function (item) {
          item.classList.add('js-ag-cursor__active');
          const cursorHeigth = item.getBoundingClientRect().height / 2,
            cursorWidth = item.getBoundingClientRect().width / 2,
            trX = event.clientX - cursorWidth,
            trY = event.clientY - cursorHeigth;
          item.style.transform = 'translate3d(' + trX + 'px, ' + trY + 'px, 0)';
        });
      }

      this.block.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          _self.cursor.forEach(function (item) {
            item.classList.add('js-ag-cursor__active');
          });

          item.addEventListener('mousemove', move, false);
        });
        item.addEventListener('mouseleave', function () {
          _self.cursor.forEach(function (item) {
            item.classList.remove('js-ag-cursor__active');
          });
          item.removeEventListener('mousemove', move, false)
        });
      });

      window.addEventListener('scroll', function () {
        _self.cursor.forEach(function (item) {
          item.classList.remove('js-ag-cursor__active');
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

    function cursorCapture(selector) {
      var sel = document.querySelectorAll(selector);
      for (var i = 0; i < sel.length; i++) {
        sel[i].addEventListener('mousemove', function (e) {
          var coordinateTop = this.getBoundingClientRect().top,
            coordinateLeft = this.getBoundingClientRect().left,
            selHeigth = this.getBoundingClientRect().height / 2,
            selWidth = this.getBoundingClientRect().width / 2,
            trX = e.clientX - coordinateLeft - selWidth,
            trY = e.clientY - coordinateTop - selHeigth;
          this.style.transform = 'translate3d(' + trX + 'px, ' + trY + 'px, 0)';
          this.onmouseout = function () {
            this.style.transform = 'translate3d(0, 0, 0)';
          };
        });
      }
    }

    if (document.querySelector('.js-photo_container')) {
      var sliderSwipe = new SliderSwipe('.js-photo_container', {progress: true});
      var sliderUnder = new Slider('.js-photo-block', {multiSlide: false, dots: true, arrows: false, infinity: false});
      var cursor = new Cursor('.js-ag-cursor', '.js-photo_container');
    }

  });
})(jQuery);