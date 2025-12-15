import './App.css'
import Search from "./search/Search.tsx";
import RecipeListItem from "./recipe/RecipeListItem.tsx";
import Container from 'react-bootstrap/Container';

function App() {

  return (
      <Container className="d-flex justify-content-center align-items-center flex-column">
          <Search />
          <RecipeListItem />
      </Container>
  );
}

export default App
