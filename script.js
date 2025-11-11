var formulario = document.getElementById("pedidoForm");

function calcular() {
    var especialidad = formulario.especialidad.value;
    var pan = formulario.pan.value;

    var total = 0;

        if(especialidad == "clasica") {
    total = total + 80;}

        if(especialidad == "bbq") {
    total = total + 100;}

        if(especialidad == "tocino") {
    total = total + 120; }

        if(especialidad == "doble") {
    total = total + 150; }

        if(especialidad == "hawaiana") {
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
    tota += 5; }

    if(formulario.lechuga.checked == true){
    tota += 5; }  
    
    if(formulario.jitomate.checked == true){
    tota += 5; }    

    if(formulario.cebolla.checked == true){
    tota += 5; }

    if(formulario.jalapeño.checked == true){
    tota += 5; }

    if(formulario.huevo.checked == true){
    tota += 5; }

    if(formulario.pepino.checked == true){
    tota += 5; }

    if(formulario.champiñones.checked == true){
    tota += 5; }

    if(formulario.tocino.checked == true){
    tota += 5; }

    if(formulario.dobleQueso.checked == true){
    tota += 5; }

    if(formulario.piña.checked == true){
    tota += 5; }

    if(formulario.guacamole.checked == true){
    tota += 5; }

    if(formulario.bbq.checked == true){
    tota += 5; }

    if(formulario.chipotle.checked == true){
    tota += 5; }

    if(formulario.mayonesa.checked == true){
    tota += 5; }

    if(formulario.mostaza.checked == true){
    tota += 5; }

    if(formulario.ketchup.checked == true){
    tota += 5; }

    if(formulario.pepperoni.checked == true){
    tota += 5; }

    if(formulario.arugula.checked == true){
    tota += 5; }

    if(formulario.cebollaCaramelizada.checked == true){
    tota += 5; }


   var cantidad = document.getElementById("cantidad").value;


    if(formulario.domicilio.checked == true){
    tota += 30; }


    formulario.total.value = total * cantidad;  

}