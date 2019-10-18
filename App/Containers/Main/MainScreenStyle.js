import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
  },
  loader: {
    ...ApplicationStyles.loader,
    color: Colors.primary,
  },
  appHeader: {
    backgroundColor: Colors.primary,
    marginBottom: 20,
  },
  appHeaderuser: {
    backgroundColor: Colors.primary,
    marginBottom: 20,
  },
  appHeaderhelper: {
    backgroundColor: Colors.complementDark,
    marginBottom: 20,
  },
  appHeaderTitle: {
    marginLeft: 10,
  },
  commonButton: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    alignItems: 'center',
  },
  commonButtonComp: {
    marginTop: 20,
    backgroundColor: Colors.complementDark,
    alignSelf: 'center',
    alignItems: 'center',
  },
  FBButton: {
    marginTop: 20,
    backgroundColor: Colors.facebook,
    alignSelf: 'center',
    alignItems: 'center',
  },
  TWButton: {
    marginTop: 20,
    backgroundColor: Colors.twitter,
    alignSelf: 'center',
    alignItems: 'center',
  },
  userScreenContainer: {
    flex: 1,
    margin: 10,
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  instructions: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  result: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  error: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
    color: 'red',
  },
  logoContainer: {
    width: '100%',
    height: 300,
    marginBottom: 25,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  submitModal: {
    backgroundColor: Colors.white,
    margin: 15,
    borderRadius: 15,
  },
  submitModalTitle: {
    ...Fonts.style.h3,
    textAlign: 'center',
    marginTop: 10,
  },
  submitModalTextArea: {
    margin: 5,
  },
  buttonCloseSubmitModal: {
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: Colors.complement,
    alignSelf: 'center',
    alignItems: 'center',
  },
})
