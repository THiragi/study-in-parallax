const getParallaxStyle = factor =>　windowHeight => positionY => target => {
  const targetOffsetTop = target.offsetTop;
  const scrollYStart = targetOffsetTop - windowHeight;
  return (positionY > scrollYStart) ? `${(positionY - targetOffsetTop) * factor}px` : 'top';
};

const setStyle = fn => target => target.style.backgroundPositionY = fn(target);

window.onload = () => {
  const parallax = document.getElementsByClassName('parallax');
  const targets = Array.prototype.slice.call(parallax);

  const windowHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
  const parallaxCond = getParallaxStyle(0.25)(windowHeight);
  
  const loadStyle = parallaxCond(Math.max(window.pageYOffset, document.documentElement.scrollTop));
  targets.forEach(setStyle(loadStyle));

  window.addEventListener("scroll", () => {
    const scrollStyle = parallaxCond(Math.max(window.pageYOffset, document.documentElement.scrollTop));
    targets.forEach(setStyle(scrollStyle));
  });
};