export enum PhotoStore {
  ID_STORE = "PHOTO",
}

export enum PhotoTypes {
  SET_PHOTOS = "SET_PHOTOS",
  SET_INFORMATION_PAGE = "SET_INFORMATION_PAGE",
}

export type PhotoActions = {
  idStore: PhotoStore.ID_STORE;
  type: PhotoTypes;
  photos?: IPhotoState["photos"];
  information_page?: IPhotoState["information_page"];
};

export interface IPhotoState {
  photos: IPhoto[] | any;
  information_page: IInformationPage | any;
}

export interface IInformationPage {
  total_results: number;
  page: number;
  per_page: number;
}

export interface IPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: number;
  src: Src;
  liked: false;
}

interface Src {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
}
