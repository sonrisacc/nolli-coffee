// @flow

export type Bean = {
  id: string,
  name: string,
  region: string,
  thumbnail: string,
  description: string,
  detail: string,
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};
