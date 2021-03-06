import { createAppContainer, createStackNavigator } from 'react-navigation'

import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import MainScreen from 'App/Containers/Main/MainScreen'
import ProfileScreen from 'App/Containers/Profile/ProfileScreen'
import EvaluationScreen from 'App/Containers/Evaluation/EvaluationScreen'
import ContactScreen from 'App/Containers/Contact/ContactScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    LoginScreen: LoginScreen,
    MainScreen: MainScreen,
    ProfileScreen: ProfileScreen,
    EvaluationScreen: EvaluationScreen,
    ContactScreen: ContactScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
