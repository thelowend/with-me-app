import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
  },
  evaluationTestContainer: {
    margin: 30,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  itemsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 15,
  },
  sliderLabel: {
    flex: 4,
  },
  slider: {
    flex: 3,
  },
  sliderValue: {
    flex: 2,
    justifyContent: 'flex-end',
  },
})
