(function ($) {
  $(function () {

    //rotate letters in page section
    var letters = document.querySelectorAll('.js-letters_anim');

    var letterRotate = function (blinkTextMenuLinks) {
      blinkTextMenuLinks.forEach(function (link) {
        var letters = link.textContent.split('');
        link.textContent = '';
        letters.forEach(function (letter, i) {
          i += 1;
          var span = document.createElement('span');
          span.className = 'js-ag-letters_letter';
          var delay = i / 20;
          if (i % 2 === 0) {
            delay -= 0.1;
          } else {
            delay += 0.05;
          }
          var letterOut = document.createElement('span');
          letterOut.textContent = letter;
          letterOut.style.transitionDelay = delay + 's';
          letterOut.classList.add('out');
          span.append(letterOut);
          var letterIn = document.createElement('span');
          letterIn.textContent = letter;
          letterIn.style.transitionDelay = delay + 's';
          letterIn.classList.add('in');
          span.append(letterIn);
          link.append(span);
        });
      });
    };

    letterRotate(letters);

  });
})(jQuery);