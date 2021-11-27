import ButtonTweet from "./ButtonTweet";

export default {
  title: "Components/ButtonTweet",
  component: ButtonTweet,
};

const Template = (args) => <ButtonTweet {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  label: "Button",
  type:"primary"
};

Secondary.args = {
  label: "Button",
  type:"secondary"
};
