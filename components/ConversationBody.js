import Message from "./Message";

const ConversationBody = () => {
    return (
        <div className="w-full  bg-gray-300 space-y-1 overflow-y-scroll max-h-[calc(100%-128px)] py-4">
            {/* message */}
            <Message me={false} />
            <Message me={true} />
            <Message me={false} />
            <Message me={true} />
            <Message me={false} />
            <Message me={false} />
            <Message me={true} />
            <Message me={false} />
            <Message me={true} />
            <Message me={false} />

        </div>
    );
}

export default ConversationBody;