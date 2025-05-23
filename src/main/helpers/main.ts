import { Main } from "@freelensapp/extensions";
import type { Disposer } from "@freelensapp/utilities";
import * as Electron from "electron";

export class IpcMain extends Main.Ipc {
  constructor(extension: Main.LensExtension) {
    super(extension);
  }

  static createInstance: typeof Main.Ipc.createInstance = Main.Ipc.createInstance;
  static getInstance: typeof Main.Ipc.getInstance = Main.Ipc.getInstance;

  handle(channel: string, listener: (event: Electron.IpcMainInvokeEvent, ...args: any[]) => any): void {
    super.handle(channel, listener);
  }

  listen(channel: string, listener: (event: Electron.IpcMainEvent, ...args: any[]) => any): Disposer {
    return super.listen(channel, listener);
  }

  broadcast(channel: string, ...args: any[]): void {
    super.broadcast(channel, ...args);
  }
}
