import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Step01 from './pages/step1/page'
import Step02 from './pages/step2/page'
import Step03 from './pages/step3/page'
import Step04 from './pages/step4/page'
import Step05 from './pages/step5/page'
import Step06 from './pages/step6/page'
import Step07 from './pages/step7/page'
import Step08 from './pages/step8/page'
import Step09 from './pages/step9/page'
import Step10 from './pages/step10/page'
import Step11 from './pages/step11/page'
import Step12 from './pages/step12/page'
import Step13 from './pages/step13/page'

const AppRouter = () => {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step1" element={<Step01 />} />
          <Route path="/step2" element={<Step02 />} />
          <Route path="/step3" element={<Step03 />} />
          <Route path="/step4" element={<Step04 />} />
          <Route path="/step5" element={<Step05 />} />
          <Route path="/step6" element={<Step06 />} />
          <Route path="/step7" element={<Step07 />} />
          <Route path="/step8" element={<Step08 />} />
          <Route path="/step9" element={<Step09 />} />
          <Route path="/step10" element={<Step10 />} />
          <Route path="/step11" element={<Step11 />} />
          <Route path="/step12" element={<Step12 />} />
          <Route path="/step13" element={<Step13 />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default AppRouter
