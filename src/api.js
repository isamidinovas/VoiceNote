import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/audio-text/";

/**
 * Функция для загрузки аудиофайла на сервер.
 * @param {File} file - Аудиофайл для загрузки
 * @param {string} text - Текст, связанный с аудиофайлом
 * @returns {Promise} - Результат запроса
 */
export const uploadAudio = async (file, text) => {
  try {
    const formData = new FormData();
    formData.append("audio_file", file);
    formData.append("text_content", text);

    const response = await axios.post(API_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("Файл загружен:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка загрузки:", error);
    throw error;
  }
};

/**
 * Функция для получения списка загруженных аудиофайлов.
 * @returns {Promise} - Список файлов из API
 */
export const fetchAudioList = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Ошибка получения данных:", error);
    throw error;
  }
};
