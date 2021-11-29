import React, { useEffect } from "react";

import "../../css/photos.css";
import { ContainerPhoto } from "./Components/Index";
import { IPhotoState, IPhoto } from "../../store/photos/types";
import { setPhotos, setInformationPage } from "../../store/photos/actions";
import { useSelector, useDispatch } from "react-redux";
import { ControllerPhotos } from "../../controllers";

const Home: React.FC = () => {
  const photos = useSelector<IPhotoState, IPhotoState["photos"]>(
    (state) => state.photos
  );
  const information_page = useSelector<
    IPhotoState,
    IPhotoState["information_page"]
  >((state) => state.information_page);
  const dispatch = useDispatch();

  const pulutatePhotos = async () => {
    let response = await ControllerPhotos.getPhotos({
      per_page: information_page.per_page,
    });
    await dispatch(
      setInformationPage({
        per_page: response.per_page,
        page: response.page,
        total_results: response.total_results,
      })
    );
    await dispatch(setPhotos(response.photos));
  };
  const onChangeSelect = (value: any) => {};
  useEffect(() => {
    pulutatePhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="Container">
      <div className="Home-head">
     </div>
      <section className="Galery">
        {photos && typeof photos !== "undefined"
          ? photos.map((photo: IPhoto) => <ContainerPhoto 
          id={photo.id}
          image={photo.src.original}
          photographer={photo.photographer}
          photographer_url={photo.photographer_url}
           />)
          : null}
      </section>
    </div>
  );
};

export default Home;
//TODO criar components para fotos
//TODO implementar modo dark
