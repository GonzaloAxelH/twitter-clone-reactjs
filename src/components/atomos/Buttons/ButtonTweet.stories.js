import ButtonTweet from "./ButtonTweet";

export default {
  title: "Components/ButtonTweet",
  component: ButtonTweet,
};

const Template = (args) => <ButtonTweet {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  backgroundColor: "#1D9BF0",
  size: "largue",
  label: "Button",
};
