var agHeaderMenu = $('#ag-header-menu');

agHeaderMenu.lavalamp({
  easing: 'easeOutBack',
  setOnClick: true,
  speed: 700
});

agHeaderMenu.children('li').on('click', function () {
  agHeaderMenu.children('li').removeClass('js-aci-current'), $(this).addClass('js-aci-current');
});