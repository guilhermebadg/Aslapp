const funcaobotao = document.querySelector('.funcaobotao')
   
funcaobotao.addEventListener('click', () => {
 window.scroll({top: window.innerHeight, behavior: "smooth"});
 funcaobotao.style.display = 'none';

})
