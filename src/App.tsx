import './App.css'
import SearchBar from "./search/SearchBar.tsx";
import RecipeListItem from "./recipe/RecipeListItem.tsx";
import Container from 'react-bootstrap/Container';

function App() {

  return (
      <Container className="d-flex justify-content-center align-items-center flex-column">
          <SearchBar/>
          <RecipeListItem />
      </Container>
  );
}

export default App
