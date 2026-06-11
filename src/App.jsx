import { useState, useEffect } from "react";

import Header from "/src/components/Header.jsx";
import FiltersArea from "/src/components/FiltersArea.jsx";
import DashboardStats from "/src/components/DashboardStats.jsx";
import CertificationsList from "/src/components/CertificationsList.jsx";
import AddCertificationModal from "/src/components/AddCertificationModal.jsx";
import Footer from "/src/components/Footer.jsx";

function App() {
  const [certifications, setCertifications] = useState(() => {
    const saved = localStorage.getItem("certifications");

    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCertification = (newCertification) => {
    setCertifications([
      ...certifications,
      newCertification,
    ]);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("Todos");

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    localStorage.setItem(
      "certifications",
      JSON.stringify(certifications)
    );
  }, [certifications]);

  const deleteCertification = (id) => {
    setCertifications(
      certifications.filter(
        certification => certification.id !== id
      )
    );
  };

  const updateCertification = (updatedCertification) => {
    setCertifications(
      certifications.map((certification) =>
        certification.id === updatedCertification.id
          ? updatedCertification
          : certification
      )
    );
  };

  const handleEdit = (certification) => {
    setEditingCertification(certification);
    setIsModalOpen(true);
  };

  const [editingCertification, setEditingCertification] = useState(null);

  return (
    <>
      <Header />
      <FiltersArea
        openModal={() => {
          setEditingCertification(null);
          setIsModalOpen(true);
        }}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <DashboardStats certifications={certifications} />
      <CertificationsList certifications={certifications} searchTerm={searchTerm} setSearchTerm={setSearchTerm} statusFilter={statusFilter} setStatusFilter={setStatusFilter} selectedCategory={selectedCategory} deleteCertification={deleteCertification} handleEdit={handleEdit} />
      {isModalOpen && (
        <AddCertificationModal 
        closeModal={() => setIsModalOpen(false)} 
        addCertification={addCertification}
        updateCertification={updateCertification} 
        editingCertification={editingCertification} 
        />
        )}
      <Footer />
    </>
  );
}

export default App