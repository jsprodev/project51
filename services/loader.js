let showLoader = {
  show: () => {
    const loadingImage = `<div id="loading">
                            <div id="loading-image" alt="Loading..." />
                        </div>`;
    const body = document.querySelector("body");
    body.innerHTML += loadingImage;
  }
};

let hideLoader = {
  hide: () => {
    document.querySelector("#loading").outerHTML = "";
  }
};

export { showLoader, hideLoader };
