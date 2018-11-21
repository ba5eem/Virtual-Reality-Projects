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
      rotation: 0,
      hover: false
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

          <View style={[styles.postButtonInfo, this.state.hover ? styles.postButtonInfoHover : null]}>
          <VrButton
                    style={styles.postButton}
                    onEnter={() => this.setState({hover: true})}
                    onExit={() => this.setState({hover: false})}
                    onClick={()=>console.log('ola')}>
            <View style={styles.postButtonLabel}>
                <Image style={{width: 40, height: 40}} source={asset('tri2.png')}/>
            </View>
            <View style={styles.postButtonLabel}>
            </View>
            </VrButton>
          </View>

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
    position: 'absolute'
  },
  image: {
    width: '100%',
    height: '100%',
    transform: [{translate: [0,0,-2]}]
  },
  marker: {
    transform: [{translate: [0,0,0]}],
    position: 'absolute',
    color: "red",
    fontSize: 50,
    zIndex: 10000
  },
  postButton: {
    height: 120,
    width: 100,
    overflow: 'hidden',
  },
  postButtonInfo: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: 'column',
  },
  postButtonPreview: {
    width: '100%',
    height: 225,
  },
  postButtonInfoHover: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  postButtonLabel: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    marginLeft: 690,
    marginTop: 440
  },
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