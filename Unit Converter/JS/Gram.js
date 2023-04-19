var Gr = 
    document.getElementById('Gr');

var Kg =
    document.getElementById('Kg');

    Gr.addEventListener('input' , function(){
        let g = this.value;
        let kg = g/1000;

        if(!Number.isInteger){
            kg = kg.toFixed(2);
        };
        Kg.value = kg;
    });

    Kg.addEventListener('input' , function(){
        let kg = this.value;
        let g = kg * 1;

        if(!Number.isInteger){
            g = g.toFixed(2);
        };
        Gr.value = g;
    });