import { RiWhatsappLine } from "react-icons/ri";

const Loading = () => {
    return (
        <div className="min-h-screen w-full bg-[#EBEBEB] flex justify-center items-center">
            <div className="flex flex-col space-y-6 justify-center items-center">
                {/* whatsapp logo */}
                <RiWhatsappLine className="text-9xl text-gray-300" />
                {/* loading line */}
                <div className="w-96 h-1 bg-gray-500">
                    <div className="w-16 h-1 bg-green-500" />

                </div>
                {/* app name */}
                <h3 className="text-lg ">
                    WhatsApp
                </h3>
            </div>
        </div>
    );
}

export default Loading;