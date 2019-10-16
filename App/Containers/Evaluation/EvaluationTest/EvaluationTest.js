import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import EvaluationItem from '../EvaluationItem/EvaluationItem'
import Style from '../EvaluationScreenStyle'

class EvaluationTest extends React.Component {
  constructor(props) {
    super(props)
    const initialSliderValues = {}
    props.test.items.forEach((val, i) => {
      initialSliderValues[i] = props.test.scoring.values[0].value
    })
    this.state = {
      sliderValues: initialSliderValues,
    }
  }

  _handleSubmit() {
    this.props.sendEvaluation(this.state.sliderValues)
  }

  _onChange(key) {
    return (val) => {
      this.setState((prevState) => {
        let sliderValues = prevState.sliderValues
        sliderValues[key] = val
        return {
          sliderValues,
        }
      })
    }
  }

  render() {
    return (
      <View style={Style.evaluationTestContainer}>
        <Text>DSMV TEST:</Text>
        <View style={Style.itemsContainer}>
          <Text>{this.props.test.opening}</Text>
          {this.props.test.items.map((text, key) => (
            <EvaluationItem
              onChange={this._onChange(key).bind(this)}
              key={key}
              text={text}
              step={this.props.test.scoring.step}
              range={this.props.test.scoring.values}
              initialValue={this.props.test.scoring.values[0]}
            />
          ))}
        </View>
        <Button title="Submit" onPress={this._handleSubmit.bind(this)} />
      </View>
    )
  }
}

EvaluationTest.propTypes = {
  sendEvaluation: PropTypes.func,
  test: PropTypes.object,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluationTest)
