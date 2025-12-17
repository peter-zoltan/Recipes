import './App.css'
import Search from "./search/Search.tsx";
import RecipeList from "./recipe/RecipeList.tsx";
import Container from 'react-bootstrap/Container';

function App() {

  return (
      <Container className="d-flex justify-content-center align-items-center flex-column">
          <Search />
          <RecipeList />
      </Container>
  );
}

export default App
