import './App.css';
import { em, MantineProvider } from '@mantine/core';
import { Search } from './Search/Search';
import { Route, Routes } from 'react-router-dom';
import { Issues } from './Issues/Issues';
import { ApolloProvider } from '@apollo/client';
import { client } from './GraphQl/client';

const theme = {
  colorScheme: 'light',
  primaryColor: 'blue',
  breakpoints: {
    xs: em(375),
  }
};

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          Github Issues Viewer
        </header>
        <main>
          <ApolloProvider client={client}>
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/issues" element={<Issues />} />
            </Routes>
          </ApolloProvider>
        </main>
      </div>
    </MantineProvider>
  );
}

export default App;
