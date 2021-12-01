// Muestra panel de busqueda
function mostrarPanel(){
    // Toma el menu de busqueda y le da ancho 100% 
    var panel = document.querySelector(".rightpanel");  
    panel.style.width = "100%";
    // cambia la funcion del boton
    var btnColapser = document.querySelector(".btn-colapser");
    if (btnColapser.hasAttribute("onclick","mostrarPanel()")) {
        btnColapser.setAttribute("onclick","ocultarPanel()")
    } 
    // Cambia el icono del boton
    var spansvg = btnColapser.childNodes[1];
    spansvg.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>';
    var ventana_ancho = $(window).width();
    if (ventana_ancho < 992) {    
        ocultarDetalles();
    }
    // Ajusta el panel de detalles para centrarlo 
    panel = document.querySelector(".detailContainer"); 
    panel.style.left = "";
    panel.className = "m-0 p-0 detailContainer mx-auto calc";   
}
// Oculta panel de busqueda
function ocultarPanel(){
    // Según el tamaño del viewport oculta el panel de detalles o no
    var ventana_ancho = $(window).width();
    if (ventana_ancho > 992) {   
        panel = document.querySelector(".detailContainer"); 
        panel.className = "m-0 p-0 detailContainer mx-auto";
        panel_ancho = $(panel).width();
        panel.style.left = "calc(50% - "+panel_ancho/2+"px)"; 
    }
    // Toma el menu de busqueda y le da ancho 0
    var panel = document.querySelector(".rightpanel");
    panel.style.width= "0px";
    var btnColapser = document.querySelector(".btn-colapser");
    // cambia la funcion del boton
    if(btnColapser.hasAttribute("onclick","ocultarPanel()")) {
        btnColapser.setAttribute("onclick","mostrarPanel()");
    }
    // Cambia el icono del boton
    var spansvg = btnColapser.childNodes[1];
    spansvg.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>';
}
// Muestra el menu Detalles
function mostrarDetalles(){
    // Toma el menu de detlles y lo ubica en la posición bottom 0
    var panel = document.querySelector(".detailContainer");  
    var ventana_ancho = $(window).width();
    if (ventana_ancho < 768) {
        // Si el ancho es de movil se asegura de que no sea muy grande
        panel.style.height = "fit-content";
    }else{
        panel.style.bottom= "0";
    }
    // Oculta más detalles (Listado de entregables)
    var moredetailsContainer = panel.querySelector(".moredetailsContainer");
    var hiddenDetails = panel.querySelectorAll(".d-md-block");
    hiddenDetails.forEach(hiddenDetails => {
        hiddenDetails.classList.add("d-none");
    });
    moredetailsContainer.classList.add("d-none");
    // cambia la funcion del boton
    var btnColapser = document.querySelector(".btn-colapser-vertical");
    if (btnColapser.hasAttribute("onclick","mostrarDetalles()")) {
        btnColapser.setAttribute("onclick","mostrarMasDetalles()")
    } 
    // Cambia el icono y el texto del boton 
    btnColapser.innerHTML = "Ver más";
    btnColapser.innerHTML += '<span class="ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 18"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg></span>';
    
}
// Amplia el menu Detalles
function mostrarMasDetalles(){
    var panel = document.querySelector(".detailContainer"); 
    // Muestra más detalles (Listado de entregables)
    var moreDetails = panel.querySelector(".moredetailsContainer");
    moreDetails.classList.remove("d-none");
    var hiddenDetails = panel.querySelectorAll(".d-md-block");
    var ventana_ancho = $(window).width();
    if (ventana_ancho < 768) {
        panel.style.height = "fit-content";
    }
    // Toma el menu de detlles y lo ubica en la posición bottom 0
    panel.style.bottom= "0";
    // Asigna el alto del contenedor de cards para que se muestre una card y media o la mitad de una card 
    var moreDetailsHeight = $(".detailItem").height();
    var moreDetails = panel.querySelector(".moreDetails");
    if (ventana_ancho < 425) {
        moreDetailsHeight = moreDetailsHeight * 0.8;
    }else{
        moreDetailsHeight = moreDetailsHeight * 1.7;
    }
    moreDetails.style.height = moreDetailsHeight + "px";
    
    hiddenDetails.forEach(hiddenDetails => {
        hiddenDetails.classList.remove("d-none");
    });
    // cambia la funcion del boton
    var btnColapser = document.querySelector(".btn-colapser-vertical");
    if (btnColapser.hasAttribute("onclick","mostrarMasDetalles()")) {
        btnColapser.setAttribute("onclick","mostrarDetalles()")
    } 
    if (ventana_ancho < 992) {    
        ocultarPanel();
    }
    // Cambia el icono y el texto del boton 
    btnColapser.innerHTML = "Ver menos";
    btnColapser.innerHTML += '<span class="ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 18"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></span>';
    
}
// Oculta el menu Detalles
function ocultarDetalles(){
    // Oculta el panel de detalles dejandolo en una posiución inaccequible
    var panel = document.querySelector(".detailContainer");
    panel.style.bottom= "-2000px";
    // cambia la funcion del boton
    var btnColapser = document.querySelector(".btn-colapser-vertical");
    if(btnColapser.hasAttribute("onclick","ocultarDetalles()")) {
        btnColapser.setAttribute("onclick","mostrarDetalles()");
    }
}
ocultarDetalles();

