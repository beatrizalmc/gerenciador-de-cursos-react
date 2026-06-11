const DashboardStats = ({ certifications }) => {
    const total = certifications.length;

    const completed = certifications.filter(
        certification => certification.status === "Concluído"
    ).length;

    const inProgress = certifications.filter(
        certification => certification.status === "Em andamento"
    ).length;

    const planned = certifications.filter(
        certification => certification.status === "Planejado"
    ).length;

    const totalHours = certifications.reduce(
        (total, certification) => total + certification.hours,
    0
);

  return (
    <section className="container mx-auto px-4 lg:pt-8 lg:pb-6 pt-0 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="flex flex-col gap-6 border border-gray-300 rounded-lg py-4 px-4">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="font-semibold text-sm sm:text-base">Total</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-book-open h-4 w-4 text-blue-500" data-fg-cz0p6="1.30:1.1674:/src/app/components/StatsCards.tsx:50:15:1424:44:e:Icon" data-fgid-cz0p6=":r1u:"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>               
                </div>
                <p className="text-xl sm:text-3xl font-bold">{total}</p>
            </div> 
            <div className="flex flex-col gap-6 border border-gray-300 rounded-lg py-4 px-4">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="font-semibold text-sm sm:text-base">Concluídos</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-circle-check h-4 w-4 text-green-500" data-fg-cz0p6="1.30:1.1674:/src/app/components/StatsCards.tsx:50:15:1424:44:e:Icon" data-fgid-cz0p6=":r28:"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>               
                </div>
                <p className="text-xl sm:text-3xl font-bold">{completed}</p>
            </div>
            <div className="flex flex-col gap-6 border border-gray-300 rounded-lg py-4 px-4">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="font-semibold text-sm sm:text-base">Em Andamento</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-clock h-4 w-4 text-orange-500" data-fg-cz0p6="1.30:1.1674:/src/app/components/StatsCards.tsx:50:15:1424:44:e:Icon" data-fgid-cz0p6=":r2i:"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>                
                </div>
                <p className="text-xl sm:text-3xl font-bold">{inProgress}</p>
            </div>
            <div className="flex flex-col gap-6 border border-gray-300 rounded-lg py-4 px-4">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="font-semibold text-sm sm:text-base">Planejados</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-calendar h-4 w-4 text-purple-500" data-fg-cz0p6="1.30:1.1674:/src/app/components/StatsCards.tsx:50:15:1424:44:e:Icon" data-fgid-cz0p6=":r2s:"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>                
                </div>
                <p className="text-xl sm:text-3xl font-bold">{planned}</p>
            </div>
            <div className="flex flex-col gap-6 border border-gray-300 rounded-lg py-4 px-4">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="font-semibold text-sm sm:text-base">Horas acumuladas</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M360-816v-72h240v72H360Zm84 432h72v-240h-72v240Zm-94.92 261.49q-60.92-26.5-106.49-72.08-45.58-45.57-72.08-106.49Q144-362 144-432q0-70 26.51-130.92 26.5-60.92 72.08-106.49 45.57-45.58 106.49-72.08Q410-768 479.56-768q58.28 0 111.86 19.5T691-694l52-51 50 50-51 52q35 45 54.5 98.81T816-431.86q0 69.86-26.51 130.78-26.5 60.92-72.08 106.49-45.57 45.58-106.49 72.08Q550-96 480-96q-70 0-130.92-26.51ZM667-245q77-77 77-187t-77-187q-77-77-187-77t-187 77q-77 77-77 187t77 187q77 77 187 77t187-77ZM480-432Z"/></svg>
                </div>
                <p className="text-xl sm:text-3xl font-bold">{totalHours}</p>
            </div>
        </div>
    </section>
  );
};

export default DashboardStats;