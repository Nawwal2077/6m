for index in range(3):
    basic.show_string("SILA TENGOK INI  ")
radio.send_number(54321)
music._play_default_background(music.built_in_playable_melody(Melodies.DADADADUM),
    music.PlaybackMode.IN_BACKGROUND)

def on_forever():
    basic.show_icon(IconNames.GIRAFFE)
basic.forever(on_forever)
