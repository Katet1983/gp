document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.querySelectorAll('.list-thumbnail');

    thumbnails.forEach(function(thumbnail) {
        var mainThumb = thumbnail.querySelector('.main-thumb');
        var hoverVideo = thumbnail.querySelector('.hover-video');
        var hoverImage = thumbnail.querySelector('.hover-image');

        function resetMediaState() {
            if (hoverVideo) {
                hoverVideo.pause();
                hoverVideo.currentTime = 0;
                hoverVideo.style.display = 'none';
            }
            if (hoverImage) {
                hoverImage.style.display = 'none';
            }
            mainThumb.style.display = 'block';
        }

        function playVideo() {
            hoverVideo.style.display = 'block';
            mainThumb.style.display = 'none';

            if (hoverVideo.readyState >= 2) {
                hoverVideo.play();
            } else {
                hoverVideo.addEventListener('loadeddata', function() {
                    hoverVideo.play();
                });
            }
        }

        thumbnail.addEventListener('mouseenter', function() {
            if (hoverVideo) {
                playVideo();
            } else if (hoverImage) {
                hoverImage.style.display = 'block';
                mainThumb.style.display = 'none';
            }
        });

        thumbnail.addEventListener('mouseleave', function() {
            resetMediaState();
        });

        thumbnail.parentElement.addEventListener('click', function() {
            resetMediaState();
        });
    });
});
// ---   END --- grid1.php --- list1.php------grid2.php ------------------

