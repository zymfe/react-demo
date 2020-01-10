import React from 'react'

class ChildrenComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    console.log('children: ', this.props.children)
    console.log('children count: ', React.Children.count(this.props.children))
    console.log('children toArray: ', React.Children.toArray(this.props.children))
    return (
      <React.Fragment>
        {React.Children.map(this.props.children, el => el)}
      </React.Fragment>
    )
  }
}

export default ChildrenComponent