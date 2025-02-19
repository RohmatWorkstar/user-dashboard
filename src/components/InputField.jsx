const InputField = ({ label, name, register, errors, validationRules = {} }) => {
    return (
        <div>
            <label className="block font-medium">{label}</label>
            <input 
                {...register(name, validationRules)} 
                className="p-3 border border-gray-300 rounded w-full focus:ring focus:ring-blue-200" 
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
        </div>
    );
};

export default InputField;
