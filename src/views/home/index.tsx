import React, { useEffect, useState } from "react";
import "../../css/photos.css";
import { ContainerPhoto, Select, Pagination } from "./Components/Index";
import { IPhotoState, IPhoto } from "../../store/photos/types";
import { setPhotos, setInformationPage } from "../../store/photos/actions";
import { useSelector, useDispatch } from "react-redux";
import { ControllerPhotos } from "../../controllers";

const Home: React.FC = () => {
  const [localPhotos, setLocalPhotos] = useState<IPhoto[]>();
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

    dispatch(
      setInformationPage({
        per_page: response.per_page,
        page: response.page,
        total_results: response.total_results,
      })
    );
    dispatch(setPhotos(response.photos));
  };

  useEffect(() => {
    pulutatePhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLocalPhotos(photos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos]);

  useEffect(() => {
    pulutatePhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [information_page.per_page]);

  const onChangeSelect = async (value: any) => {
    let arrInformation_page = JSON.parse(JSON.stringify(information_page));
    await dispatch(
      setInformationPage({ ...arrInformation_page, per_page: Number(value) })
    );
  };
  const onClickPage = async (value: string | number) => {
    let response = await ControllerPhotos.getPhotos({
      per_page: information_page.per_page,
      page: value,
    });
    dispatch(
      setInformationPage({
        per_page: response.per_page,
        page: response.page,
        total_results: response.total_results,
      })
    );
    dispatch(setPhotos(response.photos));
  };
  return (
    <div className="Container">
      <div className="center">
        <div className="Home-head">
          <Select
            value={information_page.per_page}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              onChangeSelect(e.currentTarget.value)
            }
          />
        </div>
      </div>
      <section className="Galery">
        {localPhotos && typeof localPhotos !== "undefined"
          ? localPhotos.map((photo: IPhoto) => (
              <div key={photo.id}>
                <ContainerPhoto
                  image={photo.src.medium}
                  photographer={photo.photographer}
                  photographer_url={photo.photographer_url}
                />
              </div>
            ))
          : null}
      </section>
      {information_page.total_results !== 0 ? (
        <Pagination
          per_page={information_page.per_page}
          total_results={information_page.total_results}
          onClickPage={onClickPage}
        />
      ) : null}
    </div>
  );
};

export default Home;
//TODO implementar modo dark
