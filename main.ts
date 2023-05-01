function TurnLeft () {
    wuKong.setAllMotor(0, 80)
}
function Straight () {
    wuKong.setAllMotor(100, 100)
}
function TurnRight () {
    wuKong.setAllMotor(80, 0)
}
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # #
    `)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        Straight()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        TurnRight()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        TurnLeft()
    }
})
