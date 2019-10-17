import React from 'react'
import { Text, View, Button, Textarea } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './MainScreenStyle'
import TakeTest from '../Popups/TakeTest'
import Modal from 'react-native-modal'
import OneSignal from 'react-native-onesignal'
import UserActions from '../../Stores/User/Actions'

class MainUserScreen extends React.Component {
  constructor(props) {
    super(props)

    OneSignal.sendTag('role', 'user')
    console.log('onesignal tag sent')

    this.state = {
      modalIsVisible: false,
      modalType: null,
      modalInputText: '',
    }
  }
  _openSubmitModal(type) {
    this.setState({
      modalInputText: '',
      modalIsVisible: true,
      modalType: type,
    })
  }
  _closeSubmitModal() {
    this.setState({
      modalIsVisible: false,
    })
  }
  _updateModalText(text) {
    this.setState({
      modalInputText: text,
    })
  }
  _sendSocialMediaPost() {
    this.props.sendSocialMediaPost(
      this.props.user._id,
      this.state.modalType,
      this.state.modalInputText
    )
    console.log('SUBMITTED: ', this.state.modalInputText)
  }
  _submit() {
    this._sendSocialMediaPost()
    this._closeSubmitModal()
  }
  _syncWithFB() {
    this.props.syncWithFb(this.props.user._id, this.props.user._id) // Temporarily we use the same id for both
  }
  render() {
    return (
      <View>
        <Text style={Style.text}>Welcome {this.props.user.user_metadata.name}!</Text>
        {!this.props.user.user_metadata.threshold ? (
          <TakeTest />
        ) : (
          <View>
            <Text>Your latest evaluation: {this.props.user.user_metadata.threshold}</Text>
            {this.props.user.fb_sync ? (
              <Text>Synced with FB!</Text>
            ) : (
              <Button onPress={() => this._syncWithFB()}>
                <Text>Sync with FB</Text>
              </Button>
            )}
            <Button onPress={() => this._openSubmitModal('Facebook')}>
              <Text>Submit FB Post</Text>
            </Button>
            <Modal isVisible={this.state.modalIsVisible}>
              <View style={Style.submitModal}>
                <Text style={Style.submitModalTitle}>Social Media Posting</Text>
                <Textarea
                  rowSpan={4}
                  bordered
                  placeholder="Input your toughts..."
                  style={Style.submitModalTextArea}
                  value={this.state.modalInputText}
                  onChangeText={this._updateModalText.bind(this)}
                />
                <Button onPress={() => this._submit(this.state.modalType)}>
                  <Text>Post to {this.state.modalType}</Text>
                </Button>
                <Button onPress={this._closeSubmitModal.bind(this)}>
                  <Text>Close</Text>
                </Button>
              </View>
            </Modal>
          </View>
        )}
      </View>
    )
  }
}

MainUserScreen.propTypes = {
  user: PropTypes.object,
  sendSocialMediaPost: PropTypes.func,
  syncWithFb: PropTypes.func,
}
const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  syncWithFb: (id, fbId) => dispatch(UserActions.syncWithFb(id, fbId)),
  sendSocialMediaPost: (id, target, post) =>
    dispatch(UserActions.sendSocialMediaPost(id, target, post)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainUserScreen)
