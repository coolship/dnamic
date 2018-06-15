import React, { Component } from 'react';
import { Draw } from 'react-regl';

class Triangle extends Component {
  render(){
    const {positions, color} = this.props;

    return (
      <Draw vert={triVert}
            frag={triFrag}
            attributes={{
              positions: this.props.positions
            }}
            uniforms={{
              color: this.props.color
            }}
            count={3}
      />
    );
  }
}