// Declaración de constantes
const list_element = document.getElementById('resultList');
const pagination_element = document.getElementById('pagination'); 
let current_page = 1; // Para cambiar la página inicial
let rows = 3; // Para cambiar la cantidad de resultados que se muestran
let list_items = list_element.getElementsByClassName("resultsToSort");
list_items = [...list_items];
let buttonNext = document.getElementById('pagination-next');
let buttonPrev = document.getElementById('pagination-prev');

// Sortea los resultados de busqueda (deshabilitado)
// $('.sort_button').on('click',Sort) // Asignar esa clase para el botón de sort;
function Sort() {
    // Sortea los elementos y los añade al contenedor
    $('.resultsToSort').sort(function(a,b) {
        // Según el numero de predio
            // return $(a).find(".numPredio").text() > $(b).find(".numPredio").text() ? 1 : -1;
        // Según la constructora
            return $(a).find(".constructorName").text() > $(b).find(".constructorName").text() ? 1 : -1;
    }).appendTo(list_element);
    // Guarda los elementos en una variable nueva
    let sorted_items = list_element.getElementsByClassName("resultsToSort");
    sorted_items = [...sorted_items];
    // Vacía el conetendor
    list_element.innerHTML = "";
    for (let i = 0; i < sorted_items.length; i++) {
        // agrega los nuevos elementos al contenedor
        list_element.append(sorted_items[i]);
    }
    // Paginación
    changePage(sorted_items, rows, current_page);
    setupPagination(sorted_items, rows);
}

//Paginación de resultados 
// Cambia los items dentro del contenedor 
function changePage(items, rows_per_page, page) {
    // Como page esta declarada desde 1 la igualo al conteo del computador (0,1,2 = 1,2,3)
    page--;
    for (let i = 0; i < items.length; i++) {
        // Toma todos los items para ocultarlos
        items[i].classList.add("d-none");
    }
    // Divide el array según la cantidad de filas por página
    let start = rows_per_page * page;
    let end = start + rows_per_page;
    // Selecciona los items que se van a mostrar
    let paginatedItems = items.slice(start, end);
    for (let i = 0; i < paginatedItems.length; i++) {
        // muestra los items seleccionados
        paginatedItems[i].classList.remove("d-none");
    }
    // Muestra la cantidad de resultados en pantalla
    var resultCount = document.querySelector(".resultsCount");
    // Mostrando resultados dinamico
    if (paginatedItems.length < rows_per_page) {
        resultCount.innerHTML = "Mostrando " + (start + 1 ) +"-" + (items.length) + " de "+ items.length + " resultados";
    }else{
        resultCount.innerHTML = "Mostrando " + (start + 1 ) +"-" + (end) + " de "+ items.length + " resultados";
    }
}
// Permite navegar entre las páginas y las limita
function setupPagination(items, rows_per_page) {
	let page_count = Math.ceil(items.length / rows_per_page);
    // Deshabilita el botón de retroceder cuando la página es la 1
    if (current_page == 1) {
        buttonPrev.setAttribute("disabled", "");
    }  
    // Avanza cuando el botón no esta deshabilitado
    buttonNext.addEventListener('click', function () {
        // Habilita el botón de retroceder
        if(buttonPrev.hasAttribute("disabled")){
            buttonPrev.removeAttribute("disabled", "");
        }
        // Valida que la página actual no sea la ultima página
        if (page_count > current_page) {
            var next_page = current_page + 1;
            current_page = current_page + 1;
            // Valida que la página siguiente tenga contenido
            if (next_page <= page_count ){
                changePage(items, rows, next_page);
            }
            // Valida que si es la ultima página deshabilite el botón 
            if(next_page == page_count ){
                buttonNext.setAttribute("disabled", "");
            }
        }
        });
    // Retrocede cuando el botón no esta deshabilitado
    buttonPrev.addEventListener('click', function () {
        // Habilita el botón de avanzar
        if(buttonNext.hasAttribute("disabled")){
            buttonNext.removeAttribute("disabled", "");
        }
        var prev_page = current_page - 1;
        current_page = current_page - 1;
        // Valida que la página actual no sea la primera página
        if (current_page >= 1) {
            changePage(items, rows, prev_page);
        }
        // Valida que si es la primera página deshabilite el botón
        if(prev_page == 1 ){
            buttonPrev.setAttribute("disabled", "");
        }
    });
}  
changePage(list_items, rows, current_page);
setupPagination(list_items, rows);


