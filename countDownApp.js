function startCountDown(){
    const countDown =document.getElementById("countdown");
    countDown.style.display=' none';//hide initial display

    const minutesInput= document.getElementById("minutes");
    const countdownTimer=document.getElementById("countdownTimer");

    let timeInMinute=parseInt(minutesInput.value);//taking the minutes input from user
    let remainingTime=(timeInMinute*60); //convert minutes to seconds

    countdownTimer.style.display='block'; //show countdown element
 
    
    const down=setInterval(function() {
        // Code to be executed every 1000 milliseconds (1 second)
        remainingTime--;

        const minutes=Math.floor(remainingTime/60);
        const seconds=remainingTime%60;
     
    
        countdownTimer.innerHTML=`${minutes}m ${seconds}s`;

        if(remainingTime<=0){
            clearInterval(down);
            countdownTimer.innerHTML = 'Time up 🎉';
         }
      }, 1000);

}