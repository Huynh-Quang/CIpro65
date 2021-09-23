import { song } from "./data.js";

//Slideshow autoplay

for (let i = 1; i < 13; i++) {
    document.getElementById(`avatar${i}`).innerHTML = `<img src="${song[0].top100_VN[0].songs[i].avatar}"><i 
    class="fa fa-play" aria-hidden="true"></i>`;
    document.getElementById(`songName${i}`).innerText = song[0].top100_VN[0].songs[i].title;
    document.getElementById(`singer${i}`).innerText = song[0].top100_VN[0].songs[i].creator;
}
