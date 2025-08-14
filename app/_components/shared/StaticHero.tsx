const StaticHero = () => {
  return (
    <div className="relative">
      <div className="aspect-square bg-gradient-to-br from-highlight/10 to-highlight/30 rounded-2xl p-8 backdrop-blur-sm">
        <div className="w-full h-full bg-card rounded-xl shadow-2xl p-6 my--4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 mb-8">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="editor-text font-mono text-sm leading-relaxed">
            <div>
              <span className="text-cyan-600">const </span>
              <span className="text-blue-600">developer </span>
              <span className="text-gray-600">= {'{'}</span>
            </div>
            <div className="pl-4">
              <span className="text-blue-600">name</span>: <span className="text-green-500">"Mark Centoni"</span>,
            </div>
            <div className="pl-4">
              <span className="text-blue-600">focus</span>: <span className="text-green-500">"Startup Success"</span>,
            </div>
            <div className="pl-4">
              <span className="text-blue-600">experience</span>: [
              <div className="pl-4">
                <span className="text-green-500">"Software Engineer"</span>,<br />
                <span className="text-green-500">"Tech Lead"</span>,<br />
                <span className="text-green-500">"Manager"</span>,<br />
                <span className="text-green-500">"Consultant"</span>
              </div>
              ],
            </div>
            <div className="pl-4">
              <span className="text-blue-600">expertise</span>: [
              <div className="pl-4">
                <span className="text-green-500">"React"</span>,<br />
                <span className="text-green-500">"Node.js"</span>,<br />
                <span className="text-green-500">"Next.js"</span>,<br />
                <span className="text-green-500">"SQL"</span>,<br />
                <span className="text-green-500">"Typescript"</span>,<br />
                <span className="text-green-500">"UI Architecture"</span>,<br />
                <span className="text-green-500">"More..."</span>,
              </div>
              ],
            </div>
            <div><span className="text-gray-500">{'}'}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaticHero
