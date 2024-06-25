const BackAndNextBtns = () => {
    const formSteps = 2;
  return (
    <div className="w-full flex justify-around mb-8">
    <button
    //   onClick={(e) => handleFormStep(e, "back")}
      className={` ${
        formSteps === 1
          ? "disabled cursor-not-allowed bg-slate-700 hover:bg-slate-700  dark:bg-slate-700 dark:hover:bg-slate-700  "
          : "bg-blue-700 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800  focus:ring-blue-300"
      }text-white mx-5    focus:outline-none font-medium rounded-lg text-3xl w-full sm:w-auto px-5 py-2.5 text-center `}
    >
      back
    </button>
    <button
    //   onClick={(e) => handleFormStep(e, "next")}
      className={` ${
        formSteps > 3
          ? "disabled cursor-not-allowed bg-slate-700 hover:bg-slate-700  dark:bg-slate-700 dark:hover:bg-slate-700  "
          : "bg-blue-700 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800  focus:ring-blue-300"
      }text-white mx-5    focus:outline-none font-medium rounded-lg text-3xl w-full sm:w-auto px-5 py-2.5 text-center `}
    >
      next
    </button>
  </div>
  )
}
export default BackAndNextBtns