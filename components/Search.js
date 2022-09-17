import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return (
        <div className="px-2 py-1">
            <div className="flex items-center bg-[#EBEBEB] rounded-xl">
                {/* search icon */}
                <AiOutlineSearch className="text-lg bg-[#EBEBEB] ml-2 " />
                {/* search icon */}
                <input className="flex-1 bg-[#EBEBEB] outline-none px-4 py-2 font-light rounded-r-xl" type="search" name="" id="" placeholder="Search or start new chat" />
            </div>
        </div>
    );
}

export default Search;