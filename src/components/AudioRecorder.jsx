import { motion } from "framer-motion";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaMicrophone } from "react-icons/fa";

export const AudioRecorder = () => {
  const [audioUrl, setAudioUrl] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      // Очищаем предыдущие записи
      audioChunksRef.current = [];
      setAudioUrl(null);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        if (audioChunksRef.current.length > 0) {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/wav",
          });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl);
        }
      };

      mediaRecorder.start();
    } catch (error) {
      console.error("Ошибка при доступе к микрофону:", error);
      toast.error("Ошибка при доступе к микрофону");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };
  const confirmAudio = () => {
    setIsConfirmed(true);
    toast.success("Запись подтверждена!");
  };

  const deleteAudio = () => {
    setAudioUrl(null);
    setIsConfirmed(false);
    toast.error("Запись удалена!");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "18px",
            padding: "16px",
            height: "auto",
          },
        }}
      />
      <motion.div
        whileTap={{ scale: 1.2, opacity: 0.7 }}
        transition={{ duration: 0.2 }}
        className="p-2 cursor-pointer"
        title="Записать аудио"
      >
        <FaMicrophone
          size={48}
          className="text-gray-900"
          onMouseDown={startRecording} // Начинаем запись при нажатии
          onMouseUp={stopRecording} // Останавливаем запись при отпускании
          onTouchStart={startRecording} // Для мобильных устройств
          onTouchEnd={stopRecording} // Для мобильных устройств
        />
      </motion.div>
      {audioUrl && (
        <div className="flex flex-col items-center gap-2 mt-4">
          <audio controls src={audioUrl} title="Воспроизвести"></audio>
          {!isConfirmed && (
            <div className="flex gap-2 mt-2">
              <button
                onClick={confirmAudio}
                className="px-4 py-2 bg-green-500 text-white rounded-lg font-bold"
              >
                Подтвердить
              </button>
              <button
                onClick={deleteAudio}
                className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold"
              >
                Удалить
              </button>
            </div>
          )}
          {isConfirmed && (
            <>
              <button className="rounded-xl bg-gray-900 p-3 pl-12 pr-12 text-white sm:mt-24 mt-10 font-bold">
                Сохранить на базу
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
