const NavBar = () => {
  return (
    <nav className="flex justify-around py-3  my-4 mx-2">
     <a href="#home"> <h1 className="center font-medium px-2 py-1">Yonas</h1>
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
