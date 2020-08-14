// パララックスの移動量
const targetFactor = 0.25;
// 画面の縦幅
const windowHeight = Math.min(window.innerHeight, document.documentElement.clientHeight); 

// パララックスを当てる要素のHTMLCollectionをクラス名で取得
const parallax = document.getElementsByClassName('parallax');
// HTMLCollectionをHTMLElementの配列に変更
const targets = Array.prototype.slice.call(parallax);

// パララックス処理関数
function parallaxBackground() {
  // スクロールのY位置
  const scrollY = Math.max(window.pageYOffset, document.documentElement.scrollTop);

  // 配列に入っている全てのHTMLElementにパララックス処理をあてる
  for (const target of targets) {
    // 対象要素のdocument内での位置
    const targetOffsetTop = target.offsetTop;
    // パララックス処理をかけるスクロール位置
    const scrollYStart = targetOffsetTop - windowHeight;
    // 所定のスクロール位置に達したら、対象要素の背景画像にスクロール位置から算出した値をあてる。
    target.style.backgroundPositionY = (scrollY > scrollYStart) ? `${(scrollY - targetOffsetTop) * targetFactor}px` : 'top';
  }
}

// 画面読み込み時に一度パララックス処理をあてる
// 画面読み込み時に背景画像が一枚しか表示されないなら不要
document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(parallaxBackground);
});

// スクロールイベントにパララックス処理をあてる
window.addEventListener("scroll", () => {
  requestAnimationFrame(parallaxBackground);
});

