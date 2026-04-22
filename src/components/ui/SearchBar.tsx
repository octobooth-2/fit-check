export const SearchBar = ({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) => (
  <input
    value={value}
    onChange={(event) => onChange(event.target.value)}
    className="w-full rounded-md border border-slate-300 px-3 py-2"
    placeholder="Search products"
  />
)
