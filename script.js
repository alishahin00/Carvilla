
  const track = document.querySelector('.slider-track');
  const carlists = document.querySelectorAll('.carlist');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  let index = 0;

  function updateSlider() {
    const slideWidth = carlists[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index < carlists.length - 1) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  // Optional: update on resize
  window.addEventListener('resize', updateSlider);

