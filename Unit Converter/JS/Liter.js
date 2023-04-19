var Liter=
    document.getElementById('Liter');
  
var Mili=
    document.getElementById('Mili');

    Liter.addEventListener('input' , function(){
      let Li = this.value;
      let Mi = Li*1000;
      if(!Number.isInteger){
        Mi = Mi.toFixed(2);
    };
      Mili.value = Mi;
    });

    Mili.addEventListener('input' , function(){
      let Mi = this.value;
      let Li = Mi/1000;

      if(!Number.isInteger){
        Li = Li.toFixed(2);
      }; 

      Liter.value = Li;
    });