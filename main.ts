radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Yes)
    }
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(6)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})
radio.setGroup(2)
