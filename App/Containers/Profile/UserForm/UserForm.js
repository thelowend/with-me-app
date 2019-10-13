import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ProfileActions from 'App/Stores/Profile/Actions'
import t from 'tcomb-form-native'

const Form = t.form.Form

const User = t.struct({
  name: t.String,
  age: t.Number,
  contact_number: t.String,
})

const options = {
  fields: {
    name: {
      error: 'Invalid name',
    },
    age: {
      error: 'Invalid age',
    },
    contact_number: {
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
      this.props.updateProfile(
        this.props.profile._id,
        Object.assign(this.props.profile.user_metadata, value)
      )
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
          value={this.props.profile.user_metadata}
          onChange={this.onChange.bind(this)}
        />
        <Button title="Submit" onPress={this.handleSubmit.bind(this)} />
        {this.props.profileErrorMessage ? <Text>{this.props.profileErrorMessage}</Text> : null}
      </View>
    )
  }
}

UserForm.propTypes = {
  profile: PropTypes.object,
  updateProfile: PropTypes.func,
  profileErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  profileErrorMessage: state.profile.profileErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (idToken, profile) => dispatch(ProfileActions.updateProfile(idToken, profile)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)
