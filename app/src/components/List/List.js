import React from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import ChipIcon from '../Chip/Chip'

const List = ({ beers }) => (
  <div>
    {beers.map((beer, index) => (
      <Card key={index}>
        <CardHeader
          title={beer.name}
          subtitle={beer.tagline}
          avatar={beer.image_url}
        />
        {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
        <CardText>
          {beer.description}
        </CardText>
        <CardHeader
          title="Ingredients"
        />
        {beer.ingredients.malt.map((i, index) => (
          <ChipIcon key={index} ingredient={i} />
        ))}
        {/* <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions> */}
      </Card>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  beers: state.apiReducer.data
})

export default connect(mapStateToProps)(List)
