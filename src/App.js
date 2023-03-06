import Header from "./Components/Header";
import LowerHeader from "./Components/LowerHeader";
import Content from "./Components/Content";
import Filter from "./Components/FilterContent";
import styled from "styled-components";



function App() {
  return (
    <Container>

      <Header />
      <LowerHeader />
      <Content />
      <Filter />

    </Container>
      

  );
}

export default App;

const Container = styled.div`
  background-color: red;
    
`
