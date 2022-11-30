import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="w-full p-4 md:text-white flex md:justify-between md:p-4 items-center -mb-20">
      <div className="md:pl-10 ">
        <img
          className="h-3/5 w-3/5 m-auto  md:m-0 lg:h-1/4 lg:w-1/4 md:h-1/2 md:w-1/2 "
          src={Logo}
          alt="Site Logo"
        />
      </div>

      <nav className="hidden md:block">
        <ul className="uppercase md:text-xl lg:text-sm cursor-pointer md:pr-10">
          <li>
            <a
              href="#capsules"
              className="group text-white transition duration-300"
            >
              Capsules
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
