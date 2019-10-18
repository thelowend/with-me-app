import React from 'react'
import { Text, View, Button, Textarea, Icon } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './MainScreenStyle'
import TakeTest from '../Popups/TakeTest'
import Modal from 'react-native-modal'
import OneSignal from 'react-native-onesignal'
import UserActions from '../../Stores/User/Actions'
import NavigationService from 'App/Services/NavigationService'

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
  _goToProfilePage() {
    NavigationService.navigate('ProfileScreen')
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
  _syncWithTW() {
    this.props.syncWithTw(this.props.user._id, this.props.user._id)
  }
  render() {
    return (
      <View>
        <Text style={Style.text}>Welcome {this.props.user.user_metadata.name}!</Text>
        {!this.props.user.user_metadata.threshold ? (
          <TakeTest />
        ) : (
          <View style={Style.userScreenContainer}>
            <Text>Your latest evaluation: {this.props.user.user_metadata.threshold}</Text>
            <Button
              rounded
              iconLeft
              onPress={this._goToProfilePage.bind(this)}
              style={Style.commonButton}
            >
              <Icon name="person" />
              <Text>Update Profile</Text>
            </Button>
            {this.props.user.fb_sync ? (
              <View>
                <Text>Synced with FB!</Text>
                <Button
                  rounded
                  iconLeft
                  onPress={() => this._openSubmitModal('Facebook')}
                  style={Style.FBButton}
                >
                  <Icon name="logo-facebook" />
                  <Text>Post On Facebook</Text>
                </Button>
              </View>
            ) : (
              <Button rounded iconLeft onPress={() => this._syncWithFB()} style={Style.FBButton}>
                <Icon name="logo-facebook" />
                <Text>Sync with Facebook</Text>
              </Button>
            )}
            {this.props.user.tw_sync ? (
              <View>
                <Text>Synced with Twitter!</Text>
                <Button
                  rounded
                  iconLeft
                  onPress={() => this._openSubmitModal('Twitter')}
                  style={Style.TWButton}
                >
                  <Icon name="logo-twitter" />
                  <Text>Send Tweet</Text>
                </Button>
              </View>
            ) : (
              <Button rounded iconLeft onPress={() => this._syncWithTW()} style={Style.TWButton}>
                <Icon name="logo-twitter" />
                <Text>Sync with Twitter</Text>
              </Button>
            )}
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
                <Button
                  style={Style.commonButton}
                  rounded
                  onPress={() => this._submit(this.state.modalType)}
                >
                  <Text>Send to {this.state.modalType}</Text>
                </Button>
                <Button
                  rounded
                  style={Style.buttonCloseSubmitModal}
                  onPress={this._closeSubmitModal.bind(this)}
                >
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
  syncWithTw: PropTypes.func,
}
const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  syncWithFb: (id, fbId) => dispatch(UserActions.syncWithFb(id, fbId)),
  syncWithTw: (id, twId) => dispatch(UserActions.syncWithTw(id, twId)),
  sendSocialMediaPost: (id, target, post) =>
    dispatch(UserActions.sendSocialMediaPost(id, target, post)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainUserScreen)
