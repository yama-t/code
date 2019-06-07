(function() {
  r();

  // 実行本体
  function r() {

    // カラムを全取得
    var $column = document.querySelectorAll('.BoardBody-column');
    var columnArr = [].slice.call($column);

    // DONEのカラムのみを抽出
    var $targetColumn = columnArr.filter(function (el) {
      var $title = el.querySelector('.BoardColumnHeaderTitle');
      if(!$title) {
        return false;
      }
      return $title.textContent === 'DONE';
    });

    var $targetPill = $targetColumn[0].querySelectorAll('.Pill--small');
    var pillArr = [].slice.call($targetPill);
    var pointArr = pillArr.map(function (v) {
      return v.textContent * 1;
    });
    var count = pointArr.length;
    var points = pointArr.reduce(function (a, b) {
      return a + b;
    }, 0);

    console.log('完了数：', count);
    console.log('ポイント合計', points);
  }
})();