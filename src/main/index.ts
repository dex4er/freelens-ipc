import { Main } from "@freelensapp/extensions";
import { IpcMain } from "./helpers/main";

export default class FluxExtensionExampleMain extends Main.LensExtension {
  // private ipc: IpcMain;

  onActivate(): Promise<void> | void {
    const ipc = IpcMain.createInstance(this);

    ipc.handle("test-invoke", async (event, data) => {
      setTimeout(() => {
        console.log("broadcasting...");
        ipc.broadcast("test-event", "Hello from main broadcast: " + JSON.stringify({ event, data }));
      }, 1000);
      return "Hello from main invoke: " + JSON.stringify({ event, data });
    });
  }
}
