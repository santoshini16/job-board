import {createCompany} from "@/app/actions/workosActions";
import {withAuth} from "@workos-inc/authkit-nextjs";

export default async function NewCompanyPage() {
  const {user} = await withAuth();
  async function handleNewCompanyFormSubmit(data:FormData) {
    'use server';
    if (user) {
      await createCompany(data.get('newCompanyName') as string, user.id);
    }
  }

  if (!user) {
    'Login to use this page';
  }

  return (
    <div className="container text-white">
      <h2 className="text-lg mt-6">Create a new company</h2>
      <p className=" text-sm mb-2">To create a job listing your first need to register a company</p>
      <form
        action={handleNewCompanyFormSubmit}
        className="flex gap-2">
        <input
          name="newCompanyName"
          className="p-2 border border-gray-400 rounded-md text-gray-500"
          type="text"
          placeholder="company name"/>
        <button type="submit" className="flex gap-2 items-center bg-amber-600 px-4 py-2 rounded-md">
          Create company
        </button>
      </form>
    </div>
  );
}