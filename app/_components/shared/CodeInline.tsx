export default function CodeInline({ children }: any) {
  return (
    <>
      {children?.map((child, idx) => (
        <span
          key={`${child}-${idx}`}
          className="inlineCode"
        >
          {child}
        </span>
      ))}
    </>
  )
}
