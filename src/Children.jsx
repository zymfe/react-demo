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
        {
          (() => {
            const mappedChildren = React.Children.map(this.props.children, (el, index) => [el, [el, [el, [el, [el]]]], [el]])
            console.log('mappedChildren: ', mappedChildren)
            return mappedChildren
          })()
        }
      </React.Fragment>
    )
  }

  printfAllChildren () {
    console.log('ChildrenComponent all children: ', this.props.children)
  }
}

export default ChildrenComponent