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
import { getModel, rotateSub } from '../actions';
import VideoFeed from './Components/VideoFeed';




let left = '<----- rotate left';
let right = 'rotate right ----->'


class LowerMenu extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'settings',
      hoverA: false,
      hoverB: false
    }
  }

  componentDidMount() {
    this.props.getModel();
  }

  rotateSub = (arg) => {
    this.props.rotateSub(arg);
  }





  render(){
    if(this.props.data !== 'submarine'){ return null; }
    return(
      <View style={styles.wrapper}>
        <VrButton
          onEnter={() => this.setState({hoverA: true})}
          onExit={() => this.setState({hoverA: false})}
          onClick={()=>this.rotateSub('left')}
          style={[styles.buttonA, this.state.hoverA ? styles.hover : null]}>
          <Text style={styles.left}>{left}</Text>
        </VrButton>
        <VrButton
          onEnter={() => this.setState({hoverB: true})}
          onExit={() => this.setState({hoverB: false})}
          onClick={()=>this.rotateSub('right')}
          style={[styles.buttonB, this.state.hoverB ? styles.hover : null]}>
          <Text style={styles.right}>{right}</Text>
        </VrButton>

      </View>

      )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 500,
    height: 600,
    borderColor: '#1F2430',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonA: {
    backgroundColor: 'rgb(255,255,224)',
    borderColor: '#1F2430',
    borderWidth: 1,
    height: 40,
    flex: 1
  },
  buttonB: {
    backgroundColor: 'rgb(255,255,224)',
    borderColor: '#1F2430',
    borderWidth: 1,
    height: 40,
    flex: 1
  },
  hover: {
    backgroundColor: 'rgb(240,230,140)'
  },
  left: {
    justifyContent:'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'black'
  },
  right: {
    justifyContent:'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'black'
  }

});


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const ConnectedLowerMenu = connect(
  mapStateToProps,
  { getModel, rotateSub }
)(LowerMenu)

export default ConnectedLowerMenu;