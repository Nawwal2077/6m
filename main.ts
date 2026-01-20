for (let index = 0; index < 3; index++) {
    basic.showString("SILA TENGOK INI  ")
}
radio.sendNumber(54321)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
basic.forever(function () {
    basic.showIcon(IconNames.Giraffe)
})
