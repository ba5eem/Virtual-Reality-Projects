import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, VrButton, Environment, asset, Video, MediaPlayerState, VideoControl } from 'react-360';





const url = "http://192.168.2.192:9000";




class VideoFeed extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'Loading...',
      hover: false,
      playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
    }
  }



  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
        </View>
        <View style={styles.header}>

            <VrButton
              onEnter={() => this.setState({hover: true})}
              onExit={() => this.setState({hover: false})}
              onClick={(e)=>console.log("1")}
              style={styles.container}>
              <Video
                style={styles.container}
                source={{uri: 'http://192.168.2.192:3000/video'}}
                playerState={this.state.playerState}
              />



            </VrButton>

        </View>


      </View>
    );
  }
}



const styles = StyleSheet.create({
  wrapper: {
    width: 1000,
    height: 600,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  postButton: {
    height: 80,
    width: 400,
    marginLeft: 20,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#707A8C'
  },
  title: {
    fontSize: 50,
    color: 'grey',
    textAlign: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  postButtonHover: {
    backgroundColor: '#FFCC66'
  },
  image: {
    width: '100%',
    height: '100%',
    zIndex: 10,
    transform: [{translate: [0,0,-2]}]
  },
  container: {
    width: "100%",
    height: "100%"
  }
});





export default VideoFeed;