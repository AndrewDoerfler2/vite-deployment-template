import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/Pages/Landing';
import GitBranchingPage from './Components/Pages/GitBranchingPage';
import TopNavigationBar from './Components/Navigation/TopNavigationBar';
import DataIngestFlowPage from './Components/Pages/DataIngestFlowPage';
import IntegrationProcessPage from './Components/Pages/IntegrationProcessPage';
import OrgChartPage from './Components/Pages/OrgChartPage';
import HelpfulLinksPage from './Components/Pages/HelpfulLinks';
import DomainModelPage from './Components/Pages/DomainModel';
import LoggingPage from './Components/Pages/LoggingPage';
import DeveloperGuidelinesPage from './Components/Pages/DeveloperGuidelinesPage';
function App() {
    
    const baseURL = "vite-deployment-template";

    return (
        <div>
        <TopNavigationBar />
            <BrowserRouter>
                <Routes>
                    <Route path={baseURL+ "/"} element={<LandingPage />} />
                    <Route path={baseURL+"/git-branching"} element={<GitBranchingPage />} />
                    <Route path={baseURL+"/data-ingest-flow"} element={<DataIngestFlowPage />} />
                    <Route path={baseURL+"/integration-process"} element={<IntegrationProcessPage />} />"
                    <Route path={baseURL+"/org-chart"} element={<OrgChartPage />} />
                    <Route path={baseURL+"/helpful-links"} element={<HelpfulLinksPage />} />"
                    <Route path={baseURL+"/domain-model"} element={<DomainModelPage />} />
                    <Route path={baseURL+"/logging-best-practices"} element={<LoggingPage />} />"
                    <Route path={baseURL+"developer-syntax-guidelines"} element={<DeveloperGuidelinesPage />} />"
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;