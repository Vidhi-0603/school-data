"use client";

import { useForm } from "react-hook-form";

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("contact", data.contact);
    formData.append("email_id", data.email_id);
    formData.append("image", data.image[0]);
    const res = await fetch("/api/add-school", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    console.log(result, "school..");

    alert("School added!");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="mb-5 font-bold text-lg">
        <a href="/show-schools">Show Schools</a>
      </div>
      <h1 className="text-2xl font-bold mb-4">Add School</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        encType="multipart/form-data"
      >
        <input
          placeholder="School Name"
          className="border p-2 w-full"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="text-red-500">Required</p>}

        <input
          placeholder="Address"
          className="border p-2 w-full"
          {...register("address", { required: true })}
        />

        <input
          placeholder="City"
          className="border p-2 w-full"
          {...register("city", { required: true })}
        />

        <input
          placeholder="State"
          className="border p-2 w-full"
          {...register("state", { required: true })}
        />

        <input
          placeholder="Contact"
          className="border p-2 w-full"
          {...register("contact", { required: true })}
        />

        <input
          placeholder="Email"
          className="border p-2 w-full"
          {...register("email_id", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email_id && <p className="text-red-500">Invalid Email</p>}

        <input
          type="file"
          className="border p-2 w-full"
          {...register("image", { required: true })}
        />

        <button className="bg-blue-600 text-white p-2 w-full rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
