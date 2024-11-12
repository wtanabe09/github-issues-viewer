import { useState } from "react";
import { Button, CloseButton, Flex, TextInput } from "@mantine/core";
import { GET_PUBLIC_REPOSITORIES } from "../GraphQl/querys";
import { useQuery } from "@apollo/client";

interface SearchBoxProps {
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<string[]>>;
  setPrevEndCursor: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SearchBox:React.FC<SearchBoxProps> = ({ searchWord, setSearchWord, setSearchResults, setPrevEndCursor }) => {
  const { loading, error, data } = useQuery(GET_PUBLIC_REPOSITORIES, {
    variables: {searchWord: searchWord, prevCursor: null}
  });

  const searchHandler = () => {
    // テストのために、searchReasultsにsearchValueを追加する
    if (!searchWord) return;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message} </p>;
    if (data) {
      setSearchResults(data.search.nodes.map((node: any) => node.nameWithOwner));
      setPrevEndCursor(data.search.pageInfo.endCursor);
    }
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
          value={searchWord}
          onChange={(event) => setSearchWord(event.currentTarget.value)}
          rightSection={
            <CloseButton
              aria-label="Clear search"
              onClick={() => {
                setSearchWord('');
                setSearchResults([]);
                setPrevEndCursor(null);
              }}
              style={{ display: searchWord ? 'block' : 'none' }}
            />
          }
        />
        <Button onClick={() => {searchHandler()}}>Search</Button>
      </Flex>
    </div>
  )
}