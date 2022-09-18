const Message = ({ me }) => {

    return (
        <div className={`flex ${me && 'justify-end'}`}>
            <div className={`max-w-xs ${me ? 'bg-[#DCF8C6]' : 'bg-white'} mx-2 p-2 rounded-lg `}>
                <p className="flex items-end">Lorem ipsum dolor sit amet consectetur <span className="text-xs">09.54am</span></p>
            </div>
        </div>
    );
}

export default Message;