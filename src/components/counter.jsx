import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  state = {
    count: 0
    //tags: []
    //imageURL :'https://picsum.photos/200'
  };

//  constructor(){
//    super();
//    this.handleIncrement = this.handleIncrement.bind(this);
//  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>

    return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>
  }

  handleIncrement = (product) =>{
    console.log(product);
    this.setState({ count: this.state.count + 1});
  }

  render () {

    return (<React.Fragment>
      {/*<img src={this.state.imageURL} alt=''/>*/}
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={() => this.handleIncrement({product:1})}
      className = 'btn btn-secondary btn-sm'>Increment</button>
        {/*{this.state.tags.length === 0 && 'Please create a new tag!'}
      {this.renderTags()}*/}
    </React.Fragment>)
        }

        formatCount() {
        const{count} = this.state;
        return count === 0 ? 'Zero': count;
        }
        getBadgeClasses(){
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
        }
        }

        export default Counter;
