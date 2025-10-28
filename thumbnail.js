
const container = document.querySelector('div');
const video = container.querySelector('video');
const thumb = container.querySelector('.video-thumb');
const button = container.querySelector('.play-button');


container.addEventListener('click', () => {
  
    thumb.style.display = 'none';
    button.style.display = 'none';  
    video.classList.remove('hidden');
   video.play();

});
