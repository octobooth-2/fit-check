import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export const Navbar = () => {
  const { totalItems } = useCart()

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-slate-900">
          Fit Check
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-700">
          {[
            ['/', 'Home'],
            ['/shop', 'Shop'],
            ['/outfits', 'Outfits'],
            ['/cart', `Cart (${totalItems})`],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? 'font-semibold text-slate-900' : 'hover:text-slate-900'
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
