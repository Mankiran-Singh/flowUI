import Sidebar from "./custom-components/Sidebar";
import TopNavbar from "./custom-components/TopNavbar";
import PostCard from "./custom-components/PostCard";
import ArtistSidebar from "./custom-components/ArtistSidebar";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <TopNavbar />
        <div className="p-6 space-y-6">
          <PostCard />
        </div>
      </div>
      <ArtistSidebar />
    </div>
  );
};

export default App;
