import * as React from 'react';
import { Image, StyleSheet, Text, View, VrButton, Environment, asset, VideoPano } from 'react-360';





class LeftScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'Loading...',
      hover: false
    }
  }


  componentDidMount() {
    // Create a player
 
    // axios.get(url)
    // .then(res => {
    //   console.log(res);
    //   this.setState({
    //     title: res.data.message
    //   })
    // })
    // .catch(err => {
    //   console.log(err);
    //})
  }




  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <VrButton 
            onEnter={() => this.setState({hover: true})}
            onExit={() => this.setState({hover: false})}
            onClick={(e)=>console.log("1")} 
            style={[styles.postButton, this.state.hover ? styles.postButtonHover : null]}>
            <Text style={styles.title}>Drone Footage</Text>
          </VrButton>

          <View style={styles.header}>

            <VrButton 
              onEnter={() => this.setState({hover: true})}
              onExit={() => this.setState({hover: false})}
              onClick={(e)=>console.log("1")} 
              style={styles.container}>
                

            </VrButton>
  
        </View>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 1000,
    height: 600,
    backgroundColor: '#1F2430',
    borderColor: '#313E52',
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  postButton: {
    height: 95,
    width: 200,
    marginRight: 400,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#707A8C'
  },
  title: {
    fontSize: 40, 
    color: '#FF3333',
    textAlign: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    zIndex: 10,
    transform: [{translate: [0,0,-2]}]
  },
  postButtonHover: {
    backgroundColor: '#FFCC66'
  }
});



export default LeftScreen;