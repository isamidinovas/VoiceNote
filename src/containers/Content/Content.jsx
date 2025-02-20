import AudioRecorder from "../../components/AudioRecorder";
export const Content = () => {
  // const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12 mt-4 ml-5 mr-5 mb-10 ">
      <h1 className="text-3xl mt-7 font-bold">Voice Note</h1>
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
      <AudioRecorder />
    </div>
  );
};
export default Content;
