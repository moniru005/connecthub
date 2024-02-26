import CommentForm from '@/components/CommentForm/CommentForm';
import CommentView from '@/components/CommentView/CommentView';

const CommentModal = ({isOpen, commentData}) => {
  return (
    <dialog id='my_modal_2' className='modal'>
      <div className='modal-box'>
        <CommentForm commentData={commentData}></CommentForm>
        <CommentView commentData={commentData}></CommentView>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}

          <button className='btn  bg-red-400 text-white'>Close</button>
        </form>
      </div>
    </dialog>
  );
};

export default CommentModal;
