import Image from "next/image";
import React, { useRef } from "react";
// import useOnClickOutside from '../../hooks/useOnClickOutside';

function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_data,
  first_air_data,
  vote_average,
  setModalOpen,
}: any) {
  //현재 엘리먼트 값 가져오기
  // const ref = useRef();
  // useOnClickOutside(ref,() => { setModalOpen(false)});

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <Image
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
            fill={true}
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>
              {release_data ? release_data : first_air_data}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">평점 : {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
