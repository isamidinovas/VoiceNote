import { motion } from "framer-motion";
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
export const Content = () => {
  const [isRecording, setIsRecording] = useState(false);
  return (
    <div className="flex flex-col items-center gap-12 ">
      <h1 className="text-2xl mt-7">Voice Note</h1>
      <div className="w-[100%] max-w-[800px] bg-slate-200 h-[300px] rounded-xl"></div>
      <motion.div
        className="p-6 bg-gray-800 rounded-full text-white cursor-pointer"
        // onMouseDown={startRecording} // Начало при нажатии
        // onMouseUp={stopRecording} // Остановка при отпускании
        // onTouchStart={startRecording} // Для мобильных устройств
        // onTouchEnd={stopRecording}
        animate={isRecording ? { opacity: [1, 0.5, 1] } : {}}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <FaMicrophone className="text-4xl" />
      </motion.div>
      {/* <FaMicrophone className="text-4xl cursor-pointer" /> */}
      <div className="w-[300px] flex justify-between items-center">
        <VscDebugStart className="text-5xl border-2 border-black rounded-full p-1" />
        <p>ЗАПИСЬ</p>
      </div>
    </div>
  );
};
export default Content;
