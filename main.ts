function getInput(){
    return input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) 

    
let wasPressed = false

let score = 0

while(true){
    if (getInput()){
        if (!wasPressed) {

        }
        wasPressed = true
    }else{
        if (wasPressed){

        }
        wasPressed = false
    }
}