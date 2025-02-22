const PostCard = ({ post }) => {
    return (
      <div className="bg-gray-700 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-semibold">{post.user}</div>
          <div className="text-sm text-gray-400">{post.time}</div>
        </div>
        <div>{post.content}</div>
        <div className="flex space-x-4 mt-4 text-gray-400">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </div>
    );
  };
  
  export default PostCard;
  