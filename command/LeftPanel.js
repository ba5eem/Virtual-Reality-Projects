import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import { connect} from 'react-redux';
import { getAll } from './actions';



class LeftPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
  }


  componentDidMount(){
    this.props.getAll();
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const ConnectedLeftPanel = connect(
  mapStateToProps,
  {getAll}
)(LeftPanel)

export default ConnectedLeftPanel;