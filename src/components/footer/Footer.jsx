import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="text-white text-center text-base bg-black py-1.5  mt-8">
        <small>&copy;SpaceX Data {year}</small>
      </div>
    </footer>
  );
}

export default Footer;
