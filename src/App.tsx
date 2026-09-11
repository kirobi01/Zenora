import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { Work } from './pages/Work'
import { CaseStudy } from './pages/CaseStudy'
import { Industries } from './pages/Industries'
import { IndustryDetail } from './pages/IndustryDetail'
import { Process } from './pages/Process'
import { Insights } from './pages/Insights'
import { InsightArticle } from './pages/InsightArticle'
import { Careers } from './pages/Careers'
import { CareerDetail } from './pages/CareerDetail'
import { Contact } from './pages/Contact'
import { Privacy, Terms } from './pages/Legal'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/harvestlink-cooperative" element={<Navigate to="/work" replace />} />
          <Route path="/work/cereals-cooperative-union" element={<Navigate to="/work" replace />} />
          <Route path="/work/countyfarm-public-extension" element={<Navigate to="/work" replace />} />
          <Route path="/work/helios-hospital-system" element={<Navigate to="/work" replace />} />
          <Route path="/work/atlas-b2b-commerce" element={<Navigate to="/work/criss-cross-fmcg" replace />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/process" element={<Process />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<CareerDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
