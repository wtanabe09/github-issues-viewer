import './App.css';
import { em, MantineProvider, Title } from '@mantine/core';
import { ApolloProvider } from '@apollo/client';
import { client } from './GraphQl/client';
import { Route, Routes } from 'react-router-dom';
import { Search } from './Search/Search';
import { Issues } from './Issues/Issues';

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
          <Title mx={'sm'} order={1}>Github Issues Viewer</Title>
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
