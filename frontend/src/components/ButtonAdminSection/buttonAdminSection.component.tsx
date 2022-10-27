type ButtonProps = {
  sectionName: string;
};

const ButtonAdminSection = ({ sectionName }: ButtonProps) => {
  return (
    <button className="bg-[#ef90a9] hover:bg-[#cb0033] text-[#f1f2f2] font-bold px-2 rounded transition duration-700 ease-in-out">
      {sectionName}
    </button>
  );
};

export default ButtonAdminSection;
