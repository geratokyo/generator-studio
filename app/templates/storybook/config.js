import { configure } from "@storybook/react";
import "../<%= srcDir %>src/main.scss";

// automatically import all files ending in *.stories.js
const req = require.context("../<%= srcDir%>src/components/ui", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);