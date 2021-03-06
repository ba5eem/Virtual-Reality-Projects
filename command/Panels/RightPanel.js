import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset
} from 'react-360';
import { connect } from 'react-redux';
import { getAll } from '../actions';
import { locations, parts } from '../actions/seed';



class RightPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
  }


  componentDidMount(){
    this.props.getAll();
  }

  renderAis = (arr) => {
    return (
        <View style={styles.wrapper}>
          {arr.map((e,i) => {
            return (
              <View key={i.toString()} style={{ marginTop: 10, backgroundColor: e.distance }}> 
                <Text style={styles.name}>{e.name}</Text>
                <Text style={styles.author}>[{e.lat},{e.lon}]</Text>
              </View>
          )
          })}
        </View>
    );
  }

  renderParts = (arr) => {
    return (
        <View style={styles.wrapper}>
          {arr.map((e,i) => {
            return (
              <View key={i.toString()} style={{ marginTop: 10 }}>
                <View style={{ backgroundColor: e.distance }}> 
                  <Text style={styles.name}>{e.name}</Text>
                  <Text style={styles.author}>[{e.lat},{e.lon}]</Text>
                  <Text style={styles.name}>Compartment: {e.room}</Text>
                  <Text style={styles.name}>Part Name: {e.partName}</Text>
                </View>
                <Image style={styles.image} source={asset('scrubber.jpg')}/>
              </View>
          )
          })}
        </View>
    );
  }

  renderAISVessel = (arr) => {
    return (
        <View style={styles.wrapper}>
          {arr.map((e,i) => {
            return (
              <View key={i.toString()} style={{ marginTop: 10 }}>
                <View style={{}}> 
                  <Text style={styles.name}>{e.name}</Text>
                  <Text style={styles.author}>[{e.lat},{e.lon}]</Text>
                  <Image style={styles.mapImage} source={asset('mapWMark.png')}/>
                  <Text style={styles.ping}>Part Requested</Text>
                  <Text style={[styles.ping, {backgroundColor: 'rgb(255,255,51)', color: "black" }]}>Status: in-transit</Text>
                  <Text style={[styles.ping, {backgroundColor: 'rgb(255,255,51)', color: "black" }]}>Payload delivery method: Drone</Text>
                </View>
              </View>
           )
          })}
        </View>
    );
  }

  render() {

    if(this.props.data === 'ais'){ return ( this.renderAis(locations) ); }
    else if(this.props.data === 'submarine'){ return ( this.renderParts(parts) ); }
    else if(this.props.data === 'showaisinfo'){ return ( this.renderAISVessel(parts) ); }
    return this.renderAis([]);
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
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  author: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  container: {

  },
  image: {
    marginTop: 30,
    marginLeft: 20,
    width: "90%",
    height: "50%"
  },
  mapImage: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: '90%', 
    height: '60%'
  },
  ping: {
    marginTop: 20,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const ConnectedRightPanel = connect(
  mapStateToProps,
  {getAll}
)(RightPanel)

export default ConnectedRightPanel;