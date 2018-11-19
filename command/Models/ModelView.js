import * as React from 'react';
import {Animated, View} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import { Location } from 'react-360-web';
import { connect } from 'react-redux';
import { getModel } from '../actions';
import { data } from '../actions/seed';



const AnimatedEntity = Animated.createAnimatedComponent(Entity);

/**
 * Renders the actual model in 3D space, rotating it a full 360 degrees to show
 * it from all angles.
 */
class ModelView extends React.Component {
  rotation = new Animated.Value(0);


  componentDidMount() {
    this.props.getModel();
    this.rotation.setValue(0);
    Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
  }



  render() {
    const file = data.filter(e => {
      return e.name === this.props.data;
    });
    if(file.length === 0){
      return null;
    }
    const source = data[0].formats.filter(e => {
      return e.formatType === 'GLTF2';
    })[0];
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


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const ConnectedModelView = connect(
  mapStateToProps,
  {getModel}
)(ModelView)

export default ConnectedModelView;