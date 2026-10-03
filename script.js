
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");

    if (sidebar.className === "sidebar") {
        sidebar.className = "sidebar open";   
        menuBtn.innerHTML = "&#10005;";       
    } else {
        sidebar.className = "sidebar";         
        menuBtn.innerHTML = "&#9776;";         
    }
}


function openVideo() {
    document.getElementById("videoModal").className = "modal show";
    document.getElementById("myVideo").play();       
}

function closeVideo() {
    const video = document.getElementById("myVideo");

    document.getElementById("videoModal").className = "modal";
    video.pause();                                   
    video.currentTime = 0;                          
}


function sendForm() {
    document.getElementById("formMessage").innerHTML = "Thank you! Your message has been sent.";
    document.getElementById("contactForm").reset();  
    return false;                                   
}
