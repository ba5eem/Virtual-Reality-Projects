var message = function (msg) {
    var el = document.querySelector('.message');
    el.textContent = msg;
}

var canvas = document.getElementById('application-canvas');
var app = new pc.Application(canvas, {
    mouse: new pc.Mouse(canvas),
    touch: new pc.TouchDevice(canvas),
    vr: true
});

app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

// use device pixel ratio
app.graphicsDevice.maxPixelRatio = window.devicePixelRatio;

app.start();

// create camera
var c = new pc.Entity();
c.addComponent('camera', {
    clearColor: new pc.Color(44/255, 62/255, 80/255),
    farClip: 10000
});
app.root.addChild(c);

var l = new pc.Entity();
l.addComponent("light", {
    type: "directional",
    range: 10
});
l.translate(0,10,0);
app.root.addChild(l);

// this is creating cubes for demo
var createCube = function(x,y,z) {
    var cube = new pc.Entity();
    cube.addComponent("model", {
        type: "box",
    });
    cube.setLocalScale(1,1,1);
    cube.translate(x, y, z);
    app.root.addChild(cube);
};

// create a grid of cubes with for loop
var SIZE = 4;
for (var x = 0; x < SIZE; x++) {
    for (var y = 0; y < SIZE; y++) {
        createCube(2*x - SIZE, -1.5, 2*y - SIZE);
    }
}

// activate function to start VR - its started with mouse click on window
var activate = function () {
    if (app.vr && app.vr.display) {
        c.camera.enterVr(function (err) {
            if (err) {message(err);}
            message("");
        });
    } else {
        message("WebVR not available")
    }
};

app.mouse.on("mousedown", function () {
    //activate();
    console.log('TODO: To activate uncomment in app.mouse.on')
});

if (app.touch) {
    app.touch.on("touchend", function () {
        if (!c.camera.vrDisplay) {
            // if not in VR, activate
            activate();
        } else {
            // otherwise reset camera
            c.camera.vrDisplay.reset();
        }
    });
}

app.vr.on("ready", function (displays) {
    message("VRDisplays: " + displays.length);
});

// hook up window resize events
window.addEventListener("resize", function () {
    app.resizeCanvas(canvas.width, canvas.height);
});