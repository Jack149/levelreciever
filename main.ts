radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 111) {
        music.setBuiltInSpeakerEnabled(true)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.stopAllSounds()
    } else {
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.A, function () {
    if (true) {
        basic.showNumber(0)
        basic.pause(2000)
        basic.clearScreen()
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
music.setVolume(255)
basic.forever(function () {
	
})
