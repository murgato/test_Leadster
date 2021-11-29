import { IPhotoState, PhotoActions, PhotoStore, PhotoTypes } from "./types";

const initialState: IPhotoState = {
  photos: [],
  information_page: {
    total_results: 0,
    page: 0,
    per_page: 15,
  },
};

const PhotoReducer = (
  state: IPhotoState = initialState,
  action: PhotoActions
) => {
  switch (action.idStore) {
    case PhotoStore.ID_STORE:
      switch (action.type) {
        case PhotoTypes.SET_PHOTOS:
          return { ...state, photos: action.photos };
        case PhotoTypes.SET_INFORMATION_PAGE:
          return { ...state, information_page: action.information_page };
        default:
          return state;
      }

    default:
      return state;
  }
};
export default PhotoReducer;
