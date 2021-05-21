import React, { useState, useEffect } from "react";

const { namedNode } = require("@rdfjs/data-model");

import {PathCreator} from "./PathCreator";

export default function Label({ uri, source, text = null, classes, style = {} }) {
    const [label, setLabel] = useState(text);

    const path = PathCreator.create({
        source
    })

    const cProp = path.create({
        subject: namedNode(uri),
    });

    useEffect(() => {
        if (!label) {
            (async function fetchLabel() {
                const label = await cProp.label.value;
                setLabel(label);
            })();
        }
    }, []);

    return label ? (
        <div className={classes} style={style}>
            {label}
        </div>
    ) : null;
}
