document.addEventListener('DOMContentLoaded', () => {
  const urlInput = document.getElementById('urlInput');
  const submitButton = document.getElementById('submitButton');
  const thumbnailImg = document.getElementById('thumbnailImg');

  submitButton.addEventListener('click', () => {
    const url = urlInput.value;
    const youtubeId = getYouTubeId(url);
    const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
    thumbnailImg.src = thumbnailUrl;
    thumbnailImg.style.display = 'block';
  });

  function getYouTubeId(url) {
    const regex = /[?&]v=([^&#]*)/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : null;
  }
});
