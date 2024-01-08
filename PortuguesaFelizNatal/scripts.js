export function createMemoryElement(memory) {
  let mediaWrapper = document.createElement("div");
  let media;
  
  if (memory.type === "video") {
    media = document.createElement("video");
    media.src = memory.source;
    if (memory.poster) {
      media.poster = memory.poster;
    }
    media.autoplay = true;
    media.loop = true;
    media.muted = true;
    media.setAttribute("playsinline", "");

    // Define the size and object-fit for the video
    media.style.width = "100%";
    media.style.height = "100%";
    media.style.objectFit = "cover";

    // Append the video element to the wrapper
    mediaWrapper.appendChild(media);
    mediaWrapper.classList.add("tall");
  } else {
    // For images, as it was before
    media = document.createElement("img");
    media.src = memory.source;
    media.alt = memory.title;
    mediaWrapper.appendChild(media);
  

  const aspectRatioObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const { width, height } = entry.contentRect;
      const aspectRatio = width / height;

      mediaWrapper.classList.remove("wide", "tall", "big");
      mediaWrapper.setAttribute("loading","lazy")

      if (aspectRatio > 1.5) {
        mediaWrapper.classList.add("wide");
      } else if (aspectRatio < 0.7) {
        mediaWrapper.classList.add("tall");
      } else {
        if (width > 500 && height > 400) {
          mediaWrapper.classList.add("big");
        } else {
          mediaWrapper.classList.add("tall");
        }
      }
    }
  });
  media.onload = function () {
    mediaWrapper.appendChild(media);

    aspectRatioObserver.observe(mediaWrapper);
  };
}



  const title = document.createElement("h2");
  title.textContent = memory.title;


  return mediaWrapper;
}

