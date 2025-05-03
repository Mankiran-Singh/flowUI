import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const artists = [
  {
    name: "Thomas Edward",
    username: "@thomas_edward",
    image: "public/assets/pexels-ekaterina-12203460.png",
    profilePic: "public/assets/pexels-ali-pazani-2613260.png",
  },
  {
    name: "Chris Doe",
    username: "@chris_doe",
    image: "public/assets/pexels-genaro-servín-763210.png",
    profilePic: "public/assets/pexels-tobias-bjørkli-2236382.png",
  },
  {
    name: "Emilie Jones",
    username: "@emilie_jones",
    image: "public/assets/pexels-pixabay-164455.png",
    profilePic: "public/assets/pexels-fiona-art-5022849.png",
  },
  {
    name: "Jessica Williams",
    username: "@jessica_williams",
    image: "public/assets/pexels-steve-johnson-1269968.png",
    profilePic: "public/assets/pexels-ekaterina-12203460.png",
  },
];

  
  const ArtistSidebar = () => {
    return (
       <div className="w-72 bg-gray-100 p-4 rounded-lg">
      {/* Become a Seller Button */}
      <Button className="bg-[#83A598] text-white px-6 py-3 text-lg font-semibold w-full h-14 rounded-md hover:bg-[#729080]">
        Become a Seller
      </Button>

      {/* Artists Header */}
      <h2 className="text-lg font-bold mt-5 mb-3">
        Artists <span className="text-gray-400 font-medium">Photographers</span>
      </h2>

      {/* Artists List */}
      <div className="space-y-4">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden w-full"
          >
            {/* Artist Image */}
            <img
              className="w-full h-20 object-cover rounded-lg"
              src={artist.image}
              alt={artist.name}
            />

            {/* Profile Picture + Name Overlay */}
            <div className="absolute bottom-2 left-2 flex items-center space-x-2 bg-black/50 p-1 rounded-lg">
              <Avatar className="w-8 h-8">
                <img
                  className="rounded-full"
                  src={artist.profilePic}
                  alt={artist.name}
                />
              </Avatar>
              <div>
                <h4 className="text-white text-sm font-semibold">
                  {artist.name}
                </h4>
                <p className="text-gray-300 text-xs">{artist.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  };
  
  export default ArtistSidebar;
  