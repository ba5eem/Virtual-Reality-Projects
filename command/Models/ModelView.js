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

// Create a location two meters in front of the user, and one meter down

/**
 * Renders the actual model in 3D space, rotating it a full 360 degrees to show
 * it from all angles.
 */
class ModelView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rotation: new Animated.Value(0),
      hover: false
    }
  }


  componentDidMount() {
    this.props.getModel();
    this.state.rotation.setValue(0);
    Animated.timing(this.state.rotation, {toValue: 45, duration: 5000}).start();
  }



  render() {

    this.state.rotation.setValue(this.props.rotate);
    const file = data.filter(e => {
      return e.name === this.props.data;
    });
    if(file.length === 0){
      return null;
    }
    else if(this.props.data === 'dronefeed'){
      return null;
    }
    else if(this.props.data !== 'submarine'){
      return null;
    }
    
    const source = file[0].formats.filter(e => {
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
          style={{transform: [{rotateY: this.state.rotation}]}}
          source={{gltf2: source.root.url}}
        />   
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state.data,
    rotate: state.rotate
  }
}

const ConnectedModelView = connect(
  mapStateToProps,
  {getModel}
)(ModelView)

export default ConnectedModelView;