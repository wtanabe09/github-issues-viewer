import { useState } from "react";
import { Button, CloseButton, Flex, TextInput } from "@mantine/core";

interface SearchBoxProps {
  searchResults: string[];
  setSearchResults: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchBox:React.FC<SearchBoxProps> = ({ searchResults, setSearchResults}) => {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = () => {
    // テストのために、searchReasultsにsearchValueを追加する
    if (!searchValue) return;
    setSearchResults([...searchResults, searchValue]);
  }

  return (
    <div>
      <Flex
        direction={{ xs: 'row' }}
        gap={{ xs: 'xs' }}
        justify={{ xs: 'center' }}
      >
        <TextInput
          placeholder="Search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
          rightSection={
            <CloseButton
              aria-label="Clear search"
              onClick={() => setSearchValue('')}
              style={{ display: searchValue ? 'block' : 'none' }}
            />
          }
        />
        <Button onClick={() => {searchHandler()}}>
          Search
        </Button>
      </Flex>
    </div>
  )
}