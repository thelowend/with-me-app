import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Slider from '@react-native-community/slider'
import Style from './EvaluationScreenStyle'

class EvaluationScreen extends React.Component {
  componentWillMount() {
    let test = require('App/Assets/JSON/' + 'EN_DSM5_Level2_Depression_Adult.json')
    console.log('the test:', test)
  }
  componentDidMount() {}

  onChange(value) {
    // this.setState({ this.props.profile })
  }

  handleSubmit() {
    console.log('submit')
  }

  render() {
    return (
      <View style={Style.container}>
        <Text>DSM TEST:</Text>
        <Slider
          style={Style.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <Button title="Submit" onPress={this.handleSubmit.bind(this)} />
      </View>
    )
  }
}

EvaluationScreen.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluationScreen)
