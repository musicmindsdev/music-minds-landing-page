
import { BiSolidMessageRounded } from "react-icons/bi";

export default function SupportWidget() {
    return (
      <a
        href="https://tawk.to/chat/YOUR_WIDGET_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#5243FE] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all z-50"
      >
     <BiSolidMessageRounded className="w-5 h-5"/>
      </a>
    );
  }