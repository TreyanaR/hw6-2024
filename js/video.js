var video
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
});
//play video
 document.querySelector("#play").addEventListener("click", function(){
	video.play();
	console.log(video.playbackRate)
 });
//pause video
 document.querySelector("#pause").addEventListener("click", function(){
	video.pause()
 });
//reduce speed 
function reduceSpeed() { 
	video.playbackRate *= 0.9;
	console.log(video.playbackRate)
} 
document.querySelector("#slower").addEventListener("click", reduceSpeed);
//speed up
function speedUp(){
	video.playbackRate /= .9;
	console.log(video.playbackRate)
}
document.querySelector("#faster").addEventListener("click", speedUp);
//skip ahead
function skipAhead(){
	video.currentTime+=10;
	console.log(video.currentTime);
	if (video.currentTime >=video.duration){
		video.currentTime=0
		video.pause()
	}
}
document.querySelector("#skip").addEventListener("click",skipAhead)

//mute

let muteButton = document.querySelector("#mute");
function Mute(){
	if(video.volume>0){
		video.volume=0
		muteButton.innerHTML = "Unmute"
	}
	else{
		video.volume = 1
		muteButton.innerHTML = "Mute"
	};
}
muteButton.addEventListener("click", Mute);

//old school
function applyOldSchool(){
	video.classList.add("oldSchool");
}
document.querySelector("#vintage").addEventListener("click",
	applyOldSchool);

//original
function applyOriginal(){
	video.classList.remove("oldSchool");
}
document.querySelector("#orig").addEventListener("click",applyOriginal)
 
