import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../ui/inputs/TextField';
import { SelectField } from '../ui/inputs/SelectField';
import { FaMicrophone, FaImage, FaFileAlt, FaVideo } from 'react-icons/fa';

// --- Esquema de Validación Dinámica ---
const validationSchema = Yup.object().shape({
  format: Yup.string().required(),
  title: Yup.string()
    .min(10, 'El título debe tener al menos 10 caracteres')
    .required('El título es obligatorio'),
  category: Yup.string().required('La categoría es obligatoria'),
  location: Yup.string().required('La ubicación es obligatoria'),
  // Validación condicional: 'story' es requerido solo si el formato es 'Texto'
  story: Yup.string().when('format', {
    is: 'Texto',
    then: (schema) => schema.min(50, 'El relato debe tener al menos 50 caracteres').required('El relato es obligatorio'),
    otherwise: (schema) => schema.notRequired(),
  }),
  // Validación condicional: 'file' es requerido si el formato NO es 'Texto'
  file: Yup.mixed().when('format', {
    is: (format) => format !== 'Texto',
    then: (schema) => schema.required('Debes subir un archivo'),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export function StorySubmissionPage() {
  const [selectedFormat, setSelectedFormat] = useState('Texto');

  const formatOptions = [
    { name: 'Audio', icon: <FaMicrophone size={24} /> },
    { name: 'Imagen', icon: <FaImage size={24} /> },
    { name: 'Texto', icon: <FaFileAlt size={24} /> },
    { name: 'Video', icon: <FaVideo size={24} /> },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold !text-[#012840]">Comparte tú memoria</h1>
          <p className="text-gray-600 mt-2">Tú historia es parte de nuestra identidad, subela en texto, imagen, audio o video</p>
        </div>

        <Formik
          initialValues={{
            format: 'Texto',
            title: '',
            category: '',
            location: '',
            story: '',
            file: null,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm();
              setSelectedFormat('Texto');
            }, 2000); // Simula una llamada a la API de 2 segundos
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              {/* --- Selector de Formato --- */}
              <div className="flex justify-center gap-x-2 sm:gap-x-4 mb-10">
                {formatOptions.map((opt) => (
                  <button
                    key={opt.name}
                    type="button"
                    onClick={() => {
                      setSelectedFormat(opt.name);
                      setFieldValue('format', opt.name);
                    }}
                    className={`flex flex-col items-center p-3 rounded-lg w-24 transition-all duration-300
                                ${selectedFormat === opt.name ? '!bg-[#F29F05] shadow-md text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                  >
                    {opt.icon}
                    <span className="mt-2 font-semibold">{opt.name}</span>
                  </button>
                ))}
              </div>
              
              <TextField 
                label="Título *" 
                name="title" 
                type="text" 
                placeholder="Ej: La leyenda de La Mocuana" 
              />
              <SelectField label="Categoría *" name="category">
                <option value="">Selecciona una categoría</option>
                <option value="leyenda">Leyenda y Mito</option>
                <option value="historia">Historia Local</option>
                <option value="receta">Comida tipica</option>
              </SelectField>
              <TextField 
                label="Ubicación *" 
                name="location" 
                type="text" 
                placeholder="Ej: Matagalpa, Nicaragua" 
              />

              {/* --- Campo Condicional --- */}
              {selectedFormat === 'Texto' ? (
                <TextField
                  label="Relato *"
                  name="story"
                  as="textarea" // Le decimos al componente que renderice un textarea
                  rows="6"
                  placeholder="Les contaré sobre la leyenda de..."
                />
              ) : (
                <div className="mb-6">
                  <label htmlFor="file" className="block text-lg font-semibold text-gray-800 mb-2">
                    Subir Archivo *
                  </label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full !bg-[#F29F05] hover:bg-[#d98e05] !text-[#012840] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 disabled:bg-gray-400"
              >
                {isSubmitting ? 'Enviando...' : 'Subir Historia'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}