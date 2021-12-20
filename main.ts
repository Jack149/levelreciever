radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 111) {
        TILT += 1
        music.setBuiltInSpeakerEnabled(true)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.stopAllSounds()
    } else {
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.A, function () {
    if (true) {
        basic.showNumber(TILT)
        basic.pause(2000)
        basic.clearScreen()
    }
})
let TILT = 0
radio.setGroup(1)
radio.setTransmitPower(7)
music.setVolume(255)
TILT = 0
