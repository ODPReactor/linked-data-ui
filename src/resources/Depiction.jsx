import React, { useState, useEffect } from "react";

const { namedNode } = require("@rdfjs/data-model");
import {PathCreator} from "./PathCreator";

export default function Depiction({
    uri,
    classes,
    onLoadedDepiction,
    onClick,
    source,
    depiction = null,
    style = {},
    label,
    placeholderImg = "https://semantic-ui.com/images/wireframe/image.png",
}) {
    const [image, setImage] = useState(depiction);

    const path = PathCreator.create({
        source
    })
    const cProp = path.create({
        subject: namedNode(uri),
    });

    // run this effect if depiction is loaded
    if (onLoadedDepiction) {
        useEffect(() => {
            onLoadedDepiction();
        }, [image]);
    }

    useEffect(() => {
        if (!image) {
            (async function fetchDepiction() {
                const image = await cProp.depiction;
                setImage(image);
            })();
        }
    }, []);

    return (
        <div>
            <img
                onClick={onClick}
                src={image ? image : placeholderImg}
                className={classes}
                style={style}
            />
            {label && label}
        </div>
    );
}
