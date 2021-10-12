radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        led.plot(2, 2)
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
})
