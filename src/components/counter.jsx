import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  render() {
    return (<div>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
      <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>
        Delete
      </button>

      {/* <img src={this.state.imageURL} alt=''/> */}
      {/*{this.state.tags.length === 0 && 'Please create a new tag!'}
        {this.renderTags()}*/
      }

    </div>)
  }

  formatCount() {
    const {value} = this.props.counter;
    return value === 0
      ? 'Zero'
      : value;
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0
      ? 'warning'
      : 'primary';
    return classes;
  }
}

export default Counter;
