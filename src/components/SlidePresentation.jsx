import { useState } from 'react';

const SlidePresentation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const slides = [
    {
      id: 1,
      title: "The Problem: Punishment vs. Praise",
      timing: "0:00-0:30",
      content: "Opening with construction workers looking frustrated/disengaged, contrasted with the question about excited teams.",
      visuals: "Split screen: Left side shows traditional 'safety violation' clipboard with red marks; right side shows empty recognition board.",
      notes: "This establishes the core problem in construction culture—focusing on negatives instead of positives. Use Scratchie orange/black color scheme. James starts with the hand-raising question to engage audience immediately.",
      quote: "How many of you have construction crews who are genuinely excited to come to work every day?"
    },
    {
      id: 2,
      title: "The Personal Connection",
      timing: "0:30-1:00",
      content: "James's experience as a construction CEO trying to improve engagement.",
      visuals: "Photo of James on construction site with workers; subtle graph showing plateau in safety metrics despite increased spending.",
      notes: "This establishes credibility and shared experience with the audience. Keep the visual clean with just one clear graph showing the plateau effect in traditional safety programs.",
      quote: "Despite pouring millions into safety programs, engagement remained flat. Incidents plateaued."
    },
    {
      id: 3,
      title: "The Evolution: From Safety to Culture",
      timing: "1:00-1:30",
      content: "Introduction to Scratchie's evolved approach and Self-Determination Theory.",
      visuals: "Animated diagram of Self-Determination Theory's three pillars: Competence, Autonomy, Relatedness with brief explanations.",
      notes: "This is the educational 'TED talk' moment where the audience learns something valuable regardless of whether they adopt Scratchie. Use Scratchie's secondary color palette (blue, yellow) to highlight these psychological elements.",
      quote: "Self-Determination Theory teaches us that human motivation requires three things: competence, autonomy, and relatedness."
    },
    {
      id: 4,
      title: "How It Works",
      timing: "1:30-2:15",
      content: "Simple 4-step process visual + new features (Convo Cards, Peer Recognition, Recommendation Engine).",
      visuals: "Clean, simple 4-step infographic with app screenshots, then 3 quick spotlights on new features with app visuals.",
      notes: "Keep text minimal on slides. Let James explain while simple animations highlight each step and new feature. Use actual app screenshots with worker photos blurred for privacy.",
      quote: "Our Convo Cards turn risk identification into a rewarding experience."
    },
    {
      id: 5,
      title: "Real Results",
      timing: "2:15-2:50",
      content: "Key metrics from actual implementations + Tom & Sarah stories.",
      visuals: "Simple, bold stat counters for key metrics; photos of real workers (with permission) receiving Scratchies.",
      notes: "The metrics should use large, bold typography with the Scratchie 'scratch' graphic element behind them. Include happy McDonald's worker receiving award for the diversity angle.",
      quote: "96% of workers prefer Scratchie sites"
    },
    {
      id: 6,
      title: "Integration & Pricing",
      timing: "2:50-3:15",
      content: "Partner logos + simple pricing visual.",
      visuals: "Integration diagram showing Scratchie connecting with Procore, Hammertech, and Oracle Aconex. Simple '$5 per active user' with ROI calculation.",
      notes: "Keep this section brief but clear. The integration diagram should show how Scratchie adds a 'motivation layer' on top of existing systems, not replacing them.",
      quote: "At just $5 per active user per month, the ROI is a no-brainer."
    },
    {
      id: 7,
      title: "The Vision: Transformed Worksites",
      timing: "3:15-3:50",
      content: "Drone shot of Sydney Harbour construction site transforming from grayscale to color.",
      visuals: "Beautiful drone footage/photo that transitions from desaturated to vibrant, with key 'imagine' points appearing.",
      notes: "This visualizes the transformation Scratchie brings to construction culture. The 'imagine' bullets should appear one by one as James mentions each point. End with the site fully colored and vibrant.",
      quote: "Imagine sites where workers rush to show their quality work, not hide their mistakes."
    },
    {
      id: 8,
      title: "From Building Structures to Building Teams",
      timing: "3:50-4:20",
      content: "Metaphor visualization: building structures vs. building teams.",
      visuals: "Split screen: physical construction vs. team-building, both using construction visual language.",
      notes: "This is the philosophical culmination that gives the talk its 'TED' quality. Use blueprint-style illustrations to show how we've mastered building structures but need similar attention to building teams.",
      quote: "In construction, we've spent decades perfecting how to build structures. Now it's time we perfected how to build teams."
    },
    {
      id: 9,
      title: "Call to Action",
      timing: "4:20-5:00",
      content: "Free month offer + QR code to sign up + Scratchie booth location.",
      visuals: "Simple, bold call-to-action with QR code and booth number. Final branded slide with 'Winning at Work' tagline.",
      notes: "The QR code should be large enough to be scanned from a distance. Include the FCON show floor map with Scratchie's booth highlighted if possible.",
      quote: "Try Scratchie free for one month. No commitment. No complex setup."
    }
  ];

  // Sample visualization of the Self-Determination Theory slide
  const SampleSlideVisualization = () => (
    <div className="bg-gray-100 p-6 rounded-lg mt-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Slide 3 Visualization: Self-Determination Theory</h3>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="bg-blue-100 p-4 rounded-lg flex-1">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">C</span>
          </div>
          <h4 className="text-center font-bold mb-2">Competence</h4>
          <p className="text-sm text-center">Feeling effective and capable at work</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex-1">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <h4 className="text-center font-bold mb-2">Autonomy</h4>
          <p className="text-sm text-center">Having choice and control over actions</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex-1">
          <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
          <h4 className="text-center font-bold mb-2">Relatedness</h4>
          <p className="text-sm text-center">Feeling connected to others</p>
        </div>
      </div>
      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
        <p className="text-sm text-gray-600 italic">Note to designer: Create a more refined version of this concept using Scratchie brand colors and styling. The elements should animate in one by one as James explains each pillar of Self-Determination Theory.</p>
      </div>
    </div>
  );

  // Sample visualization of the 4-step process
  const HowItWorksVisualization = () => (
    <div className="bg-gray-100 p-6 rounded-lg mt-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Slide 4 Visualization: How It Works</h3>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="bg-white p-3 rounded-lg flex-1 border-l-4 border-orange-500">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold">1</span>
          </div>
          <p className="text-sm">Supervisor spots good work</p>
        </div>
        <div className="bg-white p-3 rounded-lg flex-1 border-l-4 border-orange-500">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold">2</span>
          </div>
          <p className="text-sm">Opens app, generates code</p>
        </div>
        <div className="bg-white p-3 rounded-lg flex-1 border-l-4 border-orange-500">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold">3</span>
          </div>
          <p className="text-sm">Worker scans & instantly wins</p>
        </div>
        <div className="bg-white p-3 rounded-lg flex-1 border-l-4 border-orange-500">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold">4</span>
          </div>
          <p className="text-sm">Money hits account in 60 seconds</p>
        </div>
      </div>
      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
        <p className="text-sm text-gray-600 italic">Note to designer: Create a cleaner version with Scratchie app UI screenshots. Add subtle animation to show the progression from one step to the next. Below this, create three circular highlight areas for the new features: Convo Cards, Peer Recognition, and Recommendation Engine.</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Scratchie FCON Shark Tank Presentation Brief</h1>
      <p className="text-gray-600 mb-6">5-minute TED-style presentation that educates while pitching Scratchie's evolved platform</p>
      
      <div className="mb-6">
        <div className="flex border-b">
          <button 
            className={`px-4 py-2 ${activeTab === 'overview' ? 'bg-blue-100 border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'slides' ? 'bg-blue-100 border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('slides')}
          >
            Slide-by-Slide Brief
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'samples' ? 'bg-blue-100 border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('samples')}
          >
            Sample Visualizations
          </button>
        </div>
      </div>
      
      {activeTab === 'overview' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Presentation Overview</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
            <h3 className="font-bold mb-2">Key Message</h3>
            <p>Scratchie has evolved from a safety rewards app to a complete workplace culture platform that helps construction teams "Win at Work" by applying research-based motivational psychology.</p>
          </div>
          
          <h3 className="font-bold mb-2">Presentation Flow</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Identify the problem: Construction's punitive culture</li>
            <li>Establish credibility: James's personal experience</li>
            <li>Educational moment: Self-Determination Theory</li>
            <li>Show the solution: Scratchie's process & new features</li>
            <li>Prove it works: Metrics & stories</li>
            <li>Address practical concerns: Integration & pricing</li>
            <li>Inspire with vision: Transformed worksites</li>
            <li>Philosophical takeaway: From building structures to building teams</li>
            <li>Clear call to action: Free month offer</li>
          </ol>
          
          <h3 className="font-bold mb-2">Visual Style Guide</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Use Scratchie's brand colors throughout (primary: carrot orange #F97115, cash green #4DB360)</li>
            <li>Include Scratchie's "scratch" graphic element as a visual motif</li>
            <li>Minimize text on slides – let the visuals and James tell the story</li>
            <li>Use real photos of construction workers and sites when possible</li>
            <li>Create clean, simple infographics for data and processes</li>
            <li>Use animation sparingly but effectively to highlight key points</li>
            <li>End with bold, clear call-to-action</li>
          </ul>
          
          <h3 className="font-bold mb-2">Timing</h3>
          <p>Each slide is timed to keep the presentation within the 5-minute limit while allowing for natural delivery and audience reaction.</p>
        </div>
      )}
      
      {activeTab === 'slides' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Slide-by-Slide Brief</h2>
          
          <div className="overflow-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left w-16">#</th>
                  <th className="py-2 px-4 border-b text-left">Title</th>
                  <th className="py-2 px-4 border-b text-left">Timing</th>
                  <th className="py-2 px-4 border-b text-left">Content & Visuals</th>
                </tr>
              </thead>
              <tbody>
                {slides.map(slide => (
                  <tr key={slide.id} className="border-b">
                    <td className="py-3 px-4">{slide.id}</td>
                    <td className="py-3 px-4 font-medium">{slide.title}</td>
                    <td className="py-3 px-4">{slide.timing}</td>
                    <td className="py-3 px-4">
                      <p className="mb-2"><span className="font-medium">Content:</span> {slide.content}</p>
                      <p className="mb-2"><span className="font-medium">Visuals:</span> {slide.visuals}</p>
                      <p className="mb-2"><span className="font-medium">Notes:</span> {slide.notes}</p>
                      <p className="italic text-gray-600">"{slide.quote}"</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {activeTab === 'samples' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Sample Slide Visualizations</h2>
          <p className="mb-6">These rough mockups illustrate key concepts for selected slides. The designer should refine these using Scratchie brand guidelines.</p>
          
          <SampleSlideVisualization />
          <div className="mt-6"></div>
          <HowItWorksVisualization />
          
          <div className="bg-gray-100 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Slide 7 Visualization: The Vision</h3>
            <div className="relative">
              <div className="bg-gray-400 h-64 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg">Sydney Harbour Construction Site Drone Shot</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-transparent flex items-center">
                <ul className="text-white pl-8 space-y-3">
                  <li className="font-bold">Imagine sites where:</li>
                  <li>• Workers rush to show their quality work</li>
                  <li>• Supervisors are welcomed, not avoided</li>
                  <li>• Teams collaborate because they want to</li>
                  <li>• People go home feeling valued</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600 italic">Note to designer: Create a more polished version using a high-quality drone shot of a Sydney construction site. The image should start desaturated and gradually become colorful as James describes the vision. Each bullet point should appear with subtle animation as James mentions it.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlidePresentation;