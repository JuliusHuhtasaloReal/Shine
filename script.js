function changeBackground() {
    const images = [
        'images/chinesesunshine.jpeg',
        'images/darksunshine.jpeg',
        'images/lebronsunshinecover.jpg',
        'images/depsishine.png',
        'images/julle.png'
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    document.body.style.backgroundImage = `url('${selectedImage}')`;
    document.body.style.backgroundColor = 'black';
    document.getElementById('nappi').style.display = 'none';
    document.body.classList.toggle('zoomed');
  
    const audio = document.getElementById('audio');
    audio.play();
}