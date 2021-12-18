radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 111) {
        music.setBuiltInSpeakerEnabled(true)
        soundExpression.giggle.play()
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
