import { Play } from "lucide-react"

export function VideoGuideSection() {
  return (
    <section className="relative py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">See Control Media at Work: A Video Guide</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Streamline your teams workflow with real-time collaboration and effortless task management.
        </p>

        {/* Video Preview */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2CtlV215JijL6VAD18s9JVx7uDL4RC.png"
              alt="Control Media Dashboard Video Preview"
              className="w-full h-auto"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button className="w-20 h-20 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
