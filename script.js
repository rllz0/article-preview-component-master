document.querySelector('.share-button').addEventListener('click', function() {
    document.querySelector('.share-popup').classList.toggle('active');
    this.classList.toggle('active');
  });