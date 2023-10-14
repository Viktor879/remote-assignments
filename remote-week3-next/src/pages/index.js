import Post from '../components/Post';

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Interactive Post</h1>
      <Post />
    </div>
  );
}
