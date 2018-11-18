import * as React from 'react';
import {Animated, View, VrButton, Text, StyleSheet} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect} from '../Store';
import {Location} from 'react-360-web';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


export const CenterControl = ({handle}) => {
  return(<VrButton
          onClick={handle}
          style={styles.button}>
        </VrButton>)
}
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
      Animated.timing(this.rotation, {toValue: 10, duration: 10}).start();
    }
  }

  handle = () => {
    console.log('ola')
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
        <CenterControl handle={this.handle} />
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
  button: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
    marginRight: 100,
    transform: [{translateX: -4}]
  }
});

const ConnectedGlobeView = connect(GlobeView);

export default ConnectedGlobeView;