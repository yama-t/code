(function() {
  "use strict";
  r();
  // 実行本体
  function r() {
    // カラムを全取得
    const $column = document.querySelectorAll('.BoardBody-column');
    const columnArr = [].slice.call($column);

    // DONEのカラムのみを抽出
    const $targetColumn = columnArr.filter(el => {
      const $title = el.querySelector('.BoardColumnHeaderTitle');
      if(!$title) {
        return false;
      }
      return $title.textContent === 'DONE';
    });

    // ポイントを抽出
    const $targetPill = $targetColumn[0].querySelectorAll('.Pill--small');
    const pillArr = [].slice.call($targetPill);
    const pointArr = pillArr.map(v => v.textContent * 1).filter(v => v);
    const count = pointArr.length;
    const points = pointArr.reduce((a, b) => a + b, 0);

    console.log('完了数：', count);
    console.log('ポイント合計', points);
  }
})();