import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Profile from './components/screens/Profile/Profile'
import BrowseFound from './components/screens/BrowseFound/BrowseFound'
import NavigationScreen from './components/Navigation/Navigation'
import PetProfile from './components/screens/PetProfile/PetProfile'

const MainNavigator = createStackNavigator(
  {
    Profile: Profile,
    PetProfile: PetProfile,
    BrowseFound: BrowseFound,
    Navigation: NavigationScreen
  },
  {
    initialRouteName: 'Profile'
  }
)

const App = createAppContainer(MainNavigator)

export default App
