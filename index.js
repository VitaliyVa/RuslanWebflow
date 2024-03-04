// Отправляем высоту в родительское окно при загрузке и каждый раз, когда размер страницы изменяется
function sendHeight() {
  var height = document.body.scrollHeight;
  parent.postMessage({ height: height }, "*");
}

window.onload = sendHeight;
window.onresize = sendHeight;



let currentVideoSrc = document
  .getElementById("videoPlayer")
  .getAttribute("src");

// Function to check the screen resolution and change the video source accordingly
function checkResolutionAndSetVideo() {
  let newSrc;
  if (window.innerWidth >= 1024) {
    // Desktop
    newSrc = document
      .getElementById("videoPlayer")
      .getAttribute("data-desktop-src");
  } else if (window.innerWidth >= 768) {
    // Laptop
    newSrc = document
      .getElementById("videoPlayer")
      .getAttribute("data-laptop-src");
  } else {
    // Mobile
    newSrc = document
      .getElementById("videoPlayer")
      .getAttribute("data-mobile-src");
  }

  if (newSrc !== currentVideoSrc) {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = newSrc;
    currentVideoSrc = newSrc;
  }
}

// Check the resolution on page load and resize
window.addEventListener("resize", checkResolutionAndSetVideo);
checkResolutionAndSetVideo();

document.addEventListener("DOMContentLoaded", function () {
  var homeVideo = document.querySelector(".homeVideo");
  var video = homeVideo.querySelector("video");

  homeVideo.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      homeVideo.classList.add("active");
    } else {
      video.pause();
      homeVideo.classList.remove("active");
    }
  });
});
