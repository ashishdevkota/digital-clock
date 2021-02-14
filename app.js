
let clock=()=>{
    const fullDate=new Date();
    let hours=fullDate.getHours();
    let minutes=fullDate.getMinutes();
    let seconds=fullDate.getSeconds();
    
     if(hours<10){
        hours="0"+hours;
     }
     if(minutes<10){
        minutes="0"+minutes;
     }
     if(seconds<10){
        seconds="0"+seconds;
     }

    document.querySelector('#hours').textContent=hours + ":";
    document.querySelector('#minutes').textContent=minutes+ ":";
    document.querySelector('#seconds').textContent=seconds;    


 let date=fullDate.toLocaleDateString();
 document.querySelector('#date').textContent="Date : "+ date;

}

setInterval(clock,100);

//toggle
let body=document.querySelector('body'); 
let checkedbox=document.querySelector('#toggle');
checkedbox.addEventListener('click',(e)=>{
   if(body.className==""){
            body.classList.add('active');
         }else{
            body.classList.remove('active');
         }
})
