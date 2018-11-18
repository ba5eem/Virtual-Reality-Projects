import * as React from 'react';
import {StyleSheet, Text, View, VrButton} from 'react-360';
import {connect, rotateGlobe} from '../Store';


class CenterControl extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'settings',
      hoverA: false,
      hoverB: false
    }
  }






  render(){
    //console.log(this.props);
    return(
      <View style={styles.wrapper}>
        <VrButton
          onEnter={() => this.setState({hoverA: true})}
          onExit={() => this.setState({hoverA: false})}
          onClick={()=>rotateGlobe('left')}
          style={[styles.buttonA, this.state.hoverA ? styles.hover : null]}>
        </VrButton>
        <VrButton
          onEnter={() => this.setState({hoverB: true})}
          onExit={() => this.setState({hoverB: false})}
          onClick={()=>rotateGlobe('right')}
          style={[styles.buttonB, this.state.hoverB ? styles.hover : null]}>
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
    backgroundColor: '#707A8C',
    borderColor: '#1F2430',
    borderWidth: 1,
    height: "100%",
    flex: 1
  },
  buttonB: {
    backgroundColor: '#707A8C',
    borderColor: '#1F2430',
    borderWidth: 1,
    height: "100%",
    flex: 1
  },
  hover: {
    backgroundColor: 'yellow',
  }

});

const ConnectedCenterControl = connect(CenterControl);

export default ConnectedCenterControl;