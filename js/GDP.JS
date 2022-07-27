document.querySelector('#submit').addEventListener('click',


function(){

    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let Menu_selec = document.querySelector('#Menu_selec').value;
    let Menu_selec2 = document.querySelector('#Menu_selec2').value;
    let Menu_selec3 = document.querySelector('#Menu_selec3').value;

    let url = "http://api.whatsapp.com/send?phone=529811704093&text=*_ELEGANT RESTAURANT_*%0A*PEDIDO SOLICITADO POR:*%0A %0A*¿Cual es tu Nombre?*%0A" + cliente + "%0A*Indica la fecha de tu orden*%0A"
    + fecha + "%0A*Indica la hora que realizo el pedido*%0A" + hora + "%0A*Producto Seleccionados*%0A" + Menu_selec + "%0A*Producto Seleccionados*%0A" + Menu_selec2 + "%0A*Producto Seleccionados*%0A" + Menu_selec3;
    
    window.open(url);

});