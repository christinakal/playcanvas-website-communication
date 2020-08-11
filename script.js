let iframeContent;
let iframeReady = false;
let messagesQueue = [];
let data = {};

function connectToIframe() {
    iframeContent = document.getElementsByClassName("playcanvas-iframe").contentWindow;

    // --- postMessage event handlers
    window.addEventListener("message", parseMessage);
}


function parseMessage(event) {
    if (!event.data) return;
    data = event.data;

    // update text elements
    updateText(data);
}


function updateText(dataFromPC){
    console.log('dataFromPC', dataFromPC);
    const texture = document.getElementById("texture-name");
    texture.innerHTML = dataFromPC.texture;

    const modelType = document.getElementById("model-type");
    modelType.innerHTML = dataFromPC.modelType;
}


// -- execute
connectToIframe();
parseMessage();
