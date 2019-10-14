import React from 'react'
import { Text, View, Button } from 'native-base'
import { connect } from 'react-redux'
import NavigationService from 'App/Services/NavigationService'

class TakeTest extends React.Component {
  render() {
    return (
      <View>
        <Text>
          You&#39;re almost ready to begin using WithMe App! But first we need to know where we are.
        </Text>
        <Button onPress={() => NavigationService.navigate('EvaluationScreen')}>
          <Text>Take Mood Test</Text>
        </Button>
      </View>
    )
  }
}

TakeTest.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TakeTest)
