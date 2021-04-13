import '../css/componentes.css';


export const f_saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} como estás, cuéntame?`;
    document.body.append( h1 );
}