// Busca Coincidencias en los resultados de busqueda
jQuery.expr[':'].contains = function(a, i, m) { 
    // Transforma el texto del input en uppercase al igual que los elementos de busqueda
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
  };
$('#search').keyup(function (){
    $('.resultsToSort').removeClass('d-none');
    // $('.resultsToSort').removeAttribute('hidden','');
    var filter = $(this).val();
    // Busca las coincidencias en los numeros de predio
        // $('.resultsConatiner').find('.numPredio:not(:contains("'+filter+'"))').parent().parent().parent().parent().parent().addClass('d-none');
    // Busca las coincidencias en las constructoras
        $('.resultsConatiner').find('.constructorName:not(:contains("'+filter+'"))').parent().parent().parent().parent().addClass('d-none');
    // Busca las coincidencias en los numeros de predio y en las constructoras
        $('.resultsConatiner').find('.textForSearch:contains("'+filter+'")').parent().parent().parent().parent().parent().removeClass('d-none');
    // Muestra la cantidad de resultados en pantalla
    var resultCount = document.querySelector(".resultsCount");
    var newresults = $('.resultsToSort').not('.d-none');
    resultCount.innerHTML = "Encontramos " + newresults.length + " resultado";
    buttonNext.setAttribute("disabled", "");
    buttonPrev.setAttribute("disabled", "");
    if (newresults.length > 1) {
        resultCount.innerHTML += "s";
    }
    if (newresults.length == 0) {
        resultCount.innerHTML = "No encontramos resultados";
    }
    // Si no hay filtro de busqueda, se muestran todos los resultados
    if (filter == "") {
        buttonNext.removeAttribute("disabled", "");
        changePage(list_items, rows, current_page);
    }
});
// Mapa google maps
function initMap() {
    // Función inicial 
    map = new google.maps.Map(document.getElementById('dvMap'), {
        center: {lat: 4.917, lng: -74.017},
        zoom: 14
    })
    // Función más compleja
        // //map..
        // var latitud = parseFloat(document.getElementById("latitudModal").value)
        // var longitud = parseFloat(document.getElementById("longitudModal").value)

        // var map = new google.maps.Map(document.getElementById('dvMap'), {
        //     center: {
        //         lat: latitud,
        //         lng: longitud
        //     },
        //     zoom: 15
        // });
        // //marker..
        // var marker = new google.maps.Marker({
        //     position: {
        //         lat: latitud,
        //         lng: longitud
        //     },
        //     map: map,
        //     draggable: true
        // });
        // //dragend event of marker
        // google.maps.event.addListener(marker, 'dragend', function (evt) {
        //     $("#latitudModal").val(evt.latLng.lat().toFixed(6));
        //     $("#longitudModal").val(evt.latLng.lng().toFixed(6));
        //     map.panTo(evt.latLng);
        // });
}