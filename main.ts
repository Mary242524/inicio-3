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
    if (input.compassHeading() < 315 && input.compassHeading() > 45) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.compassHeading() < 315 && input.compassHeading() > 45) {
    	
    } else {
    	
    }
})
