export default function Instructions() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen justify-center items-center gap-5 text-slate-700">
        <h1 className="text-5xl text-slate-500 underline decoration-slate-400">
          Hello World!
        </h1>
        <div className="w-1/3 hyphens-auto leading-8">
          Skeleton boilerplate for a react project with Vite, Tailwind and
          gh-pages deploy. There is instructions for a nice animation package if
          needed in the tailwind.config.js file and the README.
        </div>
        <div className="w-1/3 h-1 bg-slate-400 rounded"></div>
        <div className="w-1/3">
          <div className="font-bold  items-start">To get started</div>
          <ol className="list-decimal list-inside">
            <li>In terminal, run "npm init".</li>
            <li>Next, run "npm run dev" </li>
          </ol>

          <div className="font-bold mt-6">When ready to deploy:</div>
          <ol className="list-decimal list-inside">
            <li>Create your github repo.</li>
            <li>Add the origin in terminal via the github instructions.</li>
            <li>
              In package.json update the homepage to: "homepage": ".{"<"}
              your-repo-name/{">"}",
            </li>
            <li>In terminal run "npm run deploy"</li>
          </ol>
        </div>
      </div>
    </>
  );
}