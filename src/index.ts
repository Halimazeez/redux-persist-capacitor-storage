import {
  Plugins,
  FilesystemDirectory,
  FilesystemEncoding
} from "@capacitor/core";

const { Filesystem } = Plugins;

class CapacitorStore {
  async getItem(key: string) {
    await Filesystem.readFile({
      path: key,
      directory: FilesystemDirectory.Cache,
      encoding: FilesystemEncoding.UTF8
    });
  }

  async setItem(key: string, value: string) {
    await Filesystem.writeFile({
      path: key,
      data: value,
      directory: FilesystemDirectory.Cache,
      encoding: FilesystemEncoding.UTF8
    });
  }

  async removeItem(path: string) {
    await Filesystem.deleteFile({
      path,
      directory: FilesystemDirectory.Cache
    });
  }

  async clear() {
    await Filesystem.rmdir({
      path: "secrets",
      directory: FilesystemDirectory.Cache,
      recursive: false
    });
  }

  async getAllKeys() {
    await Filesystem.readdir({
      path: "secrets",
      directory: FilesystemDirectory.Cache
    });
  }
}

export default new CapacitorStore();
