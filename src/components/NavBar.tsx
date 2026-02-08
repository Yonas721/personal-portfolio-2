import Irgib from "../assets/irgib.png";

const NavBar = () => {
  return (
    <nav className="flex justify-around py-3  my-4 mx-2">
      <a href="#home">
        {" "}
        <h1 className="w-12  px-2 py-1">
          <img src={Irgib} alt="yonas's logo" />
        </h1>
      </a>
      <ul className="flex gap-4 px-2 text-sm  items-center">
        <li>
          <a href="#home"> Home</a>
        </li>
        <li>
          <a href="#about"> About</a>
        </li>
        <li>
          <a href="#skills"> Skills</a>
        </li>
        <li>
          <a href="#services"> Services</a>
        </li>
        <li>
          <a href="#projects"> Portfolio</a>
        </li>
        <li>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
