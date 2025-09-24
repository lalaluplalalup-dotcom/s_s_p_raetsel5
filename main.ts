let zufall = 0
input.onGesture(Gesture.Shake, function () {
    zufall = randint(1, 30)
    if (zufall == 1) {
        basic.showIcon(IconNames.Scissors)
    }
    if (zufall == 2) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (zufall == 3) {
        basic.showIcon(IconNames.Square)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
