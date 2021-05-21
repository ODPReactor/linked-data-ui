import React from "react"

import { PartWhole } from "odp-reactor-visualframes"

export function PartWholeExample2() {
    const whole = {
        uri: "https://arco.istc.cnr.it/ns/HistoricOrArtisticProperty/0100373516-0",
        source: "http://arco.istc.cnr.it/visualPatterns/sparql"
    }
    const parts = [
        {
            uri: "https://arco.istc.cnr.it/ns/HistoricOrArtisticProperty/0100373516-1",
            source: "http://arco.istc.cnr.it/visualPatterns/sparql"
        },
        {
            uri: "https://arco.istc.cnr.it/ns/HistoricOrArtisticProperty/0100373516-2",
            source: "http://arco.istc.cnr.it/visualPatterns/sparql"
        }
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