import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {setModalReuse,setModalOpen} from '../../redux-toolkit/features/modal/modalSlice';
import "./style.scss";

const ReuseModal = () => {
  const dispatch = useDispatch();
  const { modalReuse} = useSelector((state) => state.modaldb);
  const yesButtonClick = ()=>{
    dispatch(setModalReuse(false))
    dispatch(setModalOpen(true))

  }
  const noButtonClick = ()=>{
    dispatch(setModalReuse(false))
    dispatch(setModalOpen(false))
  }
  return modalReuse && (
    <div className="reuseModal">
      <div className="reuseModal__content">
        <h3>Will you use it once more?</h3>
        <div className="reuseModal__content__btnArea">
          <button type="button" onClick={yesButtonClick}>Yes</button>
          <button type="button" onClick={noButtonClick}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ReuseModal;
