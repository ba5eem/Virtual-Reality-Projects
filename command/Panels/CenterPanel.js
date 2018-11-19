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
import { getAll } from '../actions';



class CenterPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rotation: 0

    }
  }


  componentDidMount(){
    this.props.getAll();
    //this.rotation.setValue(0);
    //Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
  }

  render() {
    console.log(this.props);
    return (
        <View style={styles.wrapper}>
          <Text>ola</Text>
        </View>
    );
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
  postButton: {
    height: 120,
    backgroundColor: '#000000',
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  postButtonName: {
    fontSize: 24,
  },
  postButtonAuthor: {
    fontSize: 16,
  }
});


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const ConnectedCenterPanel = connect(
  mapStateToProps,
  {getAll}
)(CenterPanel)

export default ConnectedCenterPanel;