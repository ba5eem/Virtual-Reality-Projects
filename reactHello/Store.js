import * as React from 'react';
import {data} from './objData';

const State = {
  posts: undefined,
  current: -1,
  moveLeft: false,
  moveRight: false
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function rotateGlobe(e){
  if(e === 'left'){ State.moveLeft = true; }
  else if(e === 'right'){ State.moveRight = true; }
  return true;
  updateComponents();
}

export function getMoveLeft(){
  return State.moveLeft;
}

export function getMoveRight(){
  return State.moveRight;
}

export function initialize(apiKey) {
  const entries = data.map(asset => {
        const objSource = asset.formats.filter(
          format => format.formatType === 'GLTF2'
        )[0];
        console.log(objSource);
        return {
          id: asset.name,
          name: asset.displayName,
          author: asset.authorName,
          description: asset.description,
          source: objSource,
          preview: asset.thumbnail.url,
        };
      });
      console.log(entries);
      State.posts = entries;
      updateComponents();
}

export function setCurrent(value) {
  State.current = value;
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      posts: State.posts,
      current: State.current,
      moveLeft: State.moveLeft,
      moveRight: State.moveRight
    };

    _listener = () => {
      this.setState({
        posts: State.posts,
        current: State.current,
        moveLeft: State.moveLeft,
        moveRight: State.moveRight
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          posts={this.state.posts}
          current={this.state.current}
          moveLeft={this.state.moveLeft}
          moveRight={this.state.moveRight}
        />
      );
    }
  };
}