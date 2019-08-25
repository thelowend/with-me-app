import React from 'react'
import { ActivityIndicator, Image } from 'react-native'
import NavigationService from 'App/Services/NavigationService'
import { Button, Text, View } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import Style from './MainScreenStyle'
import { Images } from 'App/Theme'

class MainScreen extends React.Component {
  componentDidMount() {
    this._fetchUser()
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <View>
              <View style={Style.logoContainer}>
                <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
              </View>
              {this.props.userErrorMessage ? (
                <Text style={Style.error}>{this.props.userErrorMessage}</Text>
              ) : (
                  <View>
                    <Text style={Style.result}>
                      {"User profile: "}
                      {this.props.user.user_metadata.profile}
                    </Text>
                    {!this.props.user.profile ? (
                      <View>
                        <Text style={Style.text}>Please complete your profile!</Text>
                        <Button onPress={() => NavigationService.navigate('ProfileScreen')}><Text>Complete Profile Now</Text></Button>
                      </View>
                    ) : (
                        <Text style={Style.text}>Welcome!</Text>
                      )}
                  </View>
                )}
            </View>
          )}
      </View>
    )
  }
  _fetchUser() {
    this.props.fetchUser(this.props.idToken)
  }
}

MainScreen.propTypes = {
  idToken: PropTypes.string,
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
  idToken: state.auth.idToken,
  user: state.user.user,
  userIsLoading: state.user.userIsLoading,
  userErrorMessage: state.user.userErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (idToken) => dispatch(UserActions.fetchUser(idToken)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen)
