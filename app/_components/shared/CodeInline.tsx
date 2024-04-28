export default function CodeInline({ value }: any) {
  return (
    <>
      {value?.map((child: string, idx: number) => (
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
