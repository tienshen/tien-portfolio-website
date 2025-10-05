export default function Projects() {
  return (
    <main className="min-h-screen bg-[#202124] dark:bg-[#202124] text-gray-900 dark:text-gray-100 flex items-center justify-center">
      <section className="p-12 bg-gray-100/80 dark:bg-gray-800/80 rounded-2xl shadow mb-12">
        <h2 className="text-xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white/80 dark:bg-gray-700/80 rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Project One</h3>
            <p className="mb-4">Description of the project and technologies used.</p>
            <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
          </div>
          <div className="p-6 bg-white/80 dark:bg-gray-700/80 rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Project Two</h3>
            <p className="mb-4">Description of the project and technologies used.</p>
            <a href="#" className="text-blue-500 hover:underline">View Demo</a>
          </div>
        </div>
      </section>
    </main>
  );
}