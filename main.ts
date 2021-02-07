let Distance = 0
serial.writeValue("x", 0)
basic.forever(function () {
    Distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    serial.writeValue("x", Distance)
    basic.showNumber(Distance)
    basic.pause(2000)
})
