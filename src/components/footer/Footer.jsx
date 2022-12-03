function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <div className="text-white text-center text-base bg-black py-1.5  mt-8">
        <small>&copy;SpaceX Data {year}</small>
      </div>
    </footer>
  );
}

export default Footer;
