import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface SearchResultProps {
  searchResults: string[];
}
export const SearchResult:React.FC<SearchResultProps> = ({searchResults}) => {
  const navigation = useNavigate();

  const handleViewIssues = (repositoryName: string) => {
    navigation('/issues', {state: {repositoryName}});
  }

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults && searchResults.map((result, index) => (
          <li key={index}>
            <Button
              fullWidth
              variant="outline"
              onClick={(event) => handleViewIssues(result)}>
              {result}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}