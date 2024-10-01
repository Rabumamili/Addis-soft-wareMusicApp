import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../features/Song/SongSlice";
import { Song } from "../types/types";
import { RootState } from "../app/store";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaSpinner } from "react-icons/fa6";
import Modal from "./Modal/Modal";
import UpdateSong from "./UpdateSong";
import DeleteSong from "./DeleteSong";
import { toast } from 'react-toastify';

import { Flex, Text, Box } from "rebass";
import Layout from "./common/Layout";
import {
  ResponsiveFlex,
  SongImage,
  ButtonContainer,
  EditButton, // Using custom button for Edit
  DeleteButton, // Using custom button for Delete
} from "../assets/style/ListSongsStyle"; // Updated import for Edit/Delete buttons

const ListSongs: React.FC = () => {
  const dispatch = useDispatch();

  const { songs, isLoading, error } = useSelector(
    (state: RootState) => state.songs
  );

  // Define states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 5;

  // Handle song CRUD forms modal
  const handleOpenModal = (component: React.ReactNode) => {
    setModalContent(component);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  if (error) {
    toast.error(error);
  }

  // Handle pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);
  const totalPages = Math.ceil(songs.length / songsPerPage);

  return (
    <Layout>
      <ResponsiveFlex>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text width={"25%"} fontWeight={"bold"}>
            Song
          </Text>
          <Text width={"25%"} fontWeight={"bold"}>
            Album
          </Text>
          <Text fontWeight={"bold"}>Genre</Text>
          <Text fontWeight={"bold"}>Actions</Text>
        </Flex>
        <hr
          style={{
            width: "100%",
            borderColor: "#9290C3",
            borderWidth: "2px",
            marginBottom: "1rem",
          }}
        />
        {isLoading ? (
          <Text
            fontWeight="bold"
            textAlign={"center"}
            fontSize={"1.5rem"}
            marginY={"10%"}
          >
            <FaSpinner />
            Loading...
          </Text>
        ) : (
          currentSongs.map((song: Song) => {
            return (
              <div key={song._id}>
                <Flex
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  marginY={"1rem"} // Added margin for more space
                >
                  <Flex alignItems={"center"} width={"25%"}>
                    <SongImage src="../../assets/sound-icon.png" />
                    <Box>
                      <h3>{song.title}</h3>
                      <p>By: {song.artist}</p>
                    </Box>
                  </Flex>
                  <Text width={"25%"}>{song.album}</Text>
                  <Text textAlign={"center"}>{song.genre}</Text>
                  <ButtonContainer>
                    <EditButton
                      onClick={() =>
                        handleOpenModal(
                          <UpdateSong
                            onClose={handleCloseModal}
                            id={song._id}
                          />
                        )
                      }
                    >
                      <CiEdit />
                    </EditButton>
                    <DeleteButton
                      onClick={() =>
                        handleOpenModal(
                          <DeleteSong
                            onClose={handleCloseModal}
                            id={song._id}
                          />
                        )
                      }
                    >
                      <MdOutlineDeleteOutline />
                    </DeleteButton>
                  </ButtonContainer>
                </Flex>
              </div>
            );
          })
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          component={modalContent}
        />
      </ResponsiveFlex>
      <Flex justifyContent={"center"} marginY={"1rem"} marginTop={"auto"}>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={index}
              onClick={() => handlePageChange(pageNumber)}
              style={{
                padding: "8px 12px",
                margin: "0 4px",
                border: "1px solid #9290C3",
                backgroundColor: pageNumber === currentPage ? "#535C91" : "none",
                color: pageNumber === currentPage ? "#FFF" : "#9290C3",
                borderRadius: "4px",
              }}
            >
              {pageNumber}
            </button>
          );
        })}
      </Flex>
    </Layout>
  )};

export default ListSongs;
