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
user.simvol(6,'#');
user.simvol(6,'#21');

let randomSimvolAdd = "±§!@#$%^&*+~?/><;:'\"";
function getRandomLetter() {
  return randomSimvolAdd[Math.floor(Math.random() * randomSimvolAdd.length)];
}
user.simvol(8, getRandomLetter())
user.simvol(4, getRandomLetter())
user.simvol(5, getRandomLetter())
user.simvol(6, getRandomLetter())