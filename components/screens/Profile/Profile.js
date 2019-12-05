import React, { Component } from 'react'
import { StyleSheet, View, Button, Text, ActivityIndicator, Dimensions  } from 'react-native'
import { Header, Card, Icon, Image, Divider, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

class Profile extends Component {
  static navigationOptions = {
    header: null
  }

  renderPets () {
    const {navigate} = this.props.navigation
    return pets.map((p) => (
      <ListItem
        id={p.id}
        key={p.id}
        leftAvatar={{ source: { uri: p.avatar_url } }}
        title={p.name}
        subtitle={p.subtitle}
        bottomDivider
        chevron
        onPress={() => navigate('PetProfile', {petId: p.id})}
      />
    ))
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
            text: 'Profile',
            style: { color: '#fff' }
          }}
          containerStyle={{
            backgroundColor: '#FFB900',
            justifyContent: 'space-around',
          }}
        />

        <ScrollView>
          <Text style={styles.familyName}>
            {`The ${this.props.familyName || 'Adam'}'s Family`}
          </Text>

          <Image
            source={{ uri: 'https://blogs.psychcentral.com/healing-together/files/2010/10/iStock-939594374.jpg' }}
            style={{ width: Dimensions.get('window').width, height: 200 }}
            resizeMode='cover'
            PlaceholderContent={<ActivityIndicator />}
          />

          <Divider style={{ backgroundColor: 'blue', marginTop: 16, marginBottom: 16 }} />

          {this.renderPets()}
        </ScrollView>
      </View>
    )
  }
}

export default Profile

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
  },
  {
    id: '4JF9FV9-BJKTROGBR-VEDVTB9-VT4TMBI00I',
    name: 'Beast',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Horse Mutt'
  },
  {
    id: '4JF9FV9-BJKTROGBR-VEDVTB9-VT4TMBI00I',
    name: 'Beast',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Horse Mutt'
  },
  {
    id: '4JF9FV9-BJKTROGBR-VEDVTB9-VT4TMBI00I',
    name: 'Beast',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Horse Mutt'
  },
  {
    id: '4JF9FV9-BJKTROGBR-VEDVTB9-VT4TMBI00I',
    name: 'Beast',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Horse Mutt'
  },
  {
    id: '4JF9FV9-BJKTROGBR-VEDVTB9-VT4TMBI00I',
    name: 'Beast',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Horse Mutt'
  },
  {
    id: '4JF9FV9-BJKTROGBR-VEDVTB9-VT4TMBI00I',
    name: 'Beast',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Horse Mutt'
  },
  {
    id: '4JF9FV9-BJKTROGBR-VEDVTB9-VT4TMBI00I',
    name: 'Beast',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Horse Mutt'
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
