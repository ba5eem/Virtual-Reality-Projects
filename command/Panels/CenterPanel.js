import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  asset
} from 'react-360';
import { connect} from 'react-redux';
import { getModel } from '../actions';
import VideoFeed from './Components/VideoFeed';







class CenterPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rotation: 0
    }
  }


  componentDidMount(){
    this.props.getModel();
  }

  render() {
    if(this.props.data === []){ return null; }
    else if(this.props.data === 'submarine'){ return null }

    else if(this.props.data === 'dronefeed'){ return (<VideoFeed />) }
    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} source={asset('oahu.jpg')}/>
      </View>


      )
  }
};



const styles = StyleSheet.create({
  wrapper: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  image: {
    width: '100%',
    height: '100%',
    transform: [{translate: [0,0,-2]}]
  }
});


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const ConnectedCenterPanel = connect(
  mapStateToProps,
  {getModel}
)(CenterPanel)

export default ConnectedCenterPanel;