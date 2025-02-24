import axios from "axios";
import AudioRecorder from "../../components/AudioRecorder";
import { useEffect, useState } from "react";
export const Content = () => {
  const [text, setText] = useState("");
  // Функция загрузки случайного текста с API
  const fetchRandomText = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/random-text/"
      );
      setText(response.data.text);
    } catch (error) {
      console.error("Ошибка загрузки текста:", error);
      setText("Ошибка загрузки текста.");
    }
  };
  // Загружаем текст при загрузке страницы
  useEffect(() => {
    fetchRandomText();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12 mt-4 ml-5 mr-5 mb-10 ">
      <h1 className="text-3xl mt-7 font-bold">Voice Note</h1>
      <div className="w-[100%] max-w-[800px]  bg-gray-900 min-h-[200px] rounded-xl p-5 text-left text-white">
        {text}
      </div>
      <AudioRecorder
        text={text}
        setText={setText}
        onAudioSaved={fetchRandomText}
      />
    </div>
  );
};
export default Content;
