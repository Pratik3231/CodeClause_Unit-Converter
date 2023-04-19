var Inch = 
    document.getElementById('Inch');

var Feet= 
    document.getElementById('Feet');

    Inch.addEventListener('input' , function(){
        let I = this.value;
        let F = I/12;
        if(!Number.isInteger){
            F = F.toFixed(2);
        };
        Feet.value = F;
    });

    Feet.addEventListener('input' , function(){
        let F = this.value;
        let I = F*12;

        if(!Number.isInteger){
            I = I.toFixed(2);
        };
        Inch.value = I;
    });