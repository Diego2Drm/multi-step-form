import { Layout } from "./Layou"
import { HashRouter, Routes, Route } from "react-router-dom"
import { StepOnePage } from "./pages/StepOnePage"
import { StepTwoPage } from "./pages/StepTwoPage"
import { StepThreePage } from "./pages/StepThreePage"
import { StepFourPage } from "./pages/StepFourPage"
import { StepFivePage } from "./pages/StepFivePage"



function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<StepOnePage />} />
          <Route path="/step-two" element={<StepTwoPage />} />
          <Route path="/step-three" element={<StepThreePage />} />
          <Route path="/step-four" element={<StepFourPage />} />
          <Route path="/step-five" element={<StepFivePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
