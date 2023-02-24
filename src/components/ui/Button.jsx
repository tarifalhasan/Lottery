const PrimaryBtn = ({ name, bg, onClick, color }) => (
  <button
    onClick={onClick}
    className={`${bg} outline-none  border-none rounded-[100px] px-5 py-2  ${color} font-normal`}
  >
    {name}
  </button>
);
export default PrimaryBtn;
