import * as React from 'react';
import {StyleSheet, Text, View, VrButton} from 'react-360';
import {connect} from '../Store';

/**
 * Render a description of the currently-selected model.
 * Connected to the global store to receive inputs.
 */
class CenterControl extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'settings',
      hover: false
    }
  }



  render(){
    return(
      <View style={styles.wrapper}>
        <VrButton
          onEnter={() => this.setState({hover: true})}
          onExit={() => this.setState({hover: false})}
          onClick={(e)=>console.log("1")}
          style={[styles.buttonA, this.state.hover ? styles.hover : null]}>
        </VrButton>
        <VrButton
          onEnter={() => this.setState({hover: true})}
          onExit={() => this.setState({hover: false})}
          onClick={(e)=>console.log("2")}
          style={[styles.buttonB, this.state.hover ? styles.hover : null]}>
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