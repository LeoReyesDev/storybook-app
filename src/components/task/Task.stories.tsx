import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Task } from "./Task";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Task",
  component: Task,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Task",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Task",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Task",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Task",
};
