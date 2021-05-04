import { museumIcon, timeIcon, locationIcon } from "../../icon/ld-ui-icon";

// ${museumIcon(`${content.siteLabel} (${content.city})`)}

export default function tITLPopup(content) {
    return `<div class="tITL-popup" style="pointer-events: auto;transition: 0.7s;">
                ${museumIcon(content.culturalProperty)}
                ${timeIcon(content.timeInterval)}
                ${locationIcon(`${content.locationType} (${content.address})`)}
            </div>
            `;
}
