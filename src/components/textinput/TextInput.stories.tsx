import TextInput from "./TextInput";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Button",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Submit = Template.bind({});
Submit.args = {
  label: "outline",
};

export const Check = Template.bind({});
Check.args = {
  label: "normal",
};
