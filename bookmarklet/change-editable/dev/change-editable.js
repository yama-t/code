(function() {
  "use strict";
  r();
  // 実行本体
  function r() {
    const $target = document.querySelector('.sign-Section');
    $target.setAttribute('contenteditable', true);
    $target.focus();
    const $header = document.querySelector('.st-Header_TitleLink');
    $header.append('Editable');
  }
})();