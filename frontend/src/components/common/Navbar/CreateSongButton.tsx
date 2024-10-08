import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AddSongButton} from "../../../assets/style/NavbarStyle";
import CreateSong from "../../CreateSong";
import Modal from "../../Modal/Modal";

const CreateSongButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const handleOpenModal = (component: React.ReactNode) => {
    setModalContent(component);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <AddSongButton
        onClick={() => handleOpenModal(<CreateSong onClose={handleCloseModal} />)}
      
      >
        <IoMdAdd /> Song
      </AddSongButton>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        component={modalContent}
      />
    </>
  );
};

export default CreateSongButton;
