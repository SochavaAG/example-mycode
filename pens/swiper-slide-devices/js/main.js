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
    nextEl: '.applend__carousel-arr.next',
    prevEl: '.applend__carousel-arr.prev'
  },
  spaceBetween: 0,
  loop: true,
  loopedSlides: this.slidesLength,
  pagination: {
    el: '.applend-main__manual-list',
    bulletClass: 'applend-main__manual-list-item',
    bulletActiveClass: 'active',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' +
        '<div class="applend-main__manual-step">' + (index + 1)  + '</div>' +
        '<div class="applend-main__manual-item">' +
        '<div class="applend-main__manual-title">' + agApplendMainManualList[index][0] + '</div>' +
        '<div class="applend-main__manual-descr">' + agApplendMainManualList[index][1] + '</div>' +
        '</div>' +
        '</div>';
    }
  },
  on: {
    slideChange: function () {
      var agManualItem = $('.applend-main__manual-list-item');

      agManualItem.removeClass('active');
      agManualItem.eq(this.realIndex).addClass('active');
    }
  }
});