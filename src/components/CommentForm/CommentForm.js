import React from 'react';

function CommentForm() {
  return (
    <div className="flex justify-center shadow-lg mb-4 max-w-lg">
      <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required />
          </div>
          <div className="w-full md:w-full flex items-start  px-3">
            <div className="-mr-1">
              <input type='submit' className="bg-indigo-500 text-white  font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1" value='Post Comment' />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
