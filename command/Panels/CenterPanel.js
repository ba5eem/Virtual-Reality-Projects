import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image
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
    else if(this.props.data === 'assets/dfSQmeuuYt3'){ return null }

    else if(this.props.data === 'dronefeed'){ return (<VideoFeed />) }
    return (
      <View style={styles.wrapper}>
        <Text>Central Control</Text>
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