import React from 'react'
import PropTypes from 'prop-types'
import Counter from './counter'
class Counters extends React.Component {
  render () {

    const {onReset, counters, onDelete, onIncrement} = this.props

    return(
    <div>
      <button onClick={onReset} className = 'btn btn-primary btn-sm m-2'>Reset</button>
      {counters.map(counter => //for each counter in counters
        <Counter
          key={counter.id} //used internally by react
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter = {counter}>
        </Counter>)}
    </div>

      );
  }
}

export default Counters;
