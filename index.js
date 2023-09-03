const videoFeed = document.getElementById("video-feed")

navigator.mediaDevices.getUserMedia(
{video: true}
).then(stream => {
    videoFeed.srcObject = stream;
})