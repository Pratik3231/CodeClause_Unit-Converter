var Km=
document.getElementById('Km');

var Meter=
document.getElementById('Meter');

Km.addEventListener('input', function(){
  let K = this.value;
  let M = K*1000;
  if(!Number.isInteger){
    M = M.toFixed(2);
};
  Meter.value = M;
});

Meter.addEventListener('input', function(){
  let M = this.value;
  let K = M/1000;
  
  if(!Number.isInteger){
    K = K.toFixed(2);
  }; 

  Km.value = K;
});

