import {Component} from 'react'
import {
  MainContainer,
  ResponsiveContainer,
  Heading,
  InnerContainer,
  ImageContainer,
  FormContainer,
  Label,
  Input,
  SelectContainer,
  CustomOption,
  SubmitButton,
  Para,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    selectValue: fontSizesOptionsList[0].optionId,
    displayImage: false,
  }

  changeTopText = event => {
    this.setState({topText: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  changeOption = event => {
    this.setState({selectValue: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText} = this.state
    if (
      imageUrl !== undefined &&
      topText !== undefined &&
      bottomText !== undefined
    ) {
      this.setState({displayImage: true})
    }
  }

  renderForm = () => {
    const {imageUrl, topText, bottomText, selectValue} = this.state
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          value={imageUrl}
          placeholder="Enter the Image Url"
          onChange={this.changeImageUrl}
          type="text"
        />

        <Label htmlFor="topText">Top Text</Label>
        <Input
          id="topText"
          value={topText}
          placeholder="Enter the Top Text"
          onChange={this.changeTopText}
          type="text"
        />

        <Label htmlFor="bottomText">Bottom Text</Label>
        <Input
          id="bottomText"
          value={bottomText}
          placeholder="Enter the Bottom Text"
          onChange={this.changeBottomText}
          type="text"
        />

        <Label htmlFor="fontSize">Font Size</Label>
        <SelectContainer
          id="fontSize"
          defaultValue={selectValue}
          onChange={this.changeOption}
        >
          {fontSizesOptionsList.map(each => (
            <CustomOption key={each.optionId} value={each.optionId}>
              {each.displayText}
            </CustomOption>
          ))}
        </SelectContainer>

        <SubmitButton type="submit">Generate</SubmitButton>
      </FormContainer>
    )
  }

  renderMeme = () => {
    const {
      imageUrl,
      topText,
      bottomText,
      selectValue,
      displayImage,
    } = this.state
    return displayImage ? (
      <ImageContainer data-testid="meme" bgImage={imageUrl}>
        <Para fontsize={selectValue}>{topText}</Para>
        <Para fontsize={selectValue}>{bottomText}</Para>
      </ImageContainer>
    ) : null
  }

  render() {
    return (
      <MainContainer>
        <ResponsiveContainer>
          <Heading>Meme Generator</Heading>
          <InnerContainer>
            {this.renderMeme()}
            {this.renderForm()}
          </InnerContainer>
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
