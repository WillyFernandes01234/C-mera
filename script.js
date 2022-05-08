function startVideoFromCamera(){
	const specs = {video:{width:1250, height: 540}}
     navigator.mediaDevices.getUserMedia(specs).then(stream=>{
     	const videoElement = document.querySelector("#video")
        videoElement.srcObject = stream
     }).catch(error=>{console.log(error)})}
window.addEventListener("DOMContentLoaded", startVideoFromCamera)