function parallaxBackground() {
  const targetFactor = 0.25; // パララックスの移動量
  const windowHeight = document.documentElement.clientHeight; // 画面の高さ

  const parallax = document.getElementsByClassName('parallax');
  const targets = Array.prototype.slice.call(parallax);
  const scrollY = Math.max(window.pageYOffset, document.documentElement.scrollTop);

  for (const target of targets) {
    const targetOffsetTop = target.offsetTop;
    const scrollYStart = targetOffsetTop - windowHeight;

    if(scrollY > scrollYStart){
      target.style.backgroundPositionY = `${(scrollY - targetOffsetTop) * targetFactor}px`;
    }else{
      target.style.backgroundPosition ='center top';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(parallaxBackground());
});

window.addEventListener("scroll", () => {
  requestAnimationFrame(parallaxBackground());
});

