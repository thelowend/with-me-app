import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
  },
  evaluationTestContainer: {
    flex: 1,
  },
  evaluationTestTop: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  evaluationTestItems: {
    flex: 1,
  },
  evaluationTestBottom: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  testScrollView: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 15,
  },
  sliderLabel: {
    flex: 3,
  },
  slider: {
    flex: 3,
  },
  sliderValue: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  testOpening: {
    ...Fonts.style.aboveAverage,
    color: Colors.primary,
  },
  buttonNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goBackButton: {
    backgroundColor: Colors.error,
    justifyContent: 'center',
    width: '40%',
  },
  commonButton: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    width: '40%',
  },
})
