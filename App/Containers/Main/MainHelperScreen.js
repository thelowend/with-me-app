import React from 'react'
import { Text, View, Button, Icon } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './MainScreenStyle'
import OneSignal from 'react-native-onesignal'
import NavigationService from 'App/Services/NavigationService'

class MaiHelperScreen extends React.Component {
  constructor(props) {
    super(props)
    OneSignal.sendTag('role', 'helper')
  }
  _goToContactPage() {
    NavigationService.navigate('ContactScreen', {
      contact: {
        id: '5da29f784cb41b00068e21a9',
        text: 'whatever',
      },
    })
  }
  _goToProfilePage() {
    NavigationService.navigate('ProfileScreen')
  }
  _goToUserList() {
    NavigationService.navigate('UserListScreen')
  }
  render() {
    return (
      <View>
        <Text style={Style.text}>Welcome {this.props.user.user_metadata.name}!</Text>
        <Button
          rounded
          iconLeft
          onPress={this._goToProfilePage.bind(this)}
          style={Style.commonButtonComp}
        >
          <Icon name="person" />
          <Text>Update Profile</Text>
        </Button>
        <Button
          rounded
          iconLeft
          onPress={this._goToUserList.bind(this)}
          style={Style.commonButtonComp}
        >
          <Icon name="people" />
          <Text>View List of Users</Text>
        </Button>
        <Button
          rounded
          iconLeft
          onPress={this._goToContactPage.bind(this)}
          style={Style.commonButtonComp}
        >
          <Icon name="contact" />
          <Text>Go to contact page</Text>
        </Button>
      </View>
    )
  }
}

MaiHelperScreen.propTypes = {
  user: PropTypes.object,
}
const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaiHelperScreen)
