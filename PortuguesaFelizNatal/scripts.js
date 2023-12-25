export function createMemoryElement(memory) {



  let media;
  if (memory.type === "video") {
    media = document.createElement("video");
    media.src = memory.source;
    media.poster = memory.poster;
    media.autoplay = true;
    media.loop = true;
    media.muted = true;
    media.setAttribute("playsinline", "");
  } else {
    media = document.createElement("img");
    media.src = memory.source;
    media.alt = memory.title;
  }

  const mediaWrapper = document.createElement("div");


  const aspectRatioObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const { width, height } = entry.contentRect;
      const aspectRatio = width / height;

      if (aspectRatio > 1.5) {
        mediaWrapper.classList.add("wide");
      } else if (aspectRatio < 0.7) {
        mediaWrapper.classList.add("tall");
      } else {
        if (Math.random() < 0.3) {
          mediaWrapper.classList.add("big");
        }
      }
    }
  });

  media.onload = function () {
    mediaWrapper.appendChild(media);

    aspectRatioObserver.observe(mediaWrapper);
  };



  const title = document.createElement("h2");
  title.textContent = memory.title;


  return mediaWrapper;
}