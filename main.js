status = "";

function setup()
{
    canvas = createCanvas(400, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded()
{
    console.log('Model Is Successfully Loaded');
    status = true;
}

function draw()
{
    image(video, 40, 100, 400, 350);
}