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
        depsi_audio.loop = true;
    }
    else{
        const audio = document.getElementById('audio');
        audio.play();
        audio.loop = true;
    }
    setInterval(spawnAndMoveImage, 2000);
}


function spawnAndMoveImage() {
    // Define the number of pictures to spawn
    var numberOfPictures = 5; // Change this number to the desired amount of pictures

    // Loop to spawn multiple pictures
    for (var i = 0; i < numberOfPictures; i++) {
        // Create a new image element
        var img = document.createElement('img');

        // Set the source of the image
        img.src = 'images/sunshine_glasses.webp'; // Replace 'your_image_url_here.jpg' with the URL of your image

        // Set the ID of the image
        img.id = "spawning_picture";

        // Set some styles for the image
        img.style.position = 'absolute';
        img.style.left = Math.random() * (window.innerWidth - 100) + 'px'; // Adjust '100' as per your image size
        img.style.top = Math.random() * (window.innerHeight - 100) + 'px'; // Adjust '100' as per your image size

        // Append the image to the body
        document.body.appendChild(img);

        // Create a closure to capture the current value of img
        (function(img) {
            // After 1 second, remove the image
            setTimeout(function() {
                img.remove();
            }, 2000);
        })(img);
    }
}
  