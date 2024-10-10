input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
})
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    if (input.lightLevel() > 150) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
