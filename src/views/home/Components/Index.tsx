import React, { useEffect, useState } from "react";
import "../../../css/pagination.css";
interface SelectProps {
  value: string | number;
  onChange: Function;
}

//@ts-ignore
export const Select = ({ value, onChange }: SelectProps) => {
  return (
    //TODO: Estilizar components selector
    <div className="select">
      <select
        value={value}
        //@ts-ignore
        onChange={onChange}
      >
        <option value={16}>16 fotos</option>
        <option value={32}>32 fotos</option>
        <option value={48}>48 fotos</option>
      </select>
    </div>
  );
};
interface ContainerPhotosProps {
  photographer: string;
  image: string;
  photographer_url: string;
}

export const ContainerPhoto = ({
  photographer,
  image,
  photographer_url,
}: ContainerPhotosProps) => {
  return (
    <article className="Container-photo">
      <img src={image} alt={photographer} />
      <div className="Container-info">
        <a href={photographer_url}>{photographer}</a>
      </div>
    </article>
  );
};
interface PaginationProps {
  per_page: number;
  total_results: number;
  onClickPage: Function;
}

export const Pagination = ({
  per_page,
  total_results,
  onClickPage,
}: PaginationProps) => {
  const [populatePaganation, setPopulatePaganation] = useState<any[]>();
  const [pageSection, setPageSection] = useState<number>(0);
  const [page, setPage] = useState<string>("1");
  const dividePages = () => {
    let pages = Math.round(total_results / per_page);
    let sectionPages = Math.round(pages / 10);
    let sectionsPage: any[] = new Array(sectionPages);
    let auxCount = 1;
    for (let i = 0; i < sectionsPage.length; i++) {
      sectionsPage[i] = [];
      for (let j = 0; j < pages; j++) {
        if (sectionsPage[i].length < 10) {
          sectionsPage[i].push(auxCount);
          auxCount++;
        }
      }
    }
    setPopulatePaganation(sectionsPage);
  };

  useEffect(() => {
    setPageSection(0);
    setPage("1");
    dividePages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [per_page, total_results]);

  useEffect(() => {
    setActiveButtom(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, populatePaganation]);

  const changeSectionPage = (value: string) => {
    let auxPage = JSON.parse(JSON.stringify(pageSection));
    if (value === "add") {
      auxPage++;
      if (populatePaganation && populatePaganation.length > auxPage) {
        setPageSection(auxPage);
      }
    }
    if (value === "sub") {
      if (auxPage !== 0) {
        setPageSection(auxPage - 1);
      }
    }
  };
  const setActiveButtom = (page: string) => {
    let activeButtons = document.getElementsByClassName("active");
    if (activeButtons.length !== 0) {
      let elements = Array.from(activeButtons);
      elements.forEach((element: any) => element.classList.remove("active"));
    }
    let pageButtom = document.getElementById(page.toString());
    if (pageButtom) pageButtom.classList.add("active");
  };

  return (
    <div>
      <div className="container-button">
        <button className="button" onClick={() => changeSectionPage("sub")}>
          {"<"}
        </button>
        {populatePaganation &&
          populatePaganation[pageSection].map((page: string) => (
            <div key={page}>
              <button
                className="button button-page"
                id={page}
                //@ts-ignore
                onClick={(e: any) => {
                  onClickPage(e.target.id);
                  setPage(e.target.id);
                }}
              >
                {page}
              </button>
            </div>
          ))}{" "}
        <button className="button" onClick={() => changeSectionPage("add")}>
          {">"}
        </button>
      </div>
    </div>
  );
};
