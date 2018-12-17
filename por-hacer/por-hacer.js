const fs = require('fs');


let listadoPorHacer = [];

const gardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) {
            console.log(`Error al grabar el dato  ${listadoPorHacer} en el data.json`);
            throw new Error(`Error al grabar el dato  ${listadoPorHacer} en el data.json`);
            return;
        } else {
            // resolved(`tabla-${ base }`);
            console.log(`garbado con exito ${listadoPorHacer} en data.json`);
            return;
        }
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    // console.log(listadoPorHacer);
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    gardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        gardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    // primera fomra de hacer
    if (true) {
        let nuevoListado = listadoPorHacer.filter(tarea => {
            return tarea.descripcion !== descripcion
        });

        if (listadoPorHacer.length === nuevoListado.length) {
            return false;
        } else {
            listadoPorHacer = nuevoListado;
            gardarDB();
            return true;

        }
    } else {




        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
        if (index >= 0) {
            listadoPorHacer.splice(index, 1);

            gardarDB();
            return true;
        } else {
            return false;
            //  throw new Error(`LA tarea ${ descripcion } No existe`)
        }
    }

}

module.exports = {
    crear,
    gardarDB,
    getListado,
    actualizar,
    borrar

}