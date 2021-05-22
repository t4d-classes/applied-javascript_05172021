// src/components/Button.stories.js
import React from "react";

import { ToolHeader } from "./ToolHeader";

export default {
  title: "Example/ToolHeader",
  component: ToolHeader,
};

const Template = (args) => <ToolHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerText: "The Tool",
};
