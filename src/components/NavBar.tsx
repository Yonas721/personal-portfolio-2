const NavBar = () => {
  return (
    <nav className="flex justify-around py-3  my-4 mx-2">
      <h1 className="center font-medium px-2 py-1">Yonas</h1>
      <ul className="flex gap-4 px-2 text-sm  items-center">
        <li><a href="#"> Home</a></li>
        <li><a href="#"> About</a></li>
        <li><a href="#"> Skills</a></li>
        <li><a href="#"> Services</a></li>
        <li><a href="#"> Portfolio</a></li>
        <li><a href="#"> Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
