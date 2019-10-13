import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import t from 'tcomb-form-native'

const Form = t.form.Form

const User = t.struct({
  email: t.String,
  name: t.String,
  age: t.Number,
  phoneNumber: t.String,
})

const options = {
  fields: {
    email: {
      error: 'Invalid email',
    },
    name: {
      error: 'Invalid name',
    },
    age: {
      error: 'Invalid age',
    },
    phoneNumber: {
      label: 'Phone Number',
    },
  },
}

class SeekerForm extends React.Component {
  componentDidMount() {}

  onChange(value) {
    // this.setState({ this.props.profile })
  }

  handleSubmit() {
    const value = this._form.getValue() // use that ref to get the form value
    console.log('value: ', value)
  }

  render() {
    return (
      <View>
        <Text>Profile:</Text>
        <Form
          type={User}
          ref={(c) => {
            this._form = c
          }}
          options={options}
          value={this.props.profile}
          onChange={this.onChange.bind(this)}
        />
        <Button title="Submit" onPress={this.handleSubmit.bind(this)} />
      </View>
    )
  }
}

SeekerForm.propTypes = {
  profile: PropTypes.object,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeekerForm)
