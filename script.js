
let iframeReady = false;
let messagesQueue = [];
let data = {};

function connectToIframe() {
    // --- postMessage event handlers
    window.addEventListener("message", parseMessage);
}


function parseMessage(event) {
    if (!event || !event.data) return;
    data = event.data;

    // update text elements
    const iframe = document.getElementById("playcanvas-iframe");
    removeClass();
    updateText(data);
}

function updateText(dataFromPC){

    console.log('dataFromPC', dataFromPC);
    
    const texture = document.getElementById("texture-name");
    texture.innerHTML = dataFromPC.texture;

    const modelType = document.getElementById("model-type");
    modelType.innerHTML = dataFromPC.modelType;
}

function removeClass(){
    const textureText = document.getElementById('texture-name-parent');
    textureText.classList.remove("test-name");

    const modelTypeText = document.getElementById("model-type-parent");
    modelTypeText.classList.remove("test-name");
}


// -- execute
connectToIframe();
parseMessage();
