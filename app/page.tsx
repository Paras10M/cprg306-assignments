import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <nav className="space-y-2">
        <p>
          <Link href="/week-2" className="underline hover:text-gray-300">
            Go to Week 2 Assignment
          </Link>
        </p>

        <p>
          <Link href="/week-3" className="underline hover:text-gray-300">
            Go to Week 3 Assignment
          </Link>
        </p>

        <p>
          <Link href="/week-4" className="underline hover:text-gray-300">
            Go to Week 4 Assignment
          </Link>
        </p>

        {/* ✅ Week 5 link added */}
        <p>
          <Link href="/week-5" className="underline hover:text-gray-300">
            Go to Week 5 Assignment
          </Link>
        </p>

        {/* Optional future weeks */}
        <p className="text-gray-500">Go to Week 6 →</p>
        <p className="text-gray-500">Go to Week 7 →</p>
        <p className="text-gray-500">Go to Week 8 →</p>
      </nav>

      <p className="mt-6">Name: Paras Odedara</p>

      <p className="mt-2 text-gray-400">
        This site contains weekly assignments for CPRG 306.
      </p>
    </main>
  );
}
