export default function CodeInline({ value }: any) {
  return (
    <>
      {value?.map((child, idx) => (
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
