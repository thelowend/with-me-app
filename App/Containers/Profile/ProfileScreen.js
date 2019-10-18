import React from 'react'
import { View, Card, Button, Icon, Text } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ProfileScreenStyle'
import UserForm from './UserForm/UserForm'
import HelperForm from './HelperForm/HelperForm'
import NavigationService from 'App/Services/NavigationService'

class ProfileScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={Style.container}>
        <Card>
          {this.props.user.user_metadata.role === 'user' ? (
            <UserForm profile={this.props.user} />
          ) : (
            <HelperForm profile={this.props.user} />
          )}
        </Card>
        <Button
          style={Style.goBackButton}
          rounded
          iconLeft
          onPress={() => NavigationService.navigateAndReset('MainScreen')}
        >
          <Icon name="arrow-back" />
          <Text>Back</Text>
        </Button>
      </View>
    )
  }
}

ProfileScreen.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)
