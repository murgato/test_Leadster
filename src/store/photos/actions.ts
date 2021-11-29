import { IPhotoState, PhotoActions, PhotoStore, PhotoTypes } from "./types";

export const setPhotos = (photos: IPhotoState["photos"]): PhotoActions => ({
  idStore: PhotoStore.ID_STORE,
  type: PhotoTypes.SET_PHOTOS,
  photos,
});

export const setInformationPage = (information_page: IPhotoState["information_page"]): PhotoActions => ({
  idStore: PhotoStore.ID_STORE,
  type: PhotoTypes.SET_INFORMATION_PAGE,
  information_page,
});
