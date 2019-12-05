import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Header } from 'react-native-elements'
import Map from '../../Map/Map'

class BrowseFound extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
          rightComponent={{
            icon: 'person',
            color: '#fff',
            onPress: () => this.props.navigation.navigate('Profile')
          }}
          containerStyle={{
            backgroundColor: '#FFB900',
            justifyContent: 'space-around',
          }}
        />
        <Map style={styles.map} />
      </View>
    )
  }
}

export default BrowseFound

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 0.6
  },
  nav: {
    flex: 0.4
  }
})
