// Run this example by adding <%= javascript_pack_tag 'index' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);

  createRoot(appContainer).render(<App />);
});
