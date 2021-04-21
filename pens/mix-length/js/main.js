document.addEventListener('DOMContentLoaded', function() {
  const MIX_LENGTH = 150;
  const textarea = document.getElementById('js-comm_textarea');
  const button = document.getElementById('js-comm_btn');

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  const div = document.createElement('div');
  div.className = 'js-comm_alert';
  div.id = 'js-comm_alert';
  div.innerHTML = '<div id="js-comm_count" class="js-ag-comm_count">Вы ввели <span>0</span> символов из ' + MIX_LENGTH + ' минимальных!</div>';
  insertAfter(textarea, div);

  const count = document.getElementById('js-comm_count');
  const countSpan = count.querySelector('span');

  textarea.onkeyup = function() {
    countSpan.textContent = this.value.length;

    count.classList.remove('js-ag-comm_count__success');

    button.disabled = 'disabled';

    if (this.value.length >= MIX_LENGTH) {
      count.classList.add('js-ag-comm_count__success');

      button.disabled = "";
    }
  };

});