import { Main } from "@freelensapp/extensions";
import log from "electron-log/main";
import { IpcMain } from "./helpers/main";

export default class FluxExtensionExampleMain extends Main.LensExtension {
  // private ipc: IpcMain;

  onActivate(): Promise<void> | void {
    const ipc = IpcMain.createInstance(this);

    ipc.handle("test-invoke", (_event: any, _data: any) => {
      setTimeout(() => {
        log.info("broadcasting...");
        ipc.broadcast("test", "Hello from main broadcast - " + new Date().toISOString());
      }, 1000);
    });
  }
}
