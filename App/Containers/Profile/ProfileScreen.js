import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ProfileScreenStyle'

class ProfileScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={Style.container}>
        {this.user.user_metadata.profile === 'seeker' ? (
          <View>
            <Text>SEEKER</Text>
          </View>
        ) : (
          <View>
            <Text>HELPER</Text>
          </View>
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

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)
