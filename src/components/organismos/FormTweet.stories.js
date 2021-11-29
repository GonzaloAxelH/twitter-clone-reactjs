import FormTweet from './FormTweet'
export default {
  title: 'Components/FormTweet ',
  component: FormTweet
}

const Template = (args) => <FormTweet {...args} />

export const Item = Template.bind({})

Item.args = {}
