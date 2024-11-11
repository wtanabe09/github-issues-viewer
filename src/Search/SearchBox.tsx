import { useState } from "react";
import { Button, CloseButton, Flex, TextInput } from "@mantine/core";
import { GET_PUBLIC_REPOSITORIES } from "../GraphQl/querys";
import { useQuery } from "@apollo/client";

interface SearchBoxProps {
  setSearchResults: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchBox:React.FC<SearchBoxProps> = ({ setSearchResults }) => {
  const [searchValue, setSearchValue] = useState('');
  const { loading, error, data } = useQuery(GET_PUBLIC_REPOSITORIES, {
    variables: {searchWord: searchValue}
  });

  const searchHandler = () => {
    // テストのために、searchReasultsにsearchValueを追加する
    if (!searchValue) return;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message} </p>;
    if (data) {
      setSearchResults(data.search.nodes.map((node: any) => node.nameWithOwner));
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
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
          rightSection={
            <CloseButton
              aria-label="Clear search"
              onClick={() => {
                setSearchValue('');
                setSearchResults([]);
              }}
              style={{ display: searchValue ? 'block' : 'none' }}
            />
          }
        />
        <Button onClick={() => {searchHandler()}}>Search</Button>
      </Flex>
    </div>
  )
}