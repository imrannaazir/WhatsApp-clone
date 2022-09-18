import ConversationBody from "./ConversationBody";
import ConversationHeader from "./ConversationHeader";
import ConversationInput from "./ConversationInput";

const Conversations = () => {
    return (
        <div className=" flex-1 h-screen">
            <ConversationHeader />
            <ConversationBody />
            <ConversationInput />
        </div>
    );
}

export default Conversations;