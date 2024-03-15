import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // this is a code that is only to donwload the fetch the data .
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
const queryClient = new QueryClient(); // same as above
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {' '}
      {/* same as above */}
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Starred" element={<Starred />} />
          </Route>
          <Route path="/Show/:ShowId" element={<Show />} />
          {/* this is the dynamic route to add new id */}

          <Route path="*" element={<div>not found </div>} />
          {/* all route conencting ot project */}
          {/* this is all layouts too that can be shared accross pages */}

          {/* <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
        </Route>
        <Route path="contact-us" element={<Contact />} />*/}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
