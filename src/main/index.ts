import { Main } from "@freelensapp/extensions";
import log from "electron-log/main";
import { IpcMain } from "./helpers/main";

export default class FluxExtensionExampleMain extends Main.LensExtension {
  // private ipc: IpcMain;

  onActivate(): Promise<void> | void {
    const ipc = IpcMain.createInstance(this);

    ipc.handle("test-invoke", (event, data) => {
      setTimeout(() => {
        log.info("broadcasting...");
        ipc.broadcast("test-event", "Hello from main broadcast: " + JSON.stringify({ event, data }));
      }, 1000);
    });
  }
}
