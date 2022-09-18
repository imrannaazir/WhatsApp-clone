import { signOut } from "firebase/auth";
import Image from "next/image";
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { TbCircleDashed } from 'react-icons/tb';
import { auth } from "../firebase.init";
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
                    {/* <BsThreeDots className="text-xl dropdown dropdown-end" /> */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="cursor-pointer">

                            <BsThreeDots className="text-xl" />

                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button onClick={() => signOut(auth)}>Logout</button></li>
                        </ul>
                    </div>
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