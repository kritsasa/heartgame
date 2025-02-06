const startDate = new Date("2024-04-26T00:00:00"); // วันที่เริ่มคบกัน

function updateCountdown() {
    const now = new Date();
    let diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);
    
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    
    const seconds = Math.floor(diff / 1000);

    document.getElementById("countdown").innerHTML = 
        `<span>${years}</span> ปี 
         <span>${months}</span> เดือน 
         <span>${days}</span> วัน 
         <span>${hours}</span> ชั่วโมง 
         <span>${minutes}</span> นาที 
         <span>${seconds}</span> วินาที`;

    requestAnimationFrame(updateCountdown);
}

updateCountdown();
