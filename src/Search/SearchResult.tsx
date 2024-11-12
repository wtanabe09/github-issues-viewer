import { useNavigate } from "react-router-dom";
import { ScrollArea, NavLink } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

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
      <ScrollArea my={'lg'} h={500}>
        {searchResults && searchResults.map((result, index) => (
          <NavLink
            label={result}
            onClick={(event) => handleViewIssues(result)}
            rightSection={
              <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
            }
          />
        ))}
      </ScrollArea>
    </div>
  )
}