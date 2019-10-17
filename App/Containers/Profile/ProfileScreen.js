import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ProfileScreenStyle'
import UserForm from './UserForm/UserForm'
import HelperForm from './HelperForm/HelperForm'

class ProfileScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={Style.container}>
        {this.props.user.user_metadata.role === 'user' ? (
          <UserForm profile={this.props.user} />
        ) : (
          <HelperForm profile={this.props.user} />
        )}
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
