import React, { Component } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'
import { Header, ListItem } from 'react-native-elements'

class NavigationScreen extends Component {
  static navigationOptions = {
    header: null
  }
  
  keyExtractor = (item, index) => index.toString()

  render () {
    const {navigate} = this.props.navigation
    const list = [
      {
        title: 'My Profile',
        icon: 'person',
        location: 'Profile'
      },
      {
        title: 'Report Found',
        icon: 'explore',
        location: 'ReportFound'
      },
      {
        title: 'Browse Lost',
        icon: 'nature',
        location: 'BrowseLost'
      },
      {
        title: 'Browse Found',
        icon: 'check-circle',
        location: 'BrowseFound'
      }
    ]

    return (
      <View style={styles.container}>
        <Header
          placement="left"
          centerComponent={{
            text: 'Navigation',
            style: { color: '#fff' }
          }}
          rightComponent={{
            icon: 'close',
            color: '#fff',
            onPress: () => this.props.navigation.goBack()
          }}
          containerStyle={{
            backgroundColor: '#FFB900',
            justifyContent: 'space-around',
          }}
        />
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
              chevron
              onPress={() => navigate(item.location)}
            />
          ))
        }
      </View>
    )
  }
}

export default NavigationScreen

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
