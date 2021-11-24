import ItemNav from "./ItemNav";
import IconHome from "../atomos/Icons/IconHome";
import IconSearch from "../atomos/Icons/IconSearch";
export default {
  title: "Components/ItemNav",
  component: ItemNav,
};

const Template = (args) => <ItemNav {...args} />;

export const Item = Template.bind({});
export const Item2= Template.bind({});

Item.args = {
  Icon:()=> <IconHome />,
  text: "Home",
  active:false
};

Item2.args = {
  Icon:()=> <IconSearch />,
  active:true,
  text: "Home",
};
