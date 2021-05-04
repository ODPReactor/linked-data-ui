import React from "react";

import { extractLabelFromUri } from "../../resources/extractLabelFromUri";

export default function Entity(props) {
    const flexFlow = props.entity.depiction
        ? { flexFlow: "column" }
        : { flexFlow: "row" };

    return (
        <article style={props.style.entityContainer}>
            <div style={{ ...props.style.entityContent, ...flexFlow }}>
                {props.entity.depiction && (
                    <figure style={props.style.entityDepictionContainer}>
                        <img
                            src={props.entity.depiction}
                            style={props.style.entityDepiction}
                        ></img>
                    </figure>
                )}
                <div style={props.style.entityLabel}>
                    {props.entity.label
                        ? props.entity.label
                        : extractLabelFromUri(props.entity.entity)}
                </div>
            </div>
        </article>
    );
}
