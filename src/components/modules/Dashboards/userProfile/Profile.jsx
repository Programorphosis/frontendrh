import React, { useState } from "react";
import { capitalizeWords } from "../../../../helpers";
import { useDateFormatter } from "@react-aria/i18n";
import UpdateFormUser from "../../forms/updates/UpdateFormUser";
import UpdateFormUserdirections from "../../forms/updates/UpdateFormUser2";

const ProfileComponent = ({ dataUser, user }) => {
  // Extraemos la información necesaria de dataUser y user
  const fullName = dataUser
    ? `${dataUser.name} ${dataUser.lastname}`
    : "Sin información";
  const telefono = dataUser?.telefono || "Sin información";
  const segundoTelefono = dataUser?.segundoTelefono || "Sin información";
  const email = dataUser?.email || "Sin información";
  const username = user?.username || "Sin información";
  const createdDate = dataUser?.created_date
    ? new Date(dataUser.created_date)
    : null;
  const verify = dataUser?.verify ? "Sí" : "No";
  const usertype = dataUser?.usertype === 0 ? "Usuario" : "Administrador";
  const formatter = useDateFormatter({ dateStyle: "long" });
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showUpdateForm2, setShowUpdateForm2] = useState(false);

  const handleShowUpdateForm = () => {
    if (showUpdateForm2) {
      setShowUpdateForm2(false);
    }
    setShowUpdateForm(!showUpdateForm);
    };
    const handleShowUpdateForm2 = () => {
        if (showUpdateForm) {
            setShowUpdateForm(false);
        }
        setShowUpdateForm2(!showUpdateForm2);
    };

  console.log("dataUser", dataUser);
  return (
    <div
      role="main"
      className=" bg-background max-h-screen  overflow-y-scroll scrollbar-hide  pb-12"
    >
  

      {/* Información Básica */}
      <div className="mb-12">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Información básica</h2>
            <p className="mt-2 text-xs text-text-primary">
              La información ingresada debe coincidir con la del documento de
              identidad que uses para viajar.
            </p>
          </div>
          <button
            type="button"
            aria-label="Editar información básica"
            className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
            onClick={handleShowUpdateForm}
          >
            Editar
          </button>

          {showUpdateForm && (
            <div className="absolute top-0 left-0 w-full h-screen bg-background bg-opacity-50 flex items-center justify-center z-50">
              <UpdateFormUser
                onClose={handleShowUpdateForm}
                dataUser={dataUser}
              />
            </div>
          )}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Nombre</h3>
            <p className="text-[0.8rem] text-text-secondary">
              {capitalizeWords(fullName)}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Biografía</h3>
            <p className="text-[0.8rem] text-text-secondary">Sin especificar</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Fecha de nacimiento</h3>
            <p className="text-[0.8rem] text-text-secondary">Sin información</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Género</h3>
            <p className="text-[0.8rem] text-text-secondary">Sin información</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">
              Necesidades de acceso especial
            </h3>
            <p className="text-[0.8rem] text-text-secondary">Sin información</p>
          </div>
          {/* Datos adicionales inyectados desde AccountDetails */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Username</h3>
            <p className="text-[0.8rem] text-text-secondary">{username}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Fecha de Creación</h3>
            <p className="text-[0.8rem] text-text-secondary">
              {formatter.format(createdDate)}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Verificado</h3>
            <p className="text-[0.8rem] text-text-secondary">{verify}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Tipo de Usuario</h3>
            <p className="text-[0.8rem] text-text-secondary">{usertype}</p>
          </div>
        </div>
      </div>

      {/* Información de Contacto */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Información de contacto</h2>
            <p className="mt-2 text-xs text-text-primary">
              Bríndanos esta información para recibir alertas sobre la actividad
              de la cuenta y novedades.
            </p>
          </div>
          <button
            type="button"
            aria-label="Editar información de contacto"
            className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
            onClick={handleShowUpdateForm2}
          >
            Editar
          </button>
          {showUpdateForm2 && (
            <div className="absolute top-0 left-0 w-full h-screen bg-background bg-opacity-50 flex items-center justify-center z-50">
              <UpdateFormUserdirections
                onClose={handleShowUpdateForm2}
                dataUser={dataUser}
              />
            </div>
          )}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Número de celular</h3>
            <p className="text-[0.8rem] text-text-secondary">{telefono}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Correo electrónico</h3>
            <p className="text-[0.8rem] text-text-secondary">{email}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Segundo Teléfono</h3>
            <p className="text-[0.8rem] text-text-secondary">{segundoTelefono}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Contacto de emergencia</h3>
            <p className="text-[0.8rem] text-text-secondary">Sin información</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Dirección</h3>
            <p className="text-[0.8rem] text-text-secondary">Sin información</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
