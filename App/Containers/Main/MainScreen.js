import React from 'react'
import { ActivityIndicator } from 'react-native'
import {
  Container,
  Header,
  Text,
  View,
  Button,
  Icon,
  Body,
  Right,
  Title,
  Content,
} from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import AuthActions from 'App/Stores/Auth/Actions'
import Style from './MainScreenStyle'
import CompleteProfile from '../Popups/CompleteProfile'
import MainHelperScreen from './MainHelperScreen'
import MainUserScreen from './MainUserScreen'

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topText: '',
    }
  }
  componentDidMount() {
    this._fetchUser()
  }
  setTopText() {
    let topText = ''
    const values = {
      helper: ' - Help others',
      user: ' - Find help',
    }
    if (this.props.user.user_metadata) {
      topText = values[this.props.user.user_metadata.role]
    }
    return topText
  }
  isHelper(profileType) {
    return profileType === 'helper'
  }

  render() {
    let userRole = ''
    if (this.props.user.user_metadata) {
      userRole = this.props.user.user_metadata.role
    }
    return (
      <View style={Style.container}>
        <Container>
          <Header style={Style['appHeader' + userRole]}>
            <Body>
              <Title style={Style.appHeaderTitle}>WithMe{this.setTopText.bind(this)()}</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this._onLogout()}>
                <Icon name="log-out" />
              </Button>
            </Right>
          </Header>
          <Content>
            {this.props.userIsLoading ? (
              <ActivityIndicator size="large" color={Style.loader} />
            ) : (
              <View>
                {this.props.userErrorMessage ? (
                  <Text style={Style.error}>{this.props.userErrorMessage}</Text>
                ) : (
                  <View>
                    {this.props.user.user_metadata.profile_complete ? (
                      <View>
                        {this.isHelper(userRole) ? <MainHelperScreen /> : <MainUserScreen />}
                      </View>
                    ) : (
                      <CompleteProfile />
                    )}
                  </View>
                )}
              </View>
            )}
          </Content>
        </Container>
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

MainScreen.propTypes = {
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
)(MainScreen)
