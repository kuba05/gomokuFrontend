import React from 'react';

export class Field extends React.Component {
  render() {
    return <td onClick={this.props.onClick}> {
      this.props.value === null? "#":
      this.props.value === 0? "X":
      this.props.value === 1? "O": null
    }
    </td>;
  }
}