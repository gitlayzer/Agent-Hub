const highlights = [
  {
    title: 'Typed UI foundation',
    copy: 'React and TypeScript are wired up so feature work starts from a strict, predictable base.',
  },
  {
    title: 'Tailwind ready',
    copy: 'Tailwind CSS is connected through the Vite plugin with a single CSS entry point.',
  },
  {
    title: 'Backend slot open',
    copy: 'A dedicated backend directory is in place for APIs, workers, or service code.',
  },
]

const checkpoints = [
  'Build screens in web/src with Tailwind utilities and components.',
  'Keep static assets in web/public when they need stable URLs.',
  'Use backend for your API server, jobs, or shared service modules.',
]

const projectTree = `Agent-Hub/
|- web/
|  |- src/
|  |- public/
|  \`- package.json
\`- backend/`

function App() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="float-slow absolute left-4 top-24 h-28 w-28 rounded-full bg-teal-600/15 blur-3xl" />
      <div className="float-slower absolute right-0 top-12 h-48 w-48 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <header className="reveal flex flex-col gap-4 border-b border-slate-900/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Agent Hub starter
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1">
                Vite
              </span>
              <span className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1">
                React
              </span>
              <span className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1">
                TypeScript
              </span>
              <span className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1">
                Tailwind CSS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <span className="rounded-full border border-teal-700/20 bg-teal-50 px-3 py-1.5 text-teal-900">
              web
            </span>
            <span className="rounded-full border border-orange-700/20 bg-orange-50 px-3 py-1.5 text-orange-900">
              backend
            </span>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(24rem,0.8fr)] lg:py-16">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="reveal reveal-delay-1 inline-flex items-center gap-2 rounded-full border border-orange-500/15 bg-orange-50/80 px-4 py-2 text-sm font-medium text-orange-900">
                UI foundation ready for feature work
              </p>

              <div className="space-y-4">
                <h1 className="reveal reveal-delay-2 max-w-4xl text-5xl leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
                  Build the frontend fast, keep the backend path clear.
                </h1>
                <p className="reveal reveal-delay-3 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  The <code className="rounded bg-white/80 px-2 py-1 text-base text-slate-900">web</code>{' '}
                  app is running on Vite, React, TypeScript, and Tailwind CSS.
                  A matching <code className="rounded bg-white/80 px-2 py-1 text-base text-slate-900">backend</code>{' '}
                  directory is ready for your API or service layer.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                href="https://vite.dev/guide/"
                target="_blank"
                rel="noreferrer"
              >
                Open Vite guide
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-900/20 hover:bg-white"
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noreferrer"
              >
                Browse Tailwind docs
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item, index) => (
                <article
                  key={item.title}
                  className={`glass-panel reveal rounded-[1.75rem] p-6 reveal-delay-${index + 1}`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    0{index + 1}
                  </p>
                  <h2 className="mt-4 text-2xl text-slate-950">{item.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="reveal reveal-delay-4">
            <div className="glass-panel rounded-[2rem] p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Project map
                  </p>
                  <h2 className="mt-2 text-3xl text-slate-950">Workspace layout</h2>
                </div>
                <div className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700">
                  starter
                </div>
              </div>

              <pre className="mt-6 overflow-x-auto rounded-[1.5rem] bg-slate-950 px-5 py-5 text-sm leading-7 text-slate-100">
                <code>{projectTree}</code>
              </pre>

              <div className="mt-6 space-y-3">
                {checkpoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-slate-900/10 bg-white/80 px-4 py-4 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}

export default App
