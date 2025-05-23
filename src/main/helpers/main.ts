import { Main } from "@freelensapp/extensions";

export class IpcMain extends Main.Ipc {
  constructor(extension: Main.LensExtension) {
    super(extension);
  }
}
