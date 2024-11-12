import { ScrollArea, NavLink } from "@mantine/core";
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
      <ScrollArea h={500}>
        <ul>
          {searchResults && searchResults.map((result, index) => (
            <li key={index}>
              <NavLink label={result} onClick={(event) => handleViewIssues(result)} />
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}