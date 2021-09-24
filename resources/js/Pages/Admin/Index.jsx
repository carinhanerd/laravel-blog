import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";

const Index = ({ users }) => {
  return (
    <>
      <section id="users">
        <a href="#users" className="block mb-2 text-3xl text-gray-700">
          Users
        </a>

        <table className="w-full border divide-y">
          <thead className="bg-white">
            <tr>
              <th className="p-2 text-left">name</th>
              <th className="p-2 text-left">email</th>
              <th className="p-2 text-left">created_at</th>
              <th className="p-2 text-left">articles</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user, idx) => (
              <tr key={idx}>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.created_at}</td>
                <td className="p-2">{user.articles_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

Index.layout = (page) => <AdminLayout children={page} header="Admin Panel" />;

export default Index;
