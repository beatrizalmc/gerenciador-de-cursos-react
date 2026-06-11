function CertificationCard({
    id, title, type, platform, status, hours, year, curriculum, extracurricular, description, category, date, deleteCertification, handleEdit 
}) {

    const statusColors = {
        "Concluído": "bg-green-100 text-green-700",
        "Em andamento": "bg-yellow-100 text-yellow-700",
        "Planejado": "bg-blue-100 text-blue-700",
    };

    const typeColors = {
        Curso: "bg-blue-100 text-blue-700",
        Bootcamp: "bg-orange-100 text-orange-700",
        Evento: "bg-green-100 text-green-700",
        Outros: "bg-gray-100 text-gray-700",
        Hackathon: "bg-red-100 text-red-700",
        SimpCong: "bg-purple-100 text-purple-700",
    };

    return (
        <section className="container mx-auto px-4 pt-8 pb-6">
            <div className="flex flex-row justify-between items-start">
                <div className="flex flex-row gap-3 pb-2">
                    <span className={`border border-gray-400 rounded-lg px-2 text-xs sm:text-sm ${typeColors[type] || 'bg-gray-300'}`}>
                        {type}
                    </span>
                    <span className={`border border-white rounded-lg px-2 text-xs sm:text-sm ${statusColors[status] || 'bg-gray-300'}`}>
                        {status}
                    </span>
                </div>
                <div className="flex flex-row gap-2">
                    <button
                        onClick={() => deleteCertification(id)}
                        className="cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-trash2 lucide-trash-2 h-3.5 w-3.5 mr-2" aria-hidden="true" x-file-name="CertificateCard" x-line-number="65" x-column="14" x-component="Trash2" x-id="CertificateCard_65_14" x-dynamic="false"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                    </button>
                    <button
                        onClick={() => handleEdit({ id, title, type, platform, status, duration: hours, year, curriculum, extracurricular, description, category, date })}                        
                        className="cursor-pointer"
                    
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-pencil h-3.5 w-3.5 mr-2" aria-hidden="true" x-file-name="CertificateCard" x-line-number="57" x-column="14" x-component="Pencil" x-id="CertificateCard_57_14" x-dynamic="false"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                    </button>
                </div>
            </div>
            <div>
                <h3 className="text-md sm:text-lg font-semibold">{title}</h3>
                <p className="text-gray-500 text-sm sm:text-md">{platform}</p>
            </div>
            <div>
                <p className="text-gray-500 pt-6 pb-2 text-sm sm:text-md">{description}</p>
            </div>
            <div className="flex flex-row gap-4 border-b border-gray-300 pb-2">
                <p className="text-gray-500 text-xs sm:text-sm">{year}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{hours}h</p>
            </div>
            <div className="pt-2">
                <p className="text-gray-800 text-xs sm:text-sm">{curriculum ? "Adicionado ao currículo" : "NÃO adicionado ao currículo"}</p>
                <p className="text-gray-800 text-xs sm:text-sm">{extracurricular ? "Registrado como atividade extracurricular" : "NÃO registrado na faculdade"}</p>
            </div>
        </section>
    );
}

export default CertificationCard;