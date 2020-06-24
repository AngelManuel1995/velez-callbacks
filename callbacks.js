'use strict'
const chalk = require('chalk')
function consultarVehiculos (usuario) {
    if(usuario.nombre === 'Andres'){
        return '4 Carros'
    }
    return '2 Carros'
}

function consultarUsuario ( usuarioId, respuesta ) {
    const usuarios = [
        {
            nombre:'Andres',
            id:'1'
        },
        {
            nombre:'Velez',
            id:'2'
        },
        {
            nombre:'David',
            id:'3'
        },
        {
            nombre:'Alejandro',
            id:'4'
        },
        {
            nombre:'Yulian',
            id:'5'
        }
    ]
  
    setTimeout(() =>{
        const usuario = usuarios.find(({id}) => id == usuarioId)
        if(!usuario){
            return respuesta(null, {code:404})
        } else {
            return respuesta(usuario, null)
        }
    }, 1000);

}

console.log(chalk.red.bold('Inicio de programa'))
consultarUsuario(2, (usuario, code) => {
    if(!usuario){
        return console.log(code)
    }
    console.log(consultarVehiculos(usuario))
})
console.log(chalk.red.bold('Fin de programa'))
