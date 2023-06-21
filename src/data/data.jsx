const obtenerDatos = async ruta => {
    try{
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${ruta}`);
        const resultado = await respuesta.json()
        return resultado
    }catch(error){
        return error;
    }
}

const obtenerDato = async ruta => {
    try{
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${ruta}`);
        const resultado = await respuesta.json()
        return resultado
    }catch(error){
        return error;
    }
}

const crearDato = async (datos,ruta) =>{
    const url = `${import.meta.env.VITE_API_URL}/${ruta}`;
    const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    if (!respuesta.ok) {
        console.log("error")
    }
}

const actualizarDato = async (datos,ruta) =>{
    const url = `${import.meta.env.VITE_API_URL}/${ruta}`;
    const respuesta = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    if (!respuesta.ok) {
        console.log("error")
    }
}

const eliminarDato = async ruta => {
    try{
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${ruta}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
        });
        const resultado = await respuesta.json()
        return resultado
    }catch(error){
        return error;
    }
}

export{
    obtenerDatos,
    crearDato,
    obtenerDato,
    actualizarDato,
    eliminarDato
}