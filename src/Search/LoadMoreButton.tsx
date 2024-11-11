import { useQuery } from "@apollo/client";
import { Button } from "@mantine/core"
import { GET_PUBLIC_REPOSITORIES } from "../GraphQl/querys";

interface LoadMoreButtonProps {
  searchWord: string;
  setSearchResults: React.Dispatch<React.SetStateAction<string[]>>;
  prevEndCursor: string | null;
  setPrevEndCursor: React.Dispatch<React.SetStateAction<string | null>>;
}

export const LoadMoreButton:React.FC<LoadMoreButtonProps> = ({searchWord, setSearchResults, prevEndCursor, setPrevEndCursor}) => {
  const { loading, error, data } = useQuery(GET_PUBLIC_REPOSITORIES, {
    variables: {searchWord: searchWord, prevCursor: prevEndCursor}
  });
  
  const handleLoadMore = () => {
    if (data) {
      console.log(data);
      setSearchResults((prev) => [...prev, ...data.search.nodes.map((node: any) => node.nameWithOwner)]);
      setPrevEndCursor(data.search.pageInfo.endCursor);
    }    

  }
  return (
    <div>
      <Button onClick={(event) => handleLoadMore()}>Load More</Button>
    </div>
  )
}