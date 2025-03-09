import Filmflex from "../../assets/Filmflex.png";

const Header = () => {
  return (
    <div className="absolute px-5 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44 h-24" src={Filmflex} alt="Backdrop" />
    </div>
  );
};

export default Header;
