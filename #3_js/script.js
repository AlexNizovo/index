class Obj {
    simvol (number, simvOl) {
        if (simvOl.length == 1) {
            for (let index = 0; index < number; index++) {
                console.log(Array(index).fill(simvOl).join(''))
            } 
        } else {
            console.log('Ошибка ввода символа')
        }
    }
}
const user = new Obj();
user.simvol(10,'#');
user.simvol(23, '')
