import { useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResult } from "./SearchResult";
import { LoadMoreButton } from "./LoadMoreButton";
import { Container } from "@mantine/core";

export const Search:React.FC = () => {
  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [prevEndCursor, setPrevEndCursor] = useState<string | null>(null);

  return (
    <Container my={'xl'}>
      <SearchBox searchWord={searchWord} setSearchWord={setSearchWord} setSearchResults={setSearchResults} setPrevEndCursor={setPrevEndCursor} />
      <SearchResult searchResults={searchResults} />
      {prevEndCursor &&
        <LoadMoreButton searchWord={searchWord} setSearchResults={setSearchResults} prevEndCursor={prevEndCursor} setPrevEndCursor={setPrevEndCursor} />
      }
    </Container>
  )
}