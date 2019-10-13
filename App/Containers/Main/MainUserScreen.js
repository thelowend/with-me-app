import React from 'react'
import { ActivityIndicator, Image } from 'react-native'
import { Text, View, Button } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import AuthActions from 'App/Stores/Auth/Actions'
import Style from './MainScreenStyle'
import CompleteProfile from '../Popups/CompleteProfile'

class MainUserScreen extends React.Component {
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
            {this.props.userErrorMessage ? (
              <Text style={Style.error}>{this.props.userErrorMessage}</Text>
            ) : (
              <View>
                <Text style={Style.result}>
                  {'User profile: '}
                  {this.props.user.user_metadata.profile}
                </Text>
                {this.props.user.user_metadata.profileCompleted ? (
                  <Text style={Style.text}>Welcome!</Text>
                ) : (
                  <CompleteProfile />
                )}
                <Button onPress={() => this._onLogout()}>
                  <Text>Log Out</Text>
                </Button>
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
  _onLogout() {
    this.props.onLogout()
  }
}

MainUserScreen.propTypes = {
  idToken: PropTypes.string,
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  onLogout: PropTypes.func,
}

const mapStateToProps = (state) => ({
  idToken: state.auth.idToken,
  user: state.user.user,
  userIsLoading: state.user.userIsLoading,
  userErrorMessage: state.user.userErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (idToken) => dispatch(UserActions.fetchUser(idToken)),
  onLogout: () => dispatch(AuthActions.logout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainUserScreen)
