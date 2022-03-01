//function ajax(url, metodo='get') {   // ---> valor en argumentos por default
function ajax(url, metodo) {
    let xhr = new XMLHttpRequest
    xhr.open(metodo||'get',url)         // ---> valor en método con short circuit operator
    xhr.send()

    return xhr
}

function getNombreArchivo(id) {
    return 'plantillas/' + id + '.html'     //solución con Short circuit operator
}

function marcarLink(id) {
    let links = document.querySelectorAll('a')
    links.forEach( link => {
        if(link.id == id) {
            link.classList.add('active')
        }
        else {
            link.classList.remove('active')
        }
    })
}

function initJS (id) {

    switch (id) {
            /* Inicializo el código de la plantilla de Inicio */
        case 'inicio':
            initInicio()
            break

            /* Inicializo el código de la plantilla de Alta */
        case 'alta':
            initAlta()
            break

            /* Inicializo el código de la plantilla de Contacto */
        case 'contacto':
            initContacto()
            break

            /* Inicializo el código de la plantilla de Nosotros */
        case 'nosotros':
            initNosotros()
            break

            /* Inicializo el código de la plantilla de Default (Inicio) */
        case 'default':
            initInicio()
            break
    }
}

function cargarPlantilla(id) {
    let main = document.querySelector('main')

    let archivo = getNombreArchivo(id)
    let xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status = 200) {

            // Cargo el HTML de la plantilla elegida
            main.innerHTML = xhr.response

            // Cargo el JS de la plantilla elegida
            initJS(id)
        }
    })
}


/* ----------------------------------------------------------------------------- */
/*     Carga de las vistas/plantillas de navegación dentro del elemento main     */
/* ----------------------------------------------------------------------------- */

function iniPlantillas() {
    let links = document.querySelectorAll('a')
    //console.log(links)

    /* --------------------------------------------- */
    /*           Carga de la vista inicial           */
    /* --------------------------------------------- */
    let id = location.hash.slice(1) || 'inicio'
    marcarLink(id)
    cargarPlantilla(id)


    /* --------------------------------------------- */
    /*       Carga de la vista de navegación         */
    /* --------------------------------------------- */
    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id
            console.log(id)
            location.hash = id
        })
    })

    window.addEventListener('hashchange', () => {
        //console.log('La url cambió')

        let id = location.hash.slice(1) || 'inicio'
        marcarLink(id)
        cargarPlantilla(id)
    })
}

function start() {
    console.warn('start...')
    iniPlantillas()

}

start()