import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BinnenschilderwerkPage } from './pages/BinnenschilderwerkPage';
import { HoutrotSaneringPage } from './pages/HoutrotSaneringPage';
import { BehangenPage } from './pages/BehangenPage';
import { LakwerkPage } from './pages/LakwerkPage';
import { LatexSpuitenPage } from './pages/LatexSpuitenPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { WaaromOnsPage } from './pages/WaaromOnsPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { BlogPostDetailPage } from './pages/BlogPostDetailPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { OverOnsPage } from './pages/OverOnsPage';
import { ProjectDetailsProvider } from './contexts/ProjectDetailsContext';
import { BlogPostProvider } from './contexts/BlogPostContext';
import { BlogProvider } from './contexts/BlogContext'
import { ProjectProvider } from './contexts/ProjectContext'

function App() {
  return (
    <BlogProvider>
      <BlogPostProvider>
        <ProjectProvider>
          <ProjectDetailsProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/diensten/binnenschilderwerk" element={<BinnenschilderwerkPage />} />
              <Route path="/diensten/houtrot-sanering" element={<HoutrotSaneringPage />} />
              <Route path="/diensten/behangen" element={<BehangenPage />} />
              <Route path="/diensten/lakwerk" element={<LakwerkPage />} />
              <Route path="/diensten/latex-spuiten" element={<LatexSpuitenPage />} />
              <Route path="/projecten" element={<ProjectsPage />} />
              <Route path="/projecten/:id" element={<ProjectDetailPage />} />
              <Route path="/waarom-ons" element={<WaaromOnsPage />} />
              <Route path="/over-ons" element={<OverOnsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/blog/verf/:slug" element={<BlogPostDetailPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/algemene-voorwaarden" element={<TermsPage />} />
            </Routes>
          </ProjectDetailsProvider>
        </ProjectProvider>
      </BlogPostProvider>
    </BlogProvider>
  );
}

export default App;