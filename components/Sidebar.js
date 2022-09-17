import Image from "next/image";
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { TbCircleDashed } from 'react-icons/tb';
import PersonInbox from "./PersonInbox";
import Search from "./Search";

const Sidebar = () => {
    const src = "https://placeimg.com/192/192/people"

    return (
        <aside className="min-h-screen min-w-[400px]">
            {/* header... */}
            <div className="h-16 bg-[#EBEBEB] flex justify-between  items-center px-4">
                {/* my avatar... */}
                <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                        <Image
                            loader={() => src}
                            src={src}
                            width={40}
                            height={40}
                            placeholder="blur"
                            blurDataURL={src}
                            alt="" />
                    </div>
                </div>
                {/* btn */}
                <div className="flex space-x-4">
                    {/* status btn .. */}
                    <TbCircleDashed className="text-xl" />
                    {/* add btn.. */}
                    <AiOutlinePlus className="text-xl" />
                    {/* setting btn.. */}
                    <BsThreeDots className="text-xl" />
                </div>
            </div>
            {/* search input here.. */}
            <Search />
            {/* inbox here.. */}
            <div className="overflow-auto">
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
                <PersonInbox />
            </div>
        </aside>
    );
}

export default Sidebar;