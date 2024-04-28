import ContentSection from '@/app/_components/shared/ContentSection'
import RadialGradient from '@/app/_components/shared/RadialGradient'

export default function TestPage() {
  return (
    <div className="fullHeightContainer">
      <div
        style={{
          background: 'rgba(130, 2, 99, 1)',
          width: '100vw',
          height: '100vh',
        }}
      >
        <RadialGradient />
      </div>
    </div>
  )
}
