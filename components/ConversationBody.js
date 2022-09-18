import Message from "./Message";

const ConversationBody = () => {
    return (
        <div className="w-full h-full bg-gray-300 space-y-1">
            {/* message */}
            <Message me={false} />
            <Message me={true} />
            <Message me={false} />
            <Message me={true} />
            <Message me={false} />

        </div>
    );
}

export default ConversationBody;