import { Layout } from "./Layou"
import { HashRouter, Routes, Route } from "react-router-dom"
import { StepOnePage } from "./pages/StepOnePage"
import { StepTwoPage } from "./pages/StepTwoPage"
import { StepThreePage } from "./pages/StepThreePage"
import { StepFourPage } from "./pages/StepFourPage"
import { StepFivePage } from "./pages/StepFivePage"



function App() {
  return (
    <>

      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Layout>
          <Routes>
            <Route path="/" element={<StepOnePage />} />
            <Route path="/step-two/:slug" element={<StepTwoPage />} />
            <Route path="/step-three/:slug" element={<StepThreePage />} />
            <Route path="/step-four/:slug" element={<StepFourPage />} />
            <Route path="/step-five" element={<StepFivePage />} />
          </Routes>
        </Layout>
      </HashRouter>

      <div className="text-xs text-center md:text-base">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blue-500">Frontend Mentor</a>.
        Coded by <a href="https://github.com/Diego2Drm/multi-step-form" className="text-blue-500">Diego Ramirez</a>.
      </div>
    </>
  )
}

export default App
