radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 111) {
        music.setBuiltInSpeakerEnabled(true)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        music.stopAllSounds()
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
