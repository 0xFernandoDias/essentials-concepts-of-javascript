let obj = { }

const person = function (face, insta, wpp) {
    this.facebook = `${face}`
    this.instagram = `${insta}`
    this.whatsApp = `${wpp}`
}

obj = new person ('Fernando Dias', '_nand0.diaz', '993214670')
obj.name = 'Fernando'

console.log(obj)

//////////////////////////////
