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
  completeProfileButton: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardHeader: {
    backgroundColor: Colors.complement,
  },
  cardTitle: {
    ...Fonts.style.big,
    textAlign: 'center',
    color: Colors.white,
  },
  cardText: {
    ...Fonts.style.aboveAverage,
    textAlign: 'center',
  },
  cardButton: {
    justifyContent: 'center',
    marginBottom: 5,
  },
})
