import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const PostCard = () => {
  return (
    <Card className="p-4">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" />
          <AvatarFallback>LL</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">Lara Leones</h3>
          <p className="text-sm text-gray-500">@thewallart</p>
        </div>
      </div>
      <p className="text-sm mt-2">
        It is a long established fact that a reader will be distracted by the readable content...
        <span className="text-red-500 cursor-pointer"> Read More</span>
      </p>
      <CardContent className="mt-2">
        <img className="rounded-lg" src="\assets\pexels-humphrey-muleba-2045248.png" alt="post" />
      </CardContent>
      <div className="flex justify-between mt-3 text-gray-600">
        <div className="flex items-center space-x-2">
          <Heart size={16} /> <span>9.8k</span>
        </div>
        <div className="flex items-center space-x-2">
          <MessageCircle size={16} /> <span>8.6k</span>
        </div>
        <div className="flex items-center space-x-2">
            <Share2 size={16} /> <span>7.2k</span>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
