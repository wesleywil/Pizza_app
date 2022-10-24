type ButtonProps = {
  filterBy: string;
};

const ButtonFilter = ({ filterBy }: ButtonProps) => {
  return (
    <button className="bg-[#ef90a9] hover:bg-[#cb0033] text-[#f1f2f2] font-bold px-2 rounded transition duration-700 ease-in-out">
      {filterBy}
    </button>
  );
};

export default ButtonFilter;
