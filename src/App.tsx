import './App.css';
import { em, MantineProvider } from '@mantine/core';
import { SearchBox } from './Search/SearchBox';
import { Search } from './Search/Search';

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
          <Search />
        </main>
      </div>
    </MantineProvider>
  );
}

export default App;
