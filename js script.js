const avaca = document.querySelectorAll;('.btn-proximo');

avanca.array.forEach(button=> {
 button.addeventlitener('click',function(){
    const atual = document.queryselector('.ativo');
    const proximopasso = 'passo-' + this.getattribute('data-proximo');

    atual.classlist.remove('ativo');
    document.getelementByid(proximopasso).Claaslist.add('ativo');
 })   

 );