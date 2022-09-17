import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";

const PersonInbox = () => {
    const src = "https://placeimg.com/192/192/people"

    return (
        <div className="flex px-4 space-x-4 items-center ">
            {/* contact avatar... */}
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
            {/* contact info.. */}
            <div className="flex justify-between border-t-2 flex-1 py-2">
                {/* name & sms */}
                <div>
                    <h3 className="font-medium text-[16px]">Abdur Rahim</h3>
                    {/* last sms */}
                    <div className="flex items-center space-x-1">
                        <BsCheck2 />
                        <p>how are you?</p>
                    </div>
                </div>
                {/* sent time */}
                <span>12.11 pm</span>
            </div>
        </div>
    );
}

export default PersonInbox;