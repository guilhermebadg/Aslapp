const funcaobotao = document.querySelector('.funcaobotao')
   
funcaobotao.addEventListener('click', () => {
 window.scroll({top: window.innerHeight, behavior: "smooth"});
 funcaobotao.style.display = 'none';

})

var btnleiamais = document.querySelector("#btnleiamais");
var mais = document.querySelector("#mais");
   
btnleiamais.addEventListener('click', function() {
   
    if(mais.style.display === 'block'){
       mais.style.display = 'none';
       btnleiamais.innerHTML= 'Leia Mais';
    }else{
        mais.style.display = 'block';
        btnleiamais.innerHTML= 'Leia Menos';
    }

});
