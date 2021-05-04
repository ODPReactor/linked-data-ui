import React from "react"

import { PartWhole } from "odp-reactor-ui"

export function PartWholeExample() {
    const whole = {
        uri: "https://en.wikipedia.org/wiki/Car",
        depiction: "http://www.newdesignfile.com/postpic/2010/10/free-vector-car_144621.jpg",
        label: "A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods."
    }
    const parts = [

        {
            uri: "https://simple.wikipedia.org/wiki/Wheel",
            depiction: "https://webstockreview.net/images/wheel-clipart-9.jpg",
            label: "A wheel is a disc or circle-shaped mechanical device. Its main purpose is to allow things to roll; in other words, the wheel spins, and object on the wheels moves more easily along the ground. It is a simple machine."
        },
        {
            uri: "https://en.wikipedia.org/wiki/Steering_wheel",
            depiction: "https://clipground.com/images/steering-wheel-vector-png-8.png",
            label: "A steering wheel (also called a driving wheel or a hand wheel) is a type of steering control in vehicles."
        },
        {
            uri: "https://en.wikipedia.org/wiki/Engine",
            depiction: "https://img.etsystatic.com/il/46e084/1228375422/il_570xN.1228375422_346b.jpg?version=0",
            label: "An engine or motor is a machine designed to convert one form of energy into mechanical energy."
        },
    ]

    const defaultPartWholeStyle = {
        containerStyle: {
            width: 400
        },
        littleItemStyle: {
            width: 80
        },
        centerItemStyle: {
            width: 250
        }
    };

    return <PartWhole parts={parts} whole={whole} styles={defaultPartWholeStyle}/>
} 