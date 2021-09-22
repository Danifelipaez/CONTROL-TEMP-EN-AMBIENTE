basic.forever(function () {
    while (input.temperature() < 23) {
        basic.showIcon(IconNames.No)
    }
    while (input.temperature() >= 23 && input.temperature() < 25) {
        basic.showIcon(IconNames.Sad)
    }
    while (input.temperature() >= 25 && input.temperature() < 34) {
        basic.showIcon(IconNames.Yes)
    }
    while (input.temperature() >= 34) {
        basic.showString("T_ALTA")
    }
})
