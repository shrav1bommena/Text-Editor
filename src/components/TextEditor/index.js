import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  ButtonBold,
  ButtonItalic,
  ButtonUnderline,
  TextArea,
} from './styledComponents'

import './index.css'

class TextEditor extends Component {
  state = {
    applyBold: false,
    applyItalic: false,
    applyUnderline: false,
    text: '',
  }

  onApplyBold = () => {
    this.setState(prevState => ({applyBold: !prevState.applyBold}))
  }

  onApplyItalic = () => {
    this.setState(prevState => ({applyItalic: !prevState.applyItalic}))
  }

  onApplyUnderline = () => {
    this.setState(prevState => ({applyUnderline: !prevState.applyUnderline}))
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  renderLeftSection = () => (
    <div className="editor-left-section">
      <h1 className="editor-title">Text Editor</h1>
      <div className="editor-image-container">
        <img
          className="editor-image"
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
      </div>
    </div>
  )

  renderRightSection = () => {
    const {applyBold, applyItalic, applyUnderline, text} = this.state

    return (
      <div className="editor-right-section">
        <ul className="font-icon-styles-container">
          <li>
            <ButtonBold
              onClick={this.onApplyBold}
              applyBold={applyBold}
              type="button"
              data-testid="bold"
            >
              <VscBold size={25} />
            </ButtonBold>
          </li>
          <li>
            <ButtonItalic
              onClick={this.onApplyItalic}
              applyItalic={applyItalic}
              type="button"
              data-testid="italic"
            >
              <GoItalic size={25} />
            </ButtonItalic>
          </li>
          <li>
            <ButtonUnderline
              onClick={this.onApplyUnderline}
              applyUnderline={applyUnderline}
              type="button"
              data-testid="underline"
            >
              <AiOutlineUnderline size={25} />
            </ButtonUnderline>
          </li>
        </ul>
        <>
          <TextArea
            applyBold={applyBold}
            applyItalic={applyItalic}
            applyUnderline={applyUnderline}
            onChange={this.onChangeText}
            cols="50"
            rows="20"
          />
        </>
      </div>
    )
  }

  render() {
    return (
      <div className="main-bg">
        <div className="editor-container">
          {this.renderLeftSection()}
          {this.renderRightSection()}
        </div>
      </div>
    )
  }
}

export default TextEditor
