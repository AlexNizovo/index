// for (let index = 1; index < 10; index++) {
//     console.log( Array(index).fill('%').join('') )  
// }

function simvol (number, simvOl) {
    for (let index = 0; index < number; index++) {
        console.log(Array(index).fill(simvOl).join(''))
 } 
}

simvol( 10, '$' )
simvol( 5, '8' ) 
simvol( 12, '±', '#' )