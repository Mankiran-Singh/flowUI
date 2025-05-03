import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm">
      <Input placeholder="Search here..." className="w-1/2" />
      <Button variant="outline" className="flex items-center">
        <SlidersHorizontal size={16} className="mr-2" /> Filters
      </Button>
      {/* <Button className="bg-green-500 text-white">Become a Seller</Button> */}
    </div>
  );
};

export default TopNavbar;
