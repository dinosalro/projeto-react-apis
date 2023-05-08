import { ModalWrapper, ModalContent } from "./Modal.styled";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import gotcha from "../../assets/Group 25.png";
import ohno from "../../assets/Frame 16.svg";
import Card from "../Card/Card";

const Modal = () => {
  const context = useContext(GlobalContext);
  const { setModal, cardModal } = context;

  function closeModal() {
    setModal(false);
  }

  return (
    <div>
      <ModalWrapper onClick={() => closeModal()}>
        {cardModal === 1 ? (
          <ModalContent src={gotcha} />
        ) : (
          <ModalContent src={ohno} />
        )}
      </ModalWrapper>
    </div>
  );
};

export default Modal;
