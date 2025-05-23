import { Renderer } from "@freelensapp/extensions";
import React from "react";
import { IpcRenderer } from "../helpers/renderer";

import styleInline from "./page.scss?inline";

export class FluxExtensionExamplePage extends React.Component<{ extension: Renderer.LensExtension }> {
  constructor(props: { extension: Renderer.LensExtension }) {
    super(props);
  }

  async componentDidMount() {
    console.log("componentDidMount");
    const invokeReturn = await IpcRenderer.getInstance().invoke("test-invoke", "Hello, world!");
    console.log("test-invoke return:", invokeReturn);
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
