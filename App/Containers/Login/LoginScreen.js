import React from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import LoginActions from 'App/Stores/Login/Actions'
import Style from './LoginScreenStyle'

class LoginScreen extends React.Component {
  render() {
    debugger;
    let loggedIn = this.props.loggedIn === true
    return (
      <View style={Style.container}>
        <Text style={Style.header}> WithMeApp - Login </Text>
        <Text>You are {loggedIn ? '' : 'not '} logged in . </Text>
        <Button
          onPress={loggedIn ? () => this._onLogout() : () => this._onLogin()}
          title={loggedIn ? 'Log Out' : 'Log In'}
        />
      </View>
    )
  }

  _onLogin() {
    this.props.onLogin()
  }

  _onLogout() {
    this.props.onLogout()
  }
}

LoginScreen.propTypes = {
  loggedIn: PropTypes.bool,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
}

const mapStateToProps = (state) => ({
  loggedIn: state.login.loggedIn,
})

const mapDispatchToProps = (dispatch) => ({
  onLogin: () => dispatch(LoginActions.login()),
  onLogout: () => dispatch(LoginActions.logout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
