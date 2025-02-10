import { motion } from "framer-motion";
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { VscDebugPause } from "react-icons/vsc";
export const Content = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isDebugging, setIsDebugging] = useState(false);
  const toggleIcon = () => {
    setIsDebugging(!isDebugging); // Переключает состояние
  };
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12 mt-4 ml-5 mr-5 mb-10 ">
      <h1 className="text-2xl mt-7 font-bold">Voice Note</h1>
      <div className="w-[100%] max-w-[800px]  bg-gray-900 min-h-[200px] rounded-xl p-5 text-left text-white">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
      </div>

      <motion.div
        whileTap={{
          scale: 1.4, // Увеличение при нажатии
          opacity: 0.5, // Прозрачность при нажатии
        }}
        transition={{ duration: 0.3 }} // Плавный переход
        className="p-2 cursor-pointer"
      >
        <FaMicrophone size={48} className="text-gray-900" />
      </motion.div>
      <div className="w-[300px] flex justify-between items-center">
        <div
          className="text-5xl border-2 border-gray-900 rounded-full p-1
          cursor-pointer"
          onClick={toggleIcon}
        >
          {isDebugging ? (
            <VscDebugPause className="text-gray-900" />
          ) : (
            <VscDebugStart className="text-gray-900" />
          )}{" "}
        </div>

        {/* Меняем иконку */}
        <p>ЗАПИСЬ</p>
      </div>
    </div>
  );
};
export default Content;
