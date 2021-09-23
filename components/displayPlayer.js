import React from 'react';


export class DisplayPlayer extends React.Component {
 
  /**
   * props: {player: Player}
  **/
  constructor (props) {
    super(props);
  }
  
  /**
   * register for upadates. Without this, output would not be updated
  **/
  componentDidMount () {
    console.log("mounted");
    this.props.player.registerForEvents(this.refresh);
  }
  
  render () {
     console.log(this.props.player)
    return <div>
      <div>
        {this.props.player.name}
      </div>
      <div>
        {this.props.player.isOnMove? "ano": null}
      </div>
    </div>
  }
  
  /**
   * refresh the component
  **/
  refresh = () => {
    console.log("called")
    this.forceUpdate();
  }
  
  /**
   * unregister so there are no zombies
  **/
  componentWillUnmount() {
    this.props.player.unregisterForEvents(this.refresh);
  }
}