import * as L from "leaflet"
import LeafletIconParams from "../classes/LeafletIconParams"

export default function leafletIcon(params) {
    return new L.Icon(new LeafletIconParams(params))
}