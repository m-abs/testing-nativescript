'use strict';

import * as fs from "file-system";
import * as types from "utils/types";

export class Sound {
  protected player: any;

  constructor(protected path: string) {
    if (path.indexOf("~/") === 0) {
      this.path = path = fs.path.join(fs.knownFolders.currentApp().path, path.replace("~/", ""));
    }

    const documents = fs.knownFolders.currentApp();

    console.log('folder:', documents.path);

    fs.Folder.fromPath(fs.path.join(documents.path, '')).eachEntity(function (entity) {
      console.log('-', entity.name);
      // Return true to continue, or return false to stop the iteration.
      return true;
    });

    if (!fs.File.exists(path)) {
      console.error("Sound not initialized; file not found.");
      return;
    }
  };

  play(): void {
    throw Error('not implemented');
  };

  pause(): void {
    throw Error('not implemented');
  };
  stop(): void {
    throw Error('not implemented');
  };
  isPlaying(): boolean {
    throw Error('not implemented');
  };
  seekTo(milliseconds: number): void {
    throw Error('not implemented');
  };
  release(): void {
    throw Error('not implemented');
  };
  getDuration(): number {
    throw Error('not implemented');
  };
  getCurrentPosition(): number {
    throw Error('not implemented');
  };
  setRate(rate: number): number {
    throw Error('not implemented');
  };
  getRate(): number {
    throw Error('not implemented');
  };
};
