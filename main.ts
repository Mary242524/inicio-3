input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
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
    if (input.lightLevel() < 100 && input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (input.lightLevel() < 100 && input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (input.compassHeading() > 316 || input.compassHeading() < 44) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (input.compassHeading() > 226 && input.compassHeading() < 315) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (input.compassHeading() > 135 && input.compassHeading() < 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
