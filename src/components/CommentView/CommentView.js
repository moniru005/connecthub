import Image from 'next/image';
import React from 'react';

const CommentView = ({commentData}) => {
  // console.log(commentData);
  const {comment} = commentData;

  return (
    <div>
      {comment?.length !== 0
        ? comment.map((singleComment, inx) => {
          console.log(singleComment)
            return (
              <div key={inx} className='border rounded-md p-3 ml-3 my-3'>
                <div className='flex gap-3 items-center'>
                  <Image
                    className='object-cover w-8 h-8 rounded-full'
                    alt='Comment auth'
                    src={'https://avatars.githubusercontent.com/u/22263436?v=4'}
                    height={50}
                    width={50}></Image>

                  <h3 className='font-bold'>User name</h3>
                </div>

                <p className='text-gray-600 mt-2'>this is sample commnent</p>
              </div>
            );
          })
        : 'No comment Available'}
    </div>
  );
};

export default CommentView;
