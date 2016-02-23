'use strict';

import * as fs from "file-system";
import * as types from "utils/types";

export abstract class Sound {
  protected player: any;

  constructor(protected path: string) {
    if (path.indexOf("~/") === 0) {
      path = fs.path.join(fs.knownFolders.currentApp().path, path.replace("~/", ""));
    }

    const documents = fs.knownFolders.currentApp();

    console.log('folder:', documents.path);

    fs.Folder.fromPath(fs.path.join(documents.path, '')).eachEntity(function (entity) {
      console.log('-', entity.name);
      // Return true to continue, or return false to stop the iteration.
      return true;
    });
    console.log('path', path);

    if (!fs.File.exists(path)) {
      console.error("Sound not initialized; file not found.");
      return;
    }
  };

  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
  abstract isPlaying(): boolean;
  abstract seekTo(milliseconds: number): void;
  abstract release(): void;
  abstract getDuration(): number;
  abstract getCurrentPosition(): number;
  abstract setRate(rate: number): number;
  abstract getRate(): number;
};
