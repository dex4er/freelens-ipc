import { Renderer } from "@freelensapp/extensions";

export class IpcRenderer extends Renderer.Ipc {
  constructor(extension: Renderer.LensExtension) {
    super(extension);
  }
}
