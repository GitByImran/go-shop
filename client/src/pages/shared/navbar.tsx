import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Tally1 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  return (
    <div className="sticky top-0 py-2 shadow bg-white">
      <div className="mx-10 flex justify-between items-center gap-5">
        {/* logo */}
        <div className="flex items-center gap-2 text-3xl uppercase font-extrabold ">
          <h2 className="text-gray-700">BUY</h2>
          <p className="border rounded-medium px-2">
            <span className="text-emerald-500">X</span>
            <span className="text-purple-600">Y</span>
            <span className="text-orange-600">Z</span>
          </p>
        </div>
        {/*  */}
        <div>
          <Select>
            <SelectTrigger className="w-[180px] border-none rounded-medium text-md">
              <SelectValue placeholder="Explore categories" className="" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center border gap-0 rounded-medium">
          <Search size={20} className="mx-2" />
          <Input
            type="text"
            placeholder="Search your product"
            className="border-none outline-none py-5 text-md"
          />
        </div>
        <div></div>
        {/*  */}
      </div>
    </div>
  );
};

export default Navbar;
