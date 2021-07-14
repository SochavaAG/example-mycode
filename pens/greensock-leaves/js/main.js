(function ($) {
  $(function () {

    var t = document.querySelector('.js-ag-leaves-block'),
      e = parseFloat(window.getComputedStyle(t, null).getPropertyValue('font-size'));

    setTimeout((function () {

    $('.js-ag-autumn-block').addClass('js-ag-anim'), function () {

    var agBranch = gsap.timeline({delay: 1});

    agBranch.from($('.js-ag-branch-3'), {x: '-100%', alpha: 0, duration: 1.5}), agBranch.from($('.js-ag-branch-4'), {
      x: '-100%',
      alpha: 0,
      duration: 1.5
    }, 1), agBranch.from($('.js-ag-branch-5'), {x: '100%', alpha: 0, duration: 1.5}, 0), agBranch.from($('.js-ag-branch-6'), {
      x: '100%',
      alpha: 0,
      duration: 1.5
    }, 1);


    var agSheet = gsap.timeline({delay: 1, repeat: -1});

    agSheet.from($('.js-ag-sheet-2'), {alpha: 0, duration: 1.5, ease: 'none'}, 1.5), agSheet.to($('.js-ag-sheet-2'), {
      y: 28 * e,
      duration: 20,
      ease: 'none'
    }, 1), agSheet.to($('.js-ag-sheet-2'), {alpha: 0, ease: 'none', duration: 1}), agSheet.from($('.js-ag-sheet-1'), {
      alpha: 0,
      scale: .8,
      duration: 1.5,
      ease: 'none'
    }, 1.3), agSheet.to($('.js-ag-sheet-1'), {y: 28 * e, duration: 20, ease: 'none'}, 1), agSheet.to($('.js-ag-sheet-1'), {
      alpha: 0,
      ease: 'none',
      duration: 1
    }), agSheet.from($('.js-ag-sheet-3'), {
      alpha: 0,
      scale: .8,
      duration: 1.5,
      ease: 'none'
    }, 3), agSheet.to($('.js-ag-sheet-3'), {y: 28 * e, duration: 20, ease: 'none'}, 2), agSheet.to($('.js-ag-sheet-3'), {
      alpha: 0,
      ease: 'none',
      duration: 1
    }), agSheet.from($('.js-ag-sheet-4'), {
        alpha: 0,
        scale: .8,
        duration: 1.5,
        ease: 'none'
      }, 3), agSheet.to($('.js-ag-sheet-4'), {y: 28 * e, duration: 20, ease: 'none'}, 2), agSheet.to($('.js-ag-sheet-4'), {
        alpha: 0,
        ease: 'none',
        duration: 1
      }), agSheet.from($('.js-ag-sheet-5'), {alpha: 0, duration: 1.5, ease: 'none'}, 1.5), agSheet.to($('.js-ag-sheet-5'), {
        y: 28 * e,
        duration: 20,
        ease: 'none'
      }, 1), agSheet.to($('.js-ag-sheet-5'), {alpha: 0, ease: 'none', duration: 1});

    }();

    }), 500);

  });
})(jQuery);