export default function Footer() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer className="flex flex-row gap-8 justify-around items-center p-8 bg-iris text-white self-end">
      <div>
        <p className="small mb-0">
          &copy; {year.toString()} Mark Centoni, O & A Labs LLC
        </p>
      </div>
    </footer>
  )
}
