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
import { data } from '../actions/seed';









class LeftPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hover: false
    }
  }


  requestModel = (id) => {
    this.props.getModel(id);
  }

  render() {
    console.log(this.props);
    return (
        <View style={styles.wrapper}>
          {data.map((e,i) => {
            return (
                <View key={i.toString()}>
                  <VrButton
                    style={styles.postButton}
                    onEnter={() => this.setState({hover: true})}
                    onExit={() => this.setState({hover: false})}
                    onClick={()=>this.requestModel(e.name)}>
                    <Image style={styles.postButtonPreview} source={{uri: e.thumbnail.url}} />
                    <View style={[styles.postButtonInfo, this.state.hover ? styles.postButtonInfoHover : null]}>
                      <View style={styles.postButtonLabel}>
                        <Text style={styles.postButtonName}>{e.displayName} view</Text>
                      </View>
                      <View style={styles.postButtonLabel}>
                      </View>
                    </View>
                  </VrButton>
                </View>
              ); 
          })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
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

const ConnectedLeftPanel = connect(
  mapStateToProps,
  { getModel }
)(LeftPanel)

export default ConnectedLeftPanel;