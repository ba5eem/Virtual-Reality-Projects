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
import { getModel, setAis } from '../actions';
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

  setAis = () => {
    this.props.setAis();
  }

  render() {
    if(this.props.data === []){ return null; }
    else if(this.props.data === 'submarine'){ return null }

    else if(this.props.data === 'dronefeed'){ return (<VideoFeed />) }

    else if(this.props.data === 'ais'){ 
      return (
      <View style={styles.wrapper}>

        <Image style={styles.image} source={asset('aisoahu.jpg')}/>

          <View style={[styles.postButtonInfo, this.state.hover ? styles.postButtonInfoHover : null]}>
            <VrButton
                style={styles.postButton}
                onEnter={() => this.setState({hover: true})}
                onExit={() => this.setState({hover: false})}
                onClick={()=>this.setAis()}>
              <View style={styles.postButtonLabel}>
                <Image style={{width: 40, height: 60}} source={asset('tri2.png')}/>
              </View>
            </VrButton>
          </View>

      </View>


      )

    }

    return (
      <View style={styles.wrapper}>

        <Image style={styles.image} source={asset('oahu.jpg')}/>

          <View style={[styles.postButtonInfo, this.state.hover ? styles.postButtonInfoHover : null]}>
            <VrButton
                style={styles.postButton}
                onEnter={() => this.setState({hover: true})}
                onExit={() => this.setState({hover: false})}
                onClick={()=>this.setAis()}>
              <View style={styles.postButtonLabel}>
                <Image style={{width: 40, height: 60}} source={asset('tri2.png')}/>
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
    height: 190,
    width: 90,
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
    marginTop: 420
  },
});


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const ConnectedCenterPanel = connect(
  mapStateToProps,
  { getModel, setAis }
)(CenterPanel)

export default ConnectedCenterPanel;