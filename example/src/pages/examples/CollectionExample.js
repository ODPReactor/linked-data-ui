import React from "react"
import { Collection } from "linked-data-ui"

export function CollectionExample() {
    	
    const members = [
    {
        uri: "https://arco.istc.cnr.it/ns/Measurement/0100373430-0-1-height",
        label: "430 mm",
        depiction: "http://cdn.onlinewebfonts.com/svg/img_534766.png"
    },
    {
        uri: "https://arco.istc.cnr.it/ns/HistoricOrArtisticProperty/0100373430-0",
        label: "311 mm",
        depiction:"http://cdn.onlinewebfonts.com/svg/img_534766.png"
    },
]

const defaultCollectionStyle = {
    collectionContainerWidth: {
        width: '100%' // set this width to 120, 130, 140% to increase padding between items
    },
};

    return <Collection members={members} styles={defaultCollectionStyle} />
}