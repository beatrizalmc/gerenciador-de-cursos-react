import CertificationCard from "./CertificationCard";

const CertificationsList = ({ certifications, searchTerm, setSearchTerm, statusFilter, setStatusFilter, selectedCategory, deleteCertification, handleEdit }) => {
    const filteredCertifications = certifications.filter(
        (certification) => {
            const matchesSearch =
                certification.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            const matchesStatus =
                statusFilter === "Todos" ||
                certification.status === statusFilter;

            const matchesCategory =
                selectedCategory === "Todos" ||
                certification.category === selectedCategory;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesCategory
            );
        }
    );

    const statusOptions = [
        "Todos",
        "Concluído",
        "Em andamento",
        "Planejado",
    ];

  return (
    <section className="container mx-auto px-4 pt-8 pb-6">
        <div>
            <div className="flex flex-col gap-2 mb-2 lg:flex-row lg:justify-between lg:pb-2">
                <h2 className="text-md sm:text-xl font-bold">Todas as Categorias</h2>
                <div className="flex flex-row gap-3 items-center rounded-md bg-gray-200 px-3 py-1 h-8 sm:h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-search h-4 w-4 text-muted-foreground" data-fg-38d18="1.33:1.5632:/src/app/pages/Dashboard.tsx:76:15:2834:93:e:Search::::::B9rK" data-fgid-38d18=":r3h:"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                    <input 
                        type="text" 
                        placeholder="Buscar..." 
                        className="px-2 py-1 border border-gray-200 rounded-md focus:outline-none text-xs sm:text-base" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <nav className="flex flex-row flex-wrap gap-2 sm:gap-4 items-center justify-center sm:justify-start pb-2 lg:pt-0 pt-2 text-xs sm:text-sm">
                {statusOptions.map((status) => (
                    <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`rounded-md px-3 py-0.5 cursor-pointer ${
                            statusFilter === status
                            ? "bg-primary text-white"
                            : "bg-gray-200"
                        }`}
                        >
                        {status}
                    </button>
                ))}
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCertifications.map((certification) => (
                    <CertificationCard
                        key={certification.id}
                        {...certification}
                        title={certification.title}
                        type={certification.type}
                        platform={certification.platform}
                        status={certification.status}
                        hours={certification.hours}
                        year={certification.year}
                        curriculum={certification.curriculum}
                        extracurricular={certification.extracurricular}
                        description={certification.description}
                        deleteCertification={deleteCertification}
                        handleEdit={handleEdit}
                    />
                ))}
            </div>
        </div>
    </section>
  );
};

export default CertificationsList;