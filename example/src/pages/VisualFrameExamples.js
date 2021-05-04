import React from "react"
import { Header, Grid, Segment } from "semantic-ui-react"

import {CollectionExample} from "./examples/CollectionExample"
import {CollectionExample2} from "./examples/CollectionExample2"
import {TimeIndexedTypedLocationExample} from "./examples/TimeIndexedTypedLocationExample"
import {PartWholeExample} from "./examples/PartWholeExample"

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

export function VisualFrameExamples() {
    return <div>
            <Header as='h3' content='Visual Frame Examples' style={style.h3} textAlign='center' />
            <Grid container columns={2} stackable>
              <Grid.Column>
                <Segment>
                  <Header as='h4' content='Measurement Collection' style={style.h3} textAlign='center' />
                  <CollectionExample />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header as='h4' content='People Collection' style={style.h3} textAlign='center' />
                  <CollectionExample2 />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header as='h4' content='Time Indexed Typed Locations' style={style.h3} textAlign='center' />
                  <TimeIndexedTypedLocationExample />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header as='h4' content='Car Parts' style={style.h3} textAlign='center' />
                  <PartWholeExample />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>Content</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>Content</Segment>
              </Grid.Column>
            </Grid>
        </div>
}