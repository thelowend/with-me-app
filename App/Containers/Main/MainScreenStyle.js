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
    marginBottom: 10,
  },
  appHeaderuser: {
    backgroundColor: Colors.primary,
    marginBottom: 10,
  },
  appHeaderhelper: {
    backgroundColor: Colors.complementDark,
    marginBottom: 10,
  },
  appHeaderTitle: {
    marginLeft: 10,
    textShadowColor: Colors.primaryDarker,
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  warningCard: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    backgroundColor: Colors.complementDark,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  warningCardIcon: {
    paddingLeft: 5,
    paddingRight: 10,
    width: '10%',
  },
  warningCardText: {
    width: '90%',
  },
  commonButton: {
    marginTop: 10,
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
  subTitle: {
    textAlign: 'center',
  },
  FBSection: {
    marginTop: 10,
    padding: 10,
    width: '75%',
    alignSelf: 'center',
    backgroundColor: Colors.primary,
  },
  TWSection: {
    padding: 10,
    width: '75%',
    alignSelf: 'center',
    backgroundColor: Colors.primary,
  },
  SectionHeader: {
    backgroundColor: Colors.white,
    padding: 0,
  },
  SectionHeaderText: {
    color: Colors.white,
    textShadowColor: Colors.primaryDarker,
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  FBButton: {
    backgroundColor: Colors.facebook,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
  },
  TWButton: {
    backgroundColor: Colors.twitter,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
  },
  userScreenContainer: {
    flex: 1,
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
  iconUnSync: {
    backgroundColor: Colors.success,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 4,
    paddingRight: 4,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 15,
  },
  iconSync: {
    backgroundColor: Colors.error,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 4,
    paddingRight: 4,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 15,
  },
})
