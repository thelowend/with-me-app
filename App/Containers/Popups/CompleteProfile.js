import React from 'react'
import { Text, View, Button } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import NavigationService from 'App/Services/NavigationService'
import Style from 'App/Containers/Main/MainScreenStyle.js'

class CompleteProfile extends React.Component {
  render() {
    return (
      <View>
        <Text style={Style.text}>
          Thanks for using WithMe App! Before we continue, in order to help us help you please
          complete your profile.
        </Text>
        <Button onPress={() => NavigationService.navigate('ProfileScreen')}>
          <Text>Complete Profile Now</Text>
        </Button>
      </View>
    )
  }
}

CompleteProfile.propTypes = {
  profile: PropTypes.object,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompleteProfile)
