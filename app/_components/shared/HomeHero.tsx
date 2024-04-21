export default function HomeHero() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-end gap-4 py-12 pt-24 pb-6 lg:py-24">
      <h1 className="text-[64px] md:text-[144px] lg:text-[220px] font-[300] mb-0 text-black">
        Software <br />
        Engineer
      </h1>
      <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-0 translate-y-0 lg:translate-y-[-26px] text-black">
        <span>Consultant</span>
        <span>Business Owner</span>
        <span>Neuroscience Enthusiast</span>
      </div>
    </div>
  )
}
