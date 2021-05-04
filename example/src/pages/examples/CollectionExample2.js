import React from "react"
import { Collection } from "odp-reactor-ui"

export function CollectionExample2() {
    	
    const members = [
    {
        // uri: "https://arco.istc.cnr.it/ns/Measurement/0100373430-0-1-height",
        label: "John Doe",
        depiction: "https://semantic-ui.com/images/avatar/large/elliot.jpg"
    },
    {
        // uri: "https://arco.istc.cnr.it/ns/HistoricOrArtisticProperty/0100373430-0",
        label: "Mary Jane",
        depiction:"https://semantic-ui.com/images/avatar/large/jenny.jpg"
    },
    {
        // uri: "https://arco.istc.cnr.it/ns/HistoricOrArtisticProperty/0100373430-0",
        label: "Bill Clinton",
        depiction:"https://semantic-ui.com/images/avatar/large/joe.jpg"
    },
]

const defaultCollectionStyle = {
    collectionContainerWidth: {
        width: '100%' // set this width to 120, 130, 140% to increase padding between items
    },
    entity: {
        entityContainer: {
            width: 140,
            textAlign: "center",
            boxSizing: "border-box",
            position: "relative",

        },
        entityDepiction: {
            width: 120,
            padding: 5,
            borderRadius: 9999,
        },
        entityDepictionContainer: {
            margin: 0
        }
    }
};

    return <Collection members={members} styles={defaultCollectionStyle} />
}