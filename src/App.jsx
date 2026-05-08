import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop.jsx";
import Layout from "@/components/Layout.jsx";
import HomePage from "@/pages/HomePage.jsx";
import AboutPage from "@/pages/AboutPage.jsx";
import ServicesPage from "@/pages/ServicesPage.jsx";
import ProcessPage from "@/pages/ProcessPage.jsx";
import FeesPage from "@/pages/FeesPage.jsx";
import FaqPage from "@/pages/FaqPage.jsx";
import LinksPage from "@/pages/LinksPage.jsx";
import ContactPage from "@/pages/ContactPage.jsx";
import TermsPage from "@/pages/TermsPage.jsx";
import NotFound from "@/pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/fees" element={<FeesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
