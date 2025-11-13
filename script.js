var formulario = document.getElementById("pedidoForm");

function calcular() {
    var especialidad = formulario.especialidad.value;
    var pan = formulario.pan.value;

    var total = 0;

        if(especialidad == "clasica") {
    total = total + 80;}

       else if(especialidad == "bbq") {
    total = total + 100;}

       else if(especialidad == "tocino") {
    total = total + 120; }

       else if(especialidad == "doble") {
    total = total + 150; }

       else if(especialidad == "hawaiana") {
    total = total + 180; }

    else{
    alert("Por favor selecciona una especialidad");
    return; } 


        if(pan == "clasico") {
    total = total;}

    else if(pan == "ajonjoli") {
    total += 20; }

    else if(pan == "integral") {
    total += 20; }

    else if(pan == "brioche") {
    total += 50; }    

    else{
    alert("Por favor selecciona un tipo de pan");
    return; } 


    if(formulario.queso.checked == true){
    total += 5; }

    if(formulario.lechuga.checked == true){
    total += 5; }  
    
    if(formulario.jitomate.checked == true){
    total += 5; }    

    if(formulario.cebolla.checked == true){
    total += 5; }

    if(formulario.jalapeño.checked == true){
    total += 5; }

    if(formulario.huevo.checked == true){
    total += 5; }

    if(formulario.pepino.checked == true){
    total += 5; }

    if(formulario.champiñones.checked == true){
    total += 5; }

    if(formulario.tocino.checked == true){
    total += 5; }

    if(formulario.dobleQueso.checked == true){
    total += 5; }

    if(formulario.piña.checked == true){
    total += 5; }

    if(formulario.guacamole.checked == true){
    total += 5; }

    if(formulario.bbq.checked == true){
    total += 5; }

    if(formulario.chipotle.checked == true){
    total += 5; }

    if(formulario.mayonesa.checked == true){
    total += 5; }

    if(formulario.mostaza.checked == true){
    total += 5; }

    if(formulario.ketchup.checked == true){
    total += 5; }

    if(formulario.pepperoni.checked == true){
    total += 5; }

    if(formulario.arugula.checked == true){
    total += 5; }

    if(formulario.cebollaCaramelizada.checked == true){
    total += 5; }


   var cantidad = document.getElementById("cantidad").value;


    if(formulario.domicilio.checked == true){
    total += 30; }


    // formulario.total.value = 



    if(pan == "brioche"){
        if(formulario.jalapeño.checked == true){
            if(formulario.champiñones.checked == true){
                    alert("Has ganado una promoción");
                    total = total - 20;
        }
    }
 }

     total = total * cantidad;  
    document.getElementById('total').innerText = total
}