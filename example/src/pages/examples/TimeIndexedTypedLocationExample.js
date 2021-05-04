import React from "react"
import { TimeIndexedTypedLocation } from "odp-reactor-ui"

export function TimeIndexedTypedLocationExample() {

    const titlPrevious = {
        addressLabel: "ITALIA, Piemonte, TO, Torino",
        cPropLabel: "'casa da pigione' (disegno architettonico) di Promis Carlo (sec. XIX, secondo quarto)",
        culturalProperty: "https://arco.istc.cnr.it/ns/HistoricOrArtisticProperty/0100374098-0",
        endTime: "1953",
        lat: "45.0122379",
        locationType: "https://w3id.org/arco/ontology/location/PreviousLocation",
        locationTypeLabel: "Luogo di provenienza / Collocazione precedente",
        long: "7.5177153",
        startTime: "1942/ante",
        tITLLabel: "Altra localizzazione 1 del bene: 0100374098-0",
        titl: "https://arco.istc.cnr.it/ns/TimeIndexedTypedLocation/0100374098-0-alternative-1",
    }

    const titlCurrent = {
        addressLabel: "ITALIA, Piemonte, TO, Torino",
        cPropLabel: "'casa da pigione' (disegno architettonico) di Promis Carlo (sec. XIX, secondo quarto)",
        culturalProperty: "https://arco.istc.cnr.it/ns/HistoricOrArtisticProperty/0100374098-0",
        endTime: "",
        lat: "45.071629",
        locationType: "https://w3id.org/arco/ontology/location/CurrentPhysicalLocation",
        locationTypeLabel: "Localizzazione fisica attuale",
        long: "7.68634",
        startTime: "",
        tITLLabel: "Localizzazione fisica attuale del bene: 0100374098-0",
        titl: "https://arco.istc.cnr.it/ns/TimeIndexedTypedLocation/0100374098-0-current",
    }

    const titls = [titlPrevious, titlCurrent]

    return <TimeIndexedTypedLocation timeIndexedTypedLocations={titls} />

}