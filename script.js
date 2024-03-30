function changeBackground() {
    const images = [
        'images/chinesesunshine.jpeg',
        'images/darksunshine.jpeg',
        'images/lebronsunshinecover.jpg'
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    document.body.style.backgroundImage = `url('${selectedImage}')`;
    document.getElementById('nappi').style.display = 'none';
  
    const audio = document.getElementById('audio');
    audio.play();
}