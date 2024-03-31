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
    if(randomIndex == 3){
        const depsi_audio = document.getElementById('depsi_audio');
        depsi_audio.play();
    }
    else{
        const audio = document.getElementById('audio');
        audio.play();
    }
    
}