import React from "react";

//@ts-ignore
export const Select = (value, onChange) => {
  return (
    //TODO: Estilizar components selector
    <div className="select">
      <select value={value} onChange={onChange}>
        <option value={15}>15 fotos</option>
        <option value={30}>30 fotos</option>
        <option value={45}>45 fotos</option>
      </select>
    </div>
  );
};
interface Props {
  id: number;
  photographer: string;
  image: string;
  photographer_url: string;
}

export const ContainerPhoto = ({id,photographer,image,photographer_url}: Props) => {

  return (
    <article className="Container-photo" key={id}>
      <img src={image} alt={photographer} />
      <div className="Container-info">
        <a href={photographer_url}>{photographer}</a>
      </div>
    </article>
  );
};
