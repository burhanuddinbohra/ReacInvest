import headerImg from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={headerImg} alt="logo-image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
