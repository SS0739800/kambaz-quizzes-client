function ReactLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-24 w-24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.05" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          transform="rotate(120 12 12)"
        />
      </g>
    </svg>
  );
}

export default function TailwindResponsiveDesign() {
  return (
    <div className="font-sans">
      <h2 className="text-3xl font-bold mb-4">Responsive Design</h2>
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="relative md:w-48 md:shrink-0">
            <img
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
              src="/images/reactjs.jpg"
              alt="React JS"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <ReactLogo />
              <div className="mt-2 text-2xl font-semibold">React JS</div>
            </div>
          </div>
          <div className="min-w-0 p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              CS 5610 Web Development
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline md:text-2xl"
            >
              Building Kambaz with Next.js
            </a>
            <p className="mt-2 text-gray-500">
              My first full stack project, styled this week with CSS and
              Tailwind.
            </p>
          </div>
        </div>
      </div>
      <div
        id="wd-ai-responsive"
        className="mx-auto mt-8 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-indigo-50"
      >
        <div className="md:flex">
          <div className="relative md:w-48 md:shrink-0">
            <img
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
              src="/images/reactjs.jpg"
              alt="React JS"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <ReactLogo />
              <div className="mt-2 text-2xl font-semibold">React JS</div>
            </div>
          </div>
          <div className="min-w-0 p-8 lg:p-12">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Professional Courses
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"
            >
              Rocket Propulsion Fundamentals
            </a>
            <p className="mt-2 text-gray-500">
              An in-depth study of the fundamentals of rocket propulsion...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
