import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/inertia-react";
import ValidationMessage from "@/Components/ValidationMessage";
import SubmitButton from "@/Components/SubmitButton";

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    name: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("tags.store"));
  };

  const onChange = (e) => {
    setData(e.target.id, e.target.value);
  };

  return (
    <AdminLayout header="Create New Tag">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>

          <input
            id="name"
            type="text"
            value={data.name}
            onChange={onChange}
            className="w-full rounded"
            required
            autoFocus
          />

          <ValidationMessage errors={errors.name} />
        </div>

        <SubmitButton disabled={processing}>Create</SubmitButton>
      </form>
    </AdminLayout>
  );
}
