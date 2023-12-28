let textIndex = 0;
    const texts = [
      '<a href="/">30 DAYS SATISFACTION GUARANTEE</a>',
      '<a href="/">FREE DELIVERY ON ORDERS OVER $40.00</a>',
      '<a href="/">50,000+HAPPY CUSTOMERS</a>',
      '<a href="/">100% MONEY GUARANTEE</a>'
    ];

    document.addEventListener('DOMContentLoaded', function () {
      updateText();
    });

    const textContainer = document.getElementById('text-container');

    textContainer.addEventListener('mousedown', handleSwipeStart);
    textContainer.addEventListener('touchstart', handleSwipeStart);

    function handleSwipeStart(e) {
      startX = e.clientX || e.touches[0].clientX;
      textContainer.addEventListener('mouseup', handleSwipeEnd);
      textContainer.addEventListener('touchend', handleSwipeEnd);
    }

    function handleSwipeEnd(e) {
      const endX = e.clientX || e.changedTouches[0].clientX;
      const deltaX = startX - endX;

      if (deltaX > 50) {
        showText('right');
      } else if (deltaX < -50) {
        showText('left');
      }

      textContainer.removeEventListener('mouseup', handleSwipeEnd);
      textContainer.removeEventListener('touchend', handleSwipeEnd);
    }

    function showText(direction) {
      if (direction === 'left') {
        textIndex = (textIndex - 1 + texts.length) % texts.length;
      } else {
        textIndex = (textIndex + 1) % texts.length;
      }

      updateText();
    }

    function updateText() {
      const textElement = document.getElementById('text');
      textElement.style.opacity = 0;

      setTimeout(() => {
        textElement.innerHTML = texts[textIndex];
        textElement.style.opacity = 1;
      }, 500);
    }