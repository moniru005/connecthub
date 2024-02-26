import Modal from 'react-modal';
import React from 'react';
import CommentForm from '@/components/CommentForm/CommentForm';

const CommentModal = ({isOpen, onRequestClose, afterOpenModal, children}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      //     onAfterOpen={afterOpenModal}
      //     onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'>
      <h2>Hello</h2>
      {/* <button onClick={closeModal}>close</button> */}
      <div>I am a modal</div>
      <form>
        {/* <input /> */}
        {/* <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button> */}

        <CommentForm></CommentForm>
      </form>
    </Modal>
  );
};

export default CommentModal;
