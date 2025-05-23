import { Renderer } from "@freelensapp/extensions";
import React from "react";
import { IpcRenderer } from "../helpers/renderer";

import styleInline from "./page.scss?inline";

export class FluxExtensionExamplePage extends React.Component<{ extension: Renderer.LensExtension }> {
  constructor(props: { extension: Renderer.LensExtension }) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
    IpcRenderer.getInstance().invoke("test-invoke", "Hello, world!");
    IpcRenderer.getInstance().listen("test-event", (_event: any, data: any) => {
      console.log("data", data);
    });
  }

  render() {
    return (
      <>
        <style>{styleInline}</style>
        <div className="example-page">
          <h1>Example extension</h1>
        </div>
      </>
    );
  }
}
