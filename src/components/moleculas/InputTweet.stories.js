import InputTweet from './InputTweet'

export default {
  title: 'Components/InpuTweet',
  component: InputTweet
}

const Template = (args) => <InputTweet {...args} />

export const Item = Template.bind({})

Item.args = {}
