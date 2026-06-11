import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="container mx-auto flex flex-col sm:flex-row items-center gap-3 py-3 px-4 border-b border-gray-200 text-center sm:text-left">
        <div>
          <img src={logo} alt="Logo" className="w-14" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm sm:text-lg font-semibold text-gray-900">Certifika - Meu Aprendizado</span>
          <span className="text-xs sm:text-md text-gray-400">Gerenciador de Certificados</span>
        </div>
        <hr />
    </header>
  );
};

export default Header;