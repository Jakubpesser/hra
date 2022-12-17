let wasPressed = false
let end_round = 0
let start_round = 0
let sound_length = 0
let score = 0
let get_input = () => {
    return input.buttonIsPressed(Button.A);
}
let make_new_round = () => {
    sound_length = randint(500, 5000)
    music.playTone(Note.A5, sound_length)
}
let calc_score = (time: number) => {
    console.log(sound_length)
    console.log(time)
    if (Math.abs(sound_length - time) < 500) {
        score += 1;
    }
        if (Math.abs(sound_length - time) < 200) {
            score += 1;
    }
    if (Math.abs(sound_length - time) < 50) {
        score += 1;
    } // když to bude ještě blíž dostanete bod navíc
    whaleysans.showNumber(score)
    make_new_round()
}
let on_button_pressed = () => {
    start_round = control.millis();
}
let on_button_released = () => {
    end_round = control.millis();
    calc_score((end_round - start_round));
}
make_new_round()
while (true) {
    if (get_input()) {
        if (!(wasPressed)) {
            on_button_pressed();
        }
        wasPressed = true
    } else {
        if (wasPressed) {
            on_button_released();
        }
        wasPressed = false
    }
    if (score >= 10) {
        basic.showString("Win!")
        break
    }
}
