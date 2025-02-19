import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, updateUser } from "../features/userSlice";
import { useEffect, useState } from "react";
import InputField from "./InputField";

const UserForm = () => {
    const [formErrors, setFormErrors] = useState({});
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            address: { street: "" },
            company: { name: "" },
        },
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { users } = useSelector((state) => state.users);

    const user = users.find((user) => user.id === parseInt(id));

    useEffect(() => {
        if (user) {
            setValue("name", user.name);
            setValue("email", user.email);
            setValue("address.street", user.address?.street || "");
            setValue("company.name", user.company?.name || "");
        }
    }, [user, setValue]);

    const onSubmit = (data) => {
        const errors = {};

        if (!data.address?.street) {
            errors.address = "Alamat wajib di isi";
        }

        if (!data.company?.name) {
            errors.company = "Nama Perusahaan wajib di isi";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return; 
        }
        if (user) {
            dispatch(updateUser({ id: user.id, ...data }));
        } else {
            dispatch(addUser({ id: users.length + 1, ...data }));
        }
        navigate("/");
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-white">{user ? "Edit Pengguna" : "Tambah Pengguna"}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg space-y-4">
                <InputField label="Nama" name="name" register={register} errors={errors} validationRules={{ required: "Nama Wajib di isi " }} />
                <InputField
                    label="Email"
                    name="email"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: "Email Wajib di isi ",
                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email format" },
                    }}
                />
                <InputField label="Alamat" name="address.street" register={register} errors={errors} validationRules={{ required: "Alamat Wajib di isi " }} />{" "}
                {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
                <InputField label="Perusahaan" name="company.name" register={register} errors={errors} validationRules={{ required: "Nama Perusahaan Wajib di isi " }} />{" "}
                {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>}
                <button type="submit" className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700 transition">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserForm;
