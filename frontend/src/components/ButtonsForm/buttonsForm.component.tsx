type ButtonProps = {
  title: string;
};

export const ButtonLoginRegister = ({ title }: ButtonProps) => {
  return (
    <button className="bg-[#cb0033] hover:bg-[#f1f2f2] text-[#f1f2f2] hover:text-[#cb0033] px-2 pb-1 font-bold rounded-lg transition duration-700 ease-in-out">
      {title}
    </button>
  );
};

export const ButtonCancel = () => {
  return (
    <button className="bg-[#f1f2f2] hover:bg-[#cb0033] text-[#cb0033] hover:text-[#f1f2f2] px-2 pb-1 font-bold rounded-lg transition duration-700 ease-in-out">
      Cancel
    </button>
  );
};
