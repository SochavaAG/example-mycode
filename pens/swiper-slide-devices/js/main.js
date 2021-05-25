var agApplendMainManualList =
  [
    ['Donec', 'Sed consequat, leo eget bibendum sodales.'],
    ['Integer tincidunt', 'Cras dapibus. Vivamus elementum semper nisi.'],
    ['Aenean vulputate', 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.'],
    ['Aliquam lorem ante', 'Phasellus viverra nulla ut metus varius laoreet.'],
    ['Quisque rutrum', 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'],
    ['Maecenas tempus', 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem!'],
    ['Maecenas!', 'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt!']
  ];

var agSlide = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.js-ag-app-slide-carousel_arr__next',
    prevEl: '.js-ag-app-slide-carousel_arr__prev'
  },
  spaceBetween: 0,
  loop: true,
  loopedSlides: this.slidesLength,
  pagination: {
    el: '.js-ag-app-slide-control_list',
    bulletClass: 'js-ag-app-slide-control_item',
    bulletActiveClass: 'js-ag-app-slide-control_item__active',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' +
        '<div class="ag-app-slide-control_step">' + (index + 1)  + '</div>' +
        '<div class="ag-app-slide-control_info">' +
        '<div class="ag-app-slide-control-info_title">' + agApplendMainManualList[index][0] + '</div>' +
        '<div class="ag-app-slide-control-info_descr">' + agApplendMainManualList[index][1] + '</div>' +
        '</div>' +
        '</div>';
    }
  },
  on: {
    slideChange: function () {
      var agManualItem = $('.js-ag-app-slide-control_item');

      console.log(this.realIndex);

      agManualItem.removeClass('js-ag-app-slide-control_item__active');
      agManualItem.eq(this.realIndex).addClass('js-ag-app-slide-control_item__active');
    }
  }
});