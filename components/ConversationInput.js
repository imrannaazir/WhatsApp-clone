import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

const ConversationInput = () => {
    return (
        <div className="h-16 bg-[#EBEBEB] flex items-center space-x-4 px-4 text-2xl">
            {/* emoji */}
            <BsEmojiSmile />
            {/* file */}
            <GrAttachment />
            {/* text input */}
            <input className="flex-1 py-2 px-4 text-base rounded-lg outline-none" type="text" name="" id="" placeholder="text a message" />
            {/* send button */}
            <FiSend className="rotate-45 " />
        </div>
    );
}

export default ConversationInput;