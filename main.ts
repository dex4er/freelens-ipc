import { Main } from "@freelensapp/extensions";
import { IpcMain } from "./src/helpers/main";
import log from 'electron-log/main';

export default class FluxExtensionExampleMain extends Main.LensExtension {
    private ipc: IpcMain;

    onActivate(): Promise<void> | void {
        this.ipc = IpcMain.createInstance(this);

        this.ipc.handle("test-invoke", (event: any, data: any) => {
        setTimeout(() => {
            log.info("broadcasting...");
            this.ipc.broadcast("test", "Hello from main broadcast - " + new Date().toISOString());
        }, 1000);
    });
    
       
    }
}
