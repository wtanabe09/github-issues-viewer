import { useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResult } from "./SearchResult";

export const Search:React.FC = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  return (
    <div>
      <SearchBox setSearchResults={setSearchResults} />
      <SearchResult searchResults={searchResults} />
    </div>
  )
}