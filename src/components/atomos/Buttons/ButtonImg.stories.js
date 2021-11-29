import ButtonImg from './ButtonImg'
import IconBird from '../Icons/IconBird'
export default {
  title: 'Components/ButtonImg',
  component: ButtonImg
}

const Template = (args) => <ButtonImg {...args} />

export const Primary = Template.bind({})

Primary.args = {
  Icon: () => <IconBird />
}
