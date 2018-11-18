import * as React from 'react';
import {Animated, View} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect} from '../Store';
import {Location} from 'react-360-web';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

/**
 * Renders the actual model in 3D space, rotating it a full 360 degrees to show
 * it from all angles.
 */
class SubmarineView extends React.Component {
  rotation = new Animated.Value(0);


  componentWillReceiveProps(nextProps) {
    console.log('next props', nextProps);
    if (nextProps.current !== this.props.current) {
      this.rotation.setValue(0);
      Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
    }
  }

  render() {
    if (!this.props.posts || this.props.current < 0) {
      return null;
    }
    else if(this.props.posts[this.props.current].id !== 'assets/dfSQmeuuYt3'){
      return null;
    }
    const post = this.props.posts[this.props.current];
    console.log(post);
    const source = post.source;
    return (
      <View>
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 4, -1]}]}}
        />
        <AnimatedEntity
          style={{transform: [{rotateY: this.rotation}]}}
          source={{gltf2: source.root.url}}
        />
      </View>
    );
  }
}

const ConnectedSubmarineView = connect(SubmarineView);

export default ConnectedSubmarineView;