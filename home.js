function changemode(){
     let mybody = document.body;
      mybody.classList.toggle('mydark')
          if(document.body.classList.contains("mydark"))
           {
                 icon.src="https://static.vecteezy.com/system/resources/previews/000/550/828/original/sun-icon-vector.jpg"; 
           }
                        else{
                 icon.src="https://img.freepik.com/free-icon/last-quarte-phase-moon_318-824.jpg";
                           }
      }
function loadCoupon(){
      document.getElementById('coupon').style.visibility='visible';
      document.getElementById('main').style.opacity='0.7';
}
function closeCoupon(){
      document.getElementById('coupon').style.visibility='hidden';
      document.getElementById('main').style.opacity='1';
}
