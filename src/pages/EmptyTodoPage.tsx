const EmptyTodoPage = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-2 py-10">
      <div className="bg-red-200 w-30 h-30 flex justify-center  items-center rounded-full text-5xl">
        <p>🌱</p>
      </div>

      <h2 className="text-2xl text-gray-600">Your canvas is ready!</h2>
      <p className="text-lg text-center text-gray-500">
        Add your first gentle goal above and watch your progress bloom 🌸
      </p>
    </section>
  );
};
export default EmptyTodoPage;
