import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  takeTestButton: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignSelf: 'center',
  },
})
