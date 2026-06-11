const FiltersArea = ({ openModal, selectedCategory, setSelectedCategory }) => {
  return (
    <section className="container mx-auto px-4 pt-6 sm:pt-16 sm:pb-8 border-b border-gray-200">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:justify-between lg:items-center">
        <div>
            <h1 className="font-bold text-xl sm:text-4xl">Meus Certificados</h1>
            <p className="text-gray-500 text-sm sm:text-base">
                Gerencie todos os cursos, eventos e certificações que você 
                participou em um só lugar - e mantenha tudo organizado.
            </p>
        </div>
        <button onClick={openModal} className="flex items-center whitespace-nowrap text-xs sm:text-sm font-medium h-9 px-4 py-2 rounded-xl bg-primary text-white shadow-sm gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-4 w-4" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            Adicionar Certificado
        </button>
      </div>
      <nav className="flex flex-row flex-wrap gap-3 py-6 text-xs sm:text-sm">
        <button
            onClick={() => setSelectedCategory("Todos")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer ${
                selectedCategory === "Todos"
                ? "bg-primary text-white"
                : "bg-secondary"
            }`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid h-4 w-4" data-fg-jy42="1.27:1.1492:/src/app/components/CategoryNav.tsx:21:9:694:40:e:Icons.LayoutGrid" data-fgid-jy42=":r14:"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
            Todos
        </button>
        <button
            onClick={() => setSelectedCategory("Front-end")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer ${
                selectedCategory === "Front-end"
                ? "bg-primary text-white"
                : "bg-secondary"
            }`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code h-4 w-4" data-fg-jy47="1.27:1.1492:/src/app/components/CategoryNav.tsx:37:31:1368:37:e:IconComponent" data-fgid-jy47=":r16:"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            Front-end
        </button>
        <button
            onClick={() => setSelectedCategory("Back-end")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer ${
                selectedCategory === "Back-end"
                ? "bg-primary text-white"
                : "bg-secondary"
            }`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server h-4 w-4" data-fg-jy47="1.27:1.1492:/src/app/components/CategoryNav.tsx:37:31:1368:37:e:IconComponent" data-fgid-jy47=":r18:"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
            Back-end
        </button>
        <button
            onClick={() => setSelectedCategory("Inteligência Artificial")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer ${
                selectedCategory === "Inteligência Artificial"
                ? "bg-primary text-white"
                : "bg-secondary"
            }`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain h-4 w-4" data-fg-jy47="1.27:1.1492:/src/app/components/CategoryNav.tsx:37:31:1368:37:e:IconComponent" data-fgid-jy47=":r1a:"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
            Inteligência Artificial
        </button>
        <button
            onClick={() => setSelectedCategory("Dados")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer ${
                selectedCategory === "Dados"
                ? "bg-primary text-white"
                : "bg-secondary"
            }`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database h-4 w-4" data-fg-jy47="1.27:1.1492:/src/app/components/CategoryNav.tsx:37:31:1368:37:e:IconComponent" data-fgid-jy47=":r1c:"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
            Dados
        </button>
        <button
            onClick={() => setSelectedCategory("Mobile")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer ${
                selectedCategory === "Mobile"
                ? "bg-primary text-white"
                : "bg-secondary"
            }`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone h-4 w-4" data-fg-jy47="1.27:1.1492:/src/app/components/CategoryNav.tsx:37:31:1368:37:e:IconComponent" data-fgid-jy47=":r1e:"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
            Mobile
        </button>
        <button
            onClick={() => setSelectedCategory("Cyber")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer ${
                selectedCategory === "Cyber"
                ? "bg-primary text-white"
                : "bg-secondary"
            }`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings h-4 w-4" data-fg-jy47="1.27:1.1492:/src/app/components/CategoryNav.tsx:37:31:1368:37:e:IconComponent" data-fgid-jy47=":r1g:"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Cybersecurity
        </button>
        <button
            onClick={() => setSelectedCategory("Design")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer ${
                selectedCategory === "Design"
                ? "bg-primary text-white"
                : "bg-secondary"
            }`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette h-4 w-4" data-fg-jy47="1.27:1.1492:/src/app/components/CategoryNav.tsx:37:31:1368:37:e:IconComponent" data-fgid-jy47=":r1i:"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
            Design
        </button>
        <button
            onClick={() => setSelectedCategory("Outros")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap cursor-pointer ${
                selectedCategory === "Outros"
                ? "bg-primary text-white"
                : "bg-secondary"
            }`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-4 w-4" data-fg-jy47="1.27:1.1492:/src/app/components/CategoryNav.tsx:37:31:1368:37:e:IconComponent" data-fgid-jy47=":r1k:"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            Outros
        </button>
      </nav>
    </section>
  );
};

export default FiltersArea;