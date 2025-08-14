const StaticHero = () => {
  return (
    <div className="relative">
      <div className="aspect-square bg-gradient-to-br from-highlight/10 to-highlight/30 rounded-2xl p-8 backdrop-blur-sm">
        <div className="w-full h-full bg-card rounded-xl shadow-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            {/* <Badge variant="secondary">TypeScript</Badge> */}
          </div>
          <div className="space-y-2 font-mono text-sm">
            <div>
              <span className="text-highlight">const{' '}</span>
              <span className="text-muted-foreground">developer = {'{'}</span>
            </div>
            
            <div className="pl-4 text-muted-foreground">
              name: &quot;Mark Centoni&quot;,
            </div>
            <div className="pl-4 text-muted-foreground">
              focus: &quot;Startup Success&quot;,
            </div>
            <div className="pl-4 text-muted-foreground">
              experience: [<br />
              <div className="pl-4">
                &quot;Software Engineer&quot;,
                <br /> &quot;Tech Lead&quot;,
                <br /> &quot;Manager&quot;,
                <br />
                &quot;Consultant&quot;
                <br />
              </div>
              ],
            </div>
            <div className="pl-4 text-muted-foreground">
              expertise: [
                <br />&quot;React&quot;,
                <br /> &quot;Node.js&quot;,
                <br /> &quot;Next.js&quot;,
                <br /> &quot;SQL&quot;,
                <br /> ...rest,
                <br />],
            </div>
            <div className="text-muted-foreground">{'}'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaticHero
