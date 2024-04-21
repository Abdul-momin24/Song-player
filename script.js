var arr=[
    {
        songName:"Jale 2",
        image:"./images/jale.jpg",
        Songurl:"./music/Jale2.mp3",
        time:"3.45",
    },
    {
        songName:"Pehle bhi main",
        image:"./images/animal1.jpg",
        Songurl:"./music/PehleBhiMain.mp3",
        time:"4.20",
    },

    {
        songName:"Tu Hai Kahan?",
        image:"./images/Tuhai.jpeg",
        Songurl:"./music/TuHai.mp3",
        time:"3.00",
    },
    {
        songName:"Bhaag D.K.Bose",
        image:"./images/BhaagDKB.jpeg",
        Songurl:"./music/bhaagDK.mp3",
        time:"3.52",
    },
];

let flag=0;

var audio = new Audio()
// prmise which containesaudio
let seleecteddSong= 0;
let poster = document.querySelector("#left");


let plays = document.querySelector("#play");
let forward = document.querySelector("#forward");
let backward = document.querySelector("#backward");




function addSongs(){
        let clutter="";
        arr.forEach(function(details, idx){
            clutter+=`
            <div class="song-card" id="${idx}">
                <div id="part1">
                    <img src="${details.image}" alt="" >
                    <h2>${details.songName}</h2>
                    </div>
                    <div id="time">
                        <h6>${details.time}</h6>
                    </div>
                
            </div>`;
        }
    );
document.querySelector("#all-songs").innerHTML=clutter;

audio.src= arr[seleecteddSong].Songurl;

poster.style.backgroundImage = `url(${arr[seleecteddSong].image})`;

};


function AudioPlayer(){
    document.querySelector("#all-songs").addEventListener("click", function(e){
        seleecteddSong =e.target.id;
        addSongs();
        plays.innerHTML=`<i class="ri-pause-line"></i>`;
        flag=1;
        audio.play();
    });
    
};


plays.addEventListener("click",function(){
    if(flag ==0){
        plays.innerHTML=`<i class="ri-pause-line"></i>`
        addSongs();
        audio.play();
        flag=1;
    }else{
        addSongs();
        audio.pause();
        plays.innerHTML=`<i class="ri-play-fill"></i>`
        flag=0;
    }
    
});


forward.addEventListener("click",function(e){
    if(seleecteddSong < arr.length-1){
        seleecteddSong++;
        addSongs();
        audio.play();
    }
    else{
        forward.style.opacity=0.4;
        
    }
    
    
});


backward.addEventListener("click",function(e){
    if(seleecteddSong > 0){
        seleecteddSong--
        addSongs();
        audio.play();
    }
    else{
        backward.style.opacity=0.4;
        
    }
    
    
});






AudioPlayer();
addSongs();
