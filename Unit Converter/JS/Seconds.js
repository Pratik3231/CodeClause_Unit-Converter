var Sec = 
      document.getElementById('Sec');
var Min =
      document.getElementById('Min');

      Sec.addEventListener('input' , function(){
        let sec = this.value;
        let min = sec/60;
        if(!Number.isInteger){
            min = min.toFixed(2);
        };
        Min.value = min;
      });

      Min.addEventListener('input' , function(){
        let min = this.value;
        let sec = 60*min;
        
         if(!Number.isInteger){
            sec = sec.toFixed(2);
         };
         Sec.value = sec;
      });