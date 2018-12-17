const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {

        alias: 'c',
        default: true,
        desc: 'Marca como Completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('borrar', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualizar el estado Completado de  la tarea', opts2)
    .help()
    .argv;


module.exports = {
    argv
}