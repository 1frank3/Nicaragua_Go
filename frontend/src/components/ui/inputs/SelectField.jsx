
import { useField, ErrorMessage } from 'formik';

export function SelectField({ label, children, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mb-6">
      <label 
        htmlFor={props.id || props.name} 
        className="block text-lg font-semibold text-gray-800 mb-2"
      >
        {label}
      </label>
      <select
        className={`w-full p-4 bg-gray-100 border-2 rounded-lg appearance-none transition duration-200
                    focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                    ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-200'}`}
        {...field}
        {...props}
      >
        {children} {/* Esto permite pasar las <option> desde el formulario */}
      </select>
      <ErrorMessage 
        component="div" 
        name={field.name} 
        className="text-red-600 text-sm mt-1" 
      />
    </div>
  );
}