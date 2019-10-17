import React from 'react'
import { Text, View } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './MainScreenStyle'
import OneSignal from 'react-native-onesignal'

class MaiHelperScreen extends React.Component {
  constructor(props) {
    super(props)
    OneSignal.sendTag('role', 'helper')
  }
  render() {
    return (
      <View>
        <Text style={Style.text}>Welcome {this.props.user.user_metadata.name}!</Text>
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
