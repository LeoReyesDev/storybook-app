import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ImageList, { ImageListProps } from "./ImageList";

export default {
  title: "Example/ImageList",
  component: ImageList,
} as Meta;

const Template: Story<ImageListProps> = (args) => <ImageList {...args} />;

export const Default = Template.bind({});
Default.args = {
  apiUrl: "https://randomuser.me/api/?results=8",
};
