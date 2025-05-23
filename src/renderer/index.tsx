/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@freelensapp/extensions";
// import { IpcRenderer } from "./helpers/renderer";
import { FluxExtensionExamplePage } from "./page/page";

import svgIcon from "./src/icons/example.svg?raw";

// @ts-ignore
import React from "react";

const {
  Component: { Icon },
} = Renderer;

export function FluxExtensionExampleIcon(props: Renderer.Component.IconProps) {
  return <Icon {...props} svg={svgIcon} />;
}

export default class FluxExtensionExampleRenderer extends Renderer.LensExtension {
  onActivate() {
    // const ipc = IpcRenderer.createInstance(this);
  }

  clusterPages = [
    {
      id: "example-page",
      components: {
        Page: () => <FluxExtensionExamplePage extension={this} />,
      },
    },
  ];

  clusterPageMenus = [
    {
      id: "example",
      title: "Example",
      target: { pageId: "example-page" },
      components: {
        Icon: FluxExtensionExampleIcon,
      },
    },
  ];
}
