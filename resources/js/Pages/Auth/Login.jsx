import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { useForm } from "@inertiajs/inertia-react";
import ValidationMessage from "@/Components/ValidationMessage";
import SubmitButton from "@/Components/SubmitButton";

export default function Login() {
  const { data, setData, errors, processing, post } = useForm({
    email: "",
    password: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("login"));
  };

  const onChange = (e) => {
    setData(e.target.id, e.target.value);
  };

  return (
    <AppLayout>
      <h1 className="my-10 text-6xl text-center">Log in</h1>

      <div className="mx-auto w-80">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              value={data.email}
              onChange={onChange}
              placeholder="Your E-mail"
              className="w-full rounded"
              required
              autoFocus
            />

            <ValidationMessage errors={errors.email} />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>

            <input
              id="password"
              type="password"
              value={data.password}
              onChange={onChange}
              placeholder="*********"
              className="w-full rounded"
              required
            />

            <ValidationMessage errors={errors.password} />
          </div>

          <SubmitButton disabled={processing}>Sign in</SubmitButton>
        </form>
      </div>
    </AppLayout>
  );
}
