var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	let video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autioplay);
	video.loop = false;
	console.log("Loop is set to " + video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = document.getElementById("slider").value / 100;
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= .90;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /=0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip 10 Seconds");
	video.currentTime += 10;
	if(video.currentTime >= video.duration) {
		video.currentTime = 0;

	}
	console.log("VIdeo current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false) {
		video.muted = true;
		document.getElementById("mute").innerText = "Unmute";
		console.log("Mute");
	}
	else {
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
		console.log("Unmute");
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.getElementById("slider").value/100;
	console.log("The current value is " + (video.volume*100) + "%");
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.className = "video oldSchool"
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.className = "video"
});
