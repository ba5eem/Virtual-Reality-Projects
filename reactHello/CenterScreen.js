import React, { Component } from 'react';
import {Image, StyleSheet, Text, View, VrButton, asset} from 'react-360';
import axios from 'axios';



const url = "http://192.168.2.192:9000";




class CenterScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'Loading...',
      hover: false
    }
  }


  componentDidMount() {
    // axios.get(url)
    // .then(res => {
    //   console.log(res);
    //   this.setState({
    //     title: res.data.message
    //   })
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }




  render() {
    return (
      <View style={styles.wrapper}>


      </View>
    );
  }
}



const styles = StyleSheet.create({
  wrapper: {
    width: 1000,
    height: 600,
    borderColor: '#313E52',
    borderWidth: 5,
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
    color: '#FF3333',
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
    backgroundColor: '#707A8CB3',
    width: "90%",
    height: 480,
    marginTop: 20,
    marginBottom: 20
  }
});





export default CenterScreen;