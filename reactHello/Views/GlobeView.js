import * as React from 'react';
import {Animated, View, VrButton, Text, StyleSheet} from 'react-360';
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
class GlobeView extends React.Component {
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
    else if(this.props.posts[this.props.current].id !== 'assets/0nEWYSdUqRq'){
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
          onClick={()=>console.log('ffffff')}
          style={{transform: [{rotateY: this.rotation}]}}
          source={{gltf2: source.root.url}}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 100,
    borderColor: '#313E52',
    borderWidth: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  container: {
    backgroundColor: '#707A8CB3',
    width: 40,
    height: 40,
  }
});

const ConnectedGlobeView = connect(GlobeView);

export default ConnectedGlobeView;