import React, { Component } from 'react'
import { StyleSheet, View, Button, Text, ActivityIndicator, Dimensions  } from 'react-native'
import { Header, Card, Icon, Image, Divider, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

class PetProfile extends Component {
  static navigationOptions = {
    header: null
  }

  constructor (props) {
    super(props)
    const petProfile = this.props.navigation.getParam('petId', '')
    this.state = {
      pet: this.getPetProfile(petProfile)
    }
  }

  getPetProfile (id) {
    const pet = pets.filter(p => {
      return p.id === id
    })
    console.log(pet[0])
    return pet[0]
  }

  render () {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.navigate('Navigation')
          }}
          centerComponent={{
            text: this.state.pet.name || 'Pet Name',
            style: { color: '#fff' }
          }}
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
        <ScrollView>
          <Image
            source={{ uri: this.state.pet.avatar_url }}
            style={{ width: Dimensions.get('window').width, height: 200 }}
            resizeMode='cover'
            PlaceholderContent={<ActivityIndicator />}
          />
          <Divider style={{ backgroundColor: 'blue', marginTop: 16, marginBottom: 16 }} />
        </ScrollView>
      </View>
    )
  }
}

export default PetProfile

const pets = [
  {
    id: 'VJRLEBB-12VG8F-WFNJGEI9-WRFWFG4',
    name: 'Zelda',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Pitbull/Pointer'
  },
  {
    id: '4JF9FV9-BJKTROGBR-VEDVTB9-VT4TMBI00I',
    name: 'Beast',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Horse Mutt'
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  familyName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 4
  }
})
