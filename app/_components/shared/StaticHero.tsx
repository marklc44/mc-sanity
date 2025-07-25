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
            <div className="text-highlight">const</div>
            <div className="text-muted-foreground">developer = {`{`}</div>
            <div className="pl-4 text-muted-foreground">
              name: "Mark Centoni",
            </div>
            <div className="pl-4 text-muted-foreground">
              focus: "Startup Success",
            </div>
            <div className="pl-4 text-muted-foreground">
              experience: [<br />
              <div className="pl-4">
                "Software Engineer",
                <br /> "Tech Lead",
                <br /> "Manager",
                <br />
                "Consultant"
                <br />
              </div>
              ],
            </div>
            <div className="pl-4 text-muted-foreground">
              expertise: ["React", "Node.js", "Next.js", "SQL",...rest],
            </div>
            <div className="text-muted-foreground">{`}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaticHero
