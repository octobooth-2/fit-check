import { Link } from 'react-router-dom'

export const NotFoundPage = () => (
  <div className="rounded-xl bg-white p-6">
    <h1 className="text-2xl font-semibold text-slate-900">Page not found</h1>
    <p className="mt-2 text-slate-600">The page you requested does not exist.</p>
    <Link className="mt-4 inline-block text-blue-700 underline" to="/">
      Return home
    </Link>
  </div>
)
