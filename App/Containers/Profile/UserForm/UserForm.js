import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ProfileActions from 'App/Stores/Profile/Actions'
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

class UserForm extends React.Component {
  componentDidMount() {}

  onChange(value) {
    // this.setState({ this.props.profile })
  }
  handleValidation(values) {
    return true
  }

  handleSubmit() {
    const value = this._form.getValue() // use that ref to get the form value
    console.log('value: ', value)
    if (value && this.handleValidation(value)) {
      this.props.updateProfile(this.props.profile._id, value)
    } else {
      console.log('error')
    }
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

UserForm.propTypes = {
  profile: PropTypes.object,
  updateProfile: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (idToken, profile) => dispatch(ProfileActions.updateProfile(idToken, profile)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)
