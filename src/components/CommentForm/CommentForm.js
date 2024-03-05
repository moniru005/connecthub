'use client';
import React from 'react';
import useUser from '../Hooks/useUser';
import toast, { Toaster } from 'react-hot-toast';

function CommentForm({commentData}) {
  const {user} = useUser();

  const {_id} = commentData;

  // console.log(commentData);

  const handleComment = async e => {
    e.preventDefault();
    const commentDesc = e.target.commentDesc.value;
    const commentAuthName = user?.displayName;
    const commentAuthPhoto = user?.photoURL;

    console.log('hurreer',commentDesc, commentAuthName, commentAuthPhoto);

    try {
      const response = await fetch('-https://connecthub-1.netlify.app/api/posts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId: _id,
          comment: commentDesc,
          author: commentAuthName,
          authorImage:commentAuthPhoto
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // console.log('Comment updated successfully:', result);
        toast.success("comment added successfully")
      } else {
        console.error('Failed to update comment:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex justify-center  mb-4 max-w-lg'>
      <form
        onSubmit={handleComment}
        className='w-full max-w-xl bg-white rounded-lg px-4 pt-2'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-full px-3 mb-2 mt-2'>
            <textarea
              name='commentDesc'
              className='bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
              placeholder='Type Your Comment'
              required
            />
          </div>
          <div className='w-full md:w-full flex  items-end  px-3'>
            <div className='-mr-1 text-right'>
              <input
                type='submit'
                className='bg-indigo-500 text-white  font-medium py-1 px-4   rounded-lg tracking-wide mr-1'
                value='Post Comment'
              />
            </div>
          </div>
        </div>
      </form>
      <Toaster/>
    </div>
  );
}

export default CommentForm;
