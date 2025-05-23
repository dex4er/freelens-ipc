import { Renderer } from "@freelensapp/extensions";

export class IpcRenderer extends Renderer.Ipc {
  constructor(extension: Renderer.LensExtension) {
    super(extension);
  }

  static createInstance: typeof Renderer.Ipc.createInstance = Renderer.Ipc.createInstance;
  static getInstance: typeof Renderer.Ipc.getInstance = Renderer.Ipc.getInstance;
}
