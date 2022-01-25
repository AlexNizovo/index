class Obj {
    _getRandomLetter() {
        let randomSimvolAdd = "±§!@#$%^&*+~?/><;:'\"";
        return randomSimvolAdd[Math.floor(Math.random() * randomSimvolAdd.length)];
      }
    simvol (number, simvOl, question) {
        if(question == true){
          simvOl = this._getRandomLetter()
            for (let index = 0; index < number; index++) {
                console.log(Array(index).fill(simvOl).join(''))
            } 
        } else {
            if (simvOl.length == 1) {
                for (let index = 0; index < number; index++) {
                   console.log(Array(index).fill(simvOl).join(''))
                } 
            } else {
               console.log('Ошибка ввода символа')
            }
        }
    }
}

const user = new Obj();
user.simvol(6, 'Z', confirm('Использовать рондомный символ?'))