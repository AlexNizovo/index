// for (let index = 1; index < 10; index++) {
//     console.log( Array(index).fill('%').join('') )  
// }

function simvol (number, simvOl) {
    if (simvOl.length == 1) {
        for (let index = 0; index < number; index++) {
            console.log(Array(index).fill(simvOl).join(''))
        } 
    } else {
        console.log('Ошибка ввода символа')
    }
}

simvol( 10, '' )
simvol( 5, '8' ) 
