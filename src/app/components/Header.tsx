
import Link from "next/link";

export default async function Header() {
 
  return (
    <header>
      <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={'/'} className="font-bold text-xl text-white">JOBOSCO</Link>
        <nav className="flex gap-2">
         
            <Link className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4" href={'/login'}>
              Login
            </Link>
            <form >
              {/* <button type="submit" className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4">
                Logout
              </button> */}
            </form>
          
          <Link className="rounded-md py-1 px-2 sm:py-2 sm:px-4 bg-amber-600 text-white" href={'/new-listing'}>
            Create a job
          </Link>
        </nav>
      </div>
    </header>
  );
}