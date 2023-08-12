console.log("Welcome to spotify!!");

let songIndex = 0;
let audioElement = new Audio('songs/0.mp3');
let masterPlay = document.getElementById('MasterPlay');
let progressBar = document.getElementById('progressBar');
let mainsong = document.getElementById('songnamemain');
let playing = document.getElementById('playing');
let songitems = Array.from(document.getElementsByClassName('songitems'));
let songs = [
    {songName: "Premonition - Yuka Kitamura", filePath: "songs/0.mp3", coverPath: "Banners/epilogue.jpeg"},
    {songName: "DARK SOULS III - Yuka Kitamura", filePath: "songs/1.mp3", coverPath: "Banners/epilogue.jpeg"},
    {songName: "Epilogue - Yuka Kitamura", filePath: "songs/2.mp3", coverPath: "Banners/epilogue.jpeg"},
    {songName: "Goblins From Mars - Bitter world", filePath: "songs/3.mp3", coverPath: "Banners/Bitterworld.jpeg"},
    {songName: "Goblins From Mars - Cold Blooded Love", filePath: "songs/4.mp3", coverPath: "Banners/ColdBloodedLove.jpeg"},
    {songName: "Daft Punk - Harder, Better, Faster, Stronger", filePath: "songs/5.mp3", coverPath: "Banners/HBFS.jpeg"},
    {songName: "k/DA - THE BADDEST", filePath: "songs/6.mp3", coverPath: "Banners/kda_baddest.jpeg"},
    {songName: "Layto - War", filePath: "songs/7.mp3", coverPath: "Banners/warlayto.jpeg"},
    {songName: "Egzod & Alter. - Believe I'm Leaving", filePath: "songs/8.mp3", coverPath: "Banners/believeIamleaving.jpeg"},
    {songName: "Ship Wrek & Easy - Fools Gold", filePath: "songs/9.mp3", coverPath: "Banners/Fool'sGold.jpeg"},
    {songName: "Aldia - Scholar of the First Sin", filePath: "songs/10.mp3", coverPath: "Banners/darksoul2.jpeg"}
]

songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        playing.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        playing.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=> {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})

// progressBar.addEventListener('change', ()=>{
//     let time = (parseInt(progressBar.value)/100) * audioElement.duration;
//     audioElement.currentTime=time;
// })

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        songIndex = parseInt(e.target.id);
        mainsong.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        playing.style.opacity = 1;

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>10){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    mainsong.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<0){
        songIndex = 10;
    }
    else{
        songIndex -= 1;
    }
    mainsong.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
