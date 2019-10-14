import React from 'react'
import { Text, View, Button } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './MainScreenStyle'
import TakeTest from '../Popups/TakeTest'

class MainUserScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={Style.text}>Welcome {this.props.user.user_metadata.name}!</Text>
        {!this.props.user.user_metadata.threshold ? <TakeTest /> : <View />}
      </View>
    )
  }
}

MainUserScreen.propTypes = {
  user: PropTypes.object,
}
const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainUserScreen)
