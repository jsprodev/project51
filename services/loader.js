let showLoader = {
  show: () => {
    const loadingImage = `<div id="loading">
                            <div id="loading-image" alt="Loading..." />
                        </div>`;
    const body = document.querySelector("#content");
    body.innerHTML += loadingImage;
  }
};

let hideLoader = {
  hide: () => {
    let loader = document.querySelector("#loading");
    loader.parentNode.removeChild(loader);
    // document.querySelector("#loading").outerHTML = "";
  }
};

export { showLoader, hideLoader };
