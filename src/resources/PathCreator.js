const { PathFactory } = require("ldflex");
const { default: ComunicaEngine } = require("@ldflex/comunica");

/**
 * This class accept a source and return a linked data path
 * This is an LDFlex object used to query data without sparql
 */
export class PathCreator {
    static create({
        source ,
        // The JSON-LD context to resolve properties
        context ={
            "@context": {
                "@vocab": "http://xmlns.com/foaf/0.1/",
                friends: "knows",
                label: "http://www.w3.org/2000/01/rdf-schema#label",
                depiction: "depiction",
            },
        }
    }) {
            // The query engine and its source
            const queryEngine = new ComunicaEngine({
            type: "sparql",
            value: source,
        });
        return new PathFactory({context, queryEngine})
    }
}
