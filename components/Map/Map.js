import React, { Component } from 'react'
import { StyleSheet, Alert, View, Dimensions } from 'react-native'

import MapView from 'react-native-maps'

class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: { latitude: 33.655693866343846, longitude: -85.81625383355265 }
    }
  }
  componentWillMount () {
    if (!this.props.location) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          })
        },
        error => Alert.alert(error.message),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000
        }
      )
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          scrollEnabled
          zoomEnabled
          pitchEnabled
          rotateEnabled
          showsUserLocation
          initialRegion={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    )
  }
}

export default Map

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  map: {
    width: Dimensions.get('window').width,
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
