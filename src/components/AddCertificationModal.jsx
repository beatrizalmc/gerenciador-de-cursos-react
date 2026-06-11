import { useState } from "react";

const AddCertificationModal = ({ closeModal, addCertification, updateCertification, editingCertification }) => {
  
  const [formData, setFormData] = useState(
      editingCertification || {
        title: "",
        platform: "",
        date: "",
        type: "",
        status: "",
        category: "",
        duration: "",
        description: "",
        certificate: false,
        curriculum: false,
        extracurricular: false,
    });

    const handleSubmit = (e) => {
      e.preventDefault();

      const newCertification = {
        id: editingCertification
          ? editingCertification.id
          : Date.now(),

        title: formData.title,
        platform: formData.platform,

        date: formData.date, 

        type: formData.type,
        status: formData.status,
        category: formData.category,
        description: formData.description,

        year: new Date(formData.date).getFullYear(),

        hours: Number(formData.duration),

        curriculum: formData.curriculum,
        extracurricular: formData.extracurricular,
      };

      if (editingCertification) {
        updateCertification({
          ...newCertification,
          id: editingCertification.id,
        });
      } else {
        addCertification(newCertification);
      }

      closeModal();
    };
  
    return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
          <h2 className="text-xl font-bold">
            Adicionar Certificado
          </h2>
          <button
            onClick={closeModal}
            className="text-xl cursor-pointer"
            type="button"
          >
            ✕
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Título *</label>
            <input
              type="text"
              id="title"
              className="border rounded-lg p-2" required
              value={formData.title}
              onChange={(e) =>
                setFormData({
                ...formData,
                title: e.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="platform">
              Organização/Instituição *
            </label>
            <input
              type="text"
              id="platform"
              className="border rounded-lg p-2" required
              value={formData.platform}
              onChange={(e) =>
                setFormData({
                ...formData,
                platform: e.target.value,
                })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="date">Data *</label>
              <input
                type="date"
                id="date"
                className="border rounded-lg p-2" required
                value={formData.date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="duration">Duração *</label>
              <input
                type="number"
                id="duration"
                min="1"
                placeholder="Ex: 40"
                className="border rounded-lg p-2" 
                required
                value={formData.duration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    duration: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="type">Tipo *</label>
              <select id="type" className="border rounded-lg p-2" 
                value={formData.type}
                onChange={(e) =>
                    setFormData({
                    ...formData,
                    type: e.target.value,
                    })
                }>
                <option value="">Selecione...</option>
                <option value="Curso">Curso</option>
                <option value="Evento">Evento</option>
                <option value="Bootcamp">Bootcamp</option>
                <option value="Hackathon">Hackathon</option>
                <option value="SimpCong">Simpósio/Congresso</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="status">Status *</label>
              <select id="status" className="border rounded-lg p-2" 
                value={formData.status}
                onChange={(e) =>
                    setFormData({
                    ...formData,
                    status: e.target.value,
                    })
                }>
                <option value="">Selecione...</option>
                <option value="Concluído">Concluído</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Planejado">Planejado</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="category">Categoria *</label>
            <select id="category" className="border rounded-lg p-2" 
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }>
              <option value="">Selecione...</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
              <option value="Inteligência Artificial">Inteligência Artificial</option>
              <option value="Dados">Dados</option>
              <option value="Mobile">Mobile</option>
              <option value="Cyber">Cybersecurity</option>
              <option value="Design">Design</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description">
              Descrição
            </label>
            <textarea
              id="description"
              rows="4"
              className="border rounded-lg p-2"
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Opções adicionais
            </h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" id="curriculum" checked={formData.curriculum}
                    onChange={(e) =>
                        setFormData({
                        ...formData,
                        curriculum: e.target.checked,
                        })
                    } 
                />
                Adicionado ao currículo
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" id="extracurricular" checked={formData.extracurricular}
                    onChange={(e) =>
                        setFormData({
                        ...formData,
                        extracurricular: e.target.checked,
                        })
                    } 
                />
                Registrado como atividade extracurricular
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={closeModal} className="px-4 py-2 border rounded-lg cursor-pointer">
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg cursor-pointer">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCertificationModal;