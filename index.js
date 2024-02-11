const anim = {
  top: { distance: "150%", origin: "top", opacity: 0, duration: 900 },
  bottom: { distance: "150%", origin: "bottom", opacity: 0, duration: 900 },
  left: { distance: "150%", origin: "left", opacity: 0, duration: 900 },
  right: { distance: "150%", origin: "right", opacity: 0, duration: 900 },
  rotate: {
    rotate: {
      x: 20,
      z: 40,
    },
    scale: 1.85,
    delay: 100,
    opacity: 0,
    duration: 600,
  },
  opacity: { opacity: 0, delay: 100, duration: 600, scale: 0.85 },
};

ScrollReveal().reveal(".firstTitle", { ...anim.top, duration: 900 });
ScrollReveal().reveal(".btns", { ...anim.left, delay: 600, duration: 600 });
ScrollReveal().reveal(".bg2", { ...anim.rotate, duration: 1000 });

ScrollReveal().reveal(".videoComp", { ...anim.bottom, duration: 1000 });
ScrollReveal().reveal(".skyImg", { ...anim.bottom, delay: 100 });
ScrollReveal().reveal(".skyText", { ...anim.bottom, delay: 200 });

ScrollReveal().reveal(".titleHome", anim.left);
ScrollReveal().reveal(".homeText", anim.opacity);
ScrollReveal().reveal(".bg3", anim.right);
ScrollReveal().reveal(".homeItem_1", { ...anim.bottom, delay: 0 });
ScrollReveal().reveal(".homeItem_2", { ...anim.bottom, delay: 100 });
ScrollReveal().reveal(".homeItem_3", { ...anim.bottom, delay: 200 });
ScrollReveal().reveal(".homeItem_4", { ...anim.bottom, delay: 300 });

ScrollReveal().reveal(".aerialTitle", anim.rotate);
ScrollReveal().reveal(".aerialBtn", anim.right);
ScrollReveal().reveal(".aerialItem_1", { ...anim.bottom, delay: 0 });
ScrollReveal().reveal(".aerialItem_2", { ...anim.bottom, delay: 100 });
ScrollReveal().reveal(".aerialItem_3", { ...anim.bottom, delay: 200 });
ScrollReveal().reveal(".aerialItem_4", { ...anim.bottom, delay: 300 });
ScrollReveal().reveal(".aerialVideo", { ...anim.rotate, duration: 1000 });


ScrollReveal().reveal(".clientsItem_1", {
  ...anim.left,
  delay: 0,
  duration: 600,
});
ScrollReveal().reveal(".clientsItem_2", {
  ...anim.left,
  delay: 100,
  duration: 600,
});
ScrollReveal().reveal(".clientsItem_3", {
  ...anim.left,
  delay: 200,
  duration: 600,
});
ScrollReveal().reveal(".clientsItem_4", {
  ...anim.left,
  delay: 300,
  duration: 600,
});
ScrollReveal().reveal(".clientsItem_5", {
  ...anim.left,
  delay: 400,
  duration: 600,
});
ScrollReveal().reveal(".clientsItem_6", {
  ...anim.left,
  delay: 500,
  duration: 600,
});






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

// Function to show video on hover
function showVideo(event) {
  console.log("event.target.classList: ", event.target.classList);
  if (event.target.classList.contains("aerialItemContent")) {
    const dataSrc = event.target.getAttribute("data-src");
    const targetVideoContainer = document.getElementById(dataSrc);
    const videoContainers = document.querySelectorAll(".video-container");
    videoContainers.forEach((container) => {
      container.style.display = "none";
    });
    targetVideoContainer.style.display = "block";
  }
}

// Attach event listener for hover
const items = document.querySelector(".aerialItems");
items.addEventListener("mouseover", showVideo);

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiperNext",
    prevEl: ".swiperPrev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


document.addEventListener('DOMContentLoaded', function() {
    const swiperLinks = document.querySelectorAll('.swiperLink');
    swiperLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const url = this.dataset.link;
        const width = 500;
        const height = 700;
        const left = (screen.width / 2) - (width / 2);
        const top = (screen.height / 2) - (height / 2);
        window.open(url, '_blank', `width=${width},height=${height},top=${top},left=${left}`);
      });
    });
  });



  
const swiperBlog = new Swiper(".mySwiperBlog", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiperNextBlog",
      prevEl: ".swiperPrevBlog",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });