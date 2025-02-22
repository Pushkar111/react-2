import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EditUser = () => {
    // const id = useParams().id;
    const { id } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm({
        defaultValues: async () => {
            const response = await axios.get(`https://node5.onrender.com/user/user/${id}`);
            return response.data.data;
        },
    });

    const submitHandler = async (data) => {
        console.log(data);
        delete data._id;

        const response = await axios.put(`https://node5.onrender.com/user/user/${id}`, data);
        console.log(response.data);

        if (response.status === 200) {
            toast.success("User updated successfully!");
        }

        navigate("/allUsers");
    };

    return (
        <div class="container p-4 bg-white rounded shadow-lg">
            {/* <!-- Tostify - ToastContainer --> */}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={true}
                theme="dark"
                transition={Bounce}
            />
            <form onSubmit={handleSubmit(submitHandler)}>
                {/* <!-- name --> */}
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Name :
                    </label>
                    <input type="text" class="form-control" {...register("name")} />
                </div>
                {/* <!-- email --> */}
                <div class="mb-3">
                    <label for="email" class="form-label">
                        Email :
                    </label>
                    <input type="text" class="form-control" {...register("email")} />
                </div>
                {/* <!-- age --> */}
                <div class="mb-3">
                    <label for="age" class="form-label">
                        Age :
                    </label>
                    <input type="text" class="form-control" {...register("age")} />
                </div>
                {/* <!-- isActive --> */}
                <div class="mb-3">
                    <label for="isActive" class="form-label">
                        isActive :
                    </label>
                    <input type="text" class="form-control" {...register("isActive")} />
                </div>
                {/* <!-- Submit --> */}
                <div>
                    <input type="submit" value="Submit" class="btn btn-primary w-100" />
                </div>
            </form>
        </div>
    );
};
