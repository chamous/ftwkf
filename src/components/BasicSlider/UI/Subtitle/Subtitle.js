import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Subtitle.module.css'

const subtitle = (props) => {
  return (
    <h2 className={classes.Container} style={{fontSize:78}}>
      {props.children}
    </h2>
  )
}

subtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default subtitle
