const Columns = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {children}
    </div>
  )
}

export default Columns
