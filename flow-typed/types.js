// @flow

export type Bean = {
  id: string,
  brandId: string,
  roast: string,
  logo_url: string,
  detail_url: string,
  acidity: string,
  bean_name: string,
  notes: string,
  rating: number,
  price: string,
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};
