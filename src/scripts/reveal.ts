/**
 * IntersectionObserverを使って、data-reveal属性の要素をふわっと表示
 * prefers-reduced-motion を尊重して動きを制御
 */
function initReveal() {
  // prefers-reduced-motion のチェック
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // data-reveal属性を持つ要素を取得
  const elements = document.querySelectorAll('[data-reveal]');

  if (elements.length === 0) return;

  // IntersectionObserverのオプション
  const options = {
    threshold: prefersReducedMotion ? 0 : 0.1, // 動きを減らす場合は早期に表示
    rootMargin: prefersReducedMotion ? '0px' : '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // 一度表示したら監視を解除
      }
    });
  }, options);

  // 各要素を監視開始
  elements.forEach((el) => {
    observer.observe(el);
  });
}

// DOMContentLoaded後に実行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}

