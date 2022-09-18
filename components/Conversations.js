import ConversationBody from "./ConversationBody";
import ConversationHeader from "./ConversationHeader";

const Conversations = () => {
    return (
        <div className=" flex-1">
            <ConversationHeader />
            <ConversationBody />
        </div>
    );
}

export default Conversations;