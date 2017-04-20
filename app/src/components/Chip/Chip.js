import React, { Component } from 'react'
import Chip from 'material-ui/Chip'

const styles = {
  chip: {
    margin: 10,
  },
};

const ChipIcon = ({ ingredient }) => (
  <Chip
    style={styles.chip}
  >
    {ingredient.name}
  </Chip>
)

export default ChipIcon
