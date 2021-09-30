import React from "react";
import Select from "react-select";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/inertia-react";
import ValidationMessage from "@/Components/ValidationMessage";
import SubmitButton from "@/Components/SubmitButton";

export default function Edit({ auth, article, collection }) {
  const { data, setData, put, processing, errors, transform } = useForm({
    title: article.title,
    body: article.body,
    category_id: article.category_id,
    tags: []
  });

  const categoryList = collection.categories.map((category) => ({
    value: category.id,
    label: category.name
  }));

  const defaultCategory = categoryList.find((category) => {
    return category.value == data.category_id;
  });

  const tagList = collection.tags.map((tag) => ({
    value: tag.id,
    label: tag.name
  }));

  const defaultTags = article.tags.map((tag) => ({
    value: tag.id,
    label: tag.name
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    put(route("articles.update", article));
  };

  const onChange = (e) => {
    setData(e.target.id, e.target.value);
  };

  const onChangeCategory = (e) => {
    setData("category_id", e?.value);
  };

  const onChangeTag = (e) => {
    setData("tags", e);
  };

  transform((data) => ({
    ...data,
    user_id: auth.user.id
  }));

  return (
    <AdminLayout header="Update Article">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">
            Title
          </label>

          <input
            id="title"
            type="text"
            value={data.title}
            onChange={onChange}
            className="w-full rounded"
            required
            autoFocus
          />

          <ValidationMessage errors={errors.title} />
        </div>

        <div className="mb-4">
          <label htmlFor="body" className="block mb-2">
            Body
          </label>

          <textarea
            id="body"
            value={data.body}
            onChange={onChange}
            className="w-full rounded"
            cols="30"
            rows="7"
            required
          />

          <ValidationMessage errors={errors.body} />
        </div>

        <div className="mb-4">
          <label htmlFor="category_id" className="block mb-2">
            Category
          </label>

          <Select
            inputId="category_id"
            options={categoryList}
            onChange={onChangeCategory}
            defaultValue={defaultCategory}
            isSearchable
            isClearable
          />

          <ValidationMessage errors={errors.category_id} />
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block mb-2">
            Tags
          </label>

          <Select
            inputId="tags"
            options={tagList}
            onChange={onChangeTag}
            defaultValue={defaultTags}
            isSearchable
            isClearable
            isMulti
          />

          <ValidationMessage errors={errors.tags} />
        </div>

        <SubmitButton disabled={processing}>Update</SubmitButton>
      </form>
    </AdminLayout>
  );
}
