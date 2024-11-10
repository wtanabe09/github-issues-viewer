
interface SearchResultProps {
  searchResults: string[];
}
export const SearchResult:React.FC<SearchResultProps> = ({searchResults}) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            {result}
          </li>
        ))}
      </ul>
    </div>
  )
}