import React from "react";
import { GlobalStyle as Wrapper } from "./app/components/styles/App.style";
import { Container } from "./app/components/styles/Container.style";
import SideNav from "./app/components/ui/molecules/SideNav";
import Main from "./app/components/ui/organisms/Main";
import StoreProvider from "./app/context/store";

function App() {
  return (
    <StoreProvider>
      <Wrapper />
      <Container>
        <SideNav  />
        <Main />
      </Container>
    </StoreProvider>
  );
}

export default App;
