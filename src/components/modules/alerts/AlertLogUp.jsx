import React from "react";
import { Link } from "react-router-dom";
import style from "./AlertLogUp.module.css";

const AlertLogUp = ({ onClose }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      {/* Fondo semitransparente - Al hacer clic cierra el modal */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        onClick={onClose}
      ></div>

      {/* Contenedor del modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-6">
        {/* Encabezado */}
        <header className="mb-4 border-b pb-2">
          <h2 className="text-3xl font-bold text-gray-800">Bienvenido</h2>
        </header>

        {/* Contenido */}
        <section className="mb-6">
          <p className="text-gray-600 text-lg">
            Inicia sesión para crear tu lista de hoteles favoritos y acceder a funcionalidades exclusivas.
          </p>
        </section>

        {/* Footer con botones */}
        <footer className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded transition-colors duration-200"
          >
            Cerrar
          </button>
          <Link to="/login">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors duration-200"
            >
              Iniciar sesión
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AlertLogUp;

