import { Button } from "@/components/ui/button"

export function CRMIntegrationSection() {
  return (
    <section className="relative py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Sync Your Team Communications into Your CRM Without Any Hassle
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Effortlessly connect and serve customers across channels all through one coordinated dashboard.
            </p>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">
              View Integration
            </Button>
          </div>

          {/* Right Content - Integration Icons */}
          <div className="relative">
            <div className="grid grid-cols-4 gap-8 items-center justify-items-center">
              {/* Row 1 */}
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-gray-600 rounded"></div>
              </div>
              <div></div>

              {/* Row 2 */}
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </div>
              <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">C</span>
              </div>

              {/* Row 3 */}
              <div></div>
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">W</span>
              </div>

              {/* Row 4 */}
              <div></div>
              <div></div>
              <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
