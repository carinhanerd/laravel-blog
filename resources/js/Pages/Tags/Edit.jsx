import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/inertia-react";
import ValidationMessage from "@/Components/ValidationMessage";
import SubmitButton from "@/Components/SubmitButton";

export default function Edit({ tag }) {
  const { data, setData, processing, errors, put } = useForm({
    name: tag.name
  });

  const onSubmit = (e) => {
    e.preventDefault();
    put(route("tags.update", tag));
  };

  const onChange = (e) => {
    setData(e.target.id, e.target.value);
  };

  return (
    <AdminLayout header="Update Tag">
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

        <SubmitButton disabled={processing}>Update</SubmitButton>
      </form>
    </AdminLayout>
  );
}
