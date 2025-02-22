import PostCard from './PostCard';

const Feed = ({ isDarkMode }) => {
  const posts = [
    {
      id: 1,
      user: "John Doe",
      content: "This is my first post!",
      time: "2 minutes ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      content: "Having a great day!",
      time: "5 minutes ago",
    },
    // Add more posts here
  ];

  return (
    <div className="flex-1 p-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
