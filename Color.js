
class Color {
    #green
    #red
    #blue
   constructor(red, green, blue){
    //#:variable privée
    this.#red = red;
    this.#green = green;
    this.#blue = blue;
   } 

   //retourne la couleur format hexadécimal
    getHex () {
        return (
            this.#red.toString(16).padStart(2,'0') + 
            this.#green.toString(16).padStart(2,'0')  + 
            this.#blue.toString(16).padStart(2,'0')).toUpperCase();
    }
    addRed(value){
        this.#red = Math.min(this.#red + value, 255);
        return this;
    }
    addGreen(value){
        this.#green = Math.min(this.#green + value, 255);
        return this;
    }
    addBlue(value){
        this.#blue = Math.min(this.#blue + value, 255);
        return this;
    }
}
const red = new Color(240, 50, 15);
console.log(red);
red.blue = 24;
red.addGreen(14).addRed(5).addBlue(20);
console.log(red.getHex())


