import { Aside, MainContent } from "./components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
};

body {
  background-color: #f5f5f5;
};

.flex {
  display: flex;
}

@media (max-width: 768px) {
  
}

`;

function App() {
  return (
    <div className="flex">
      <Aside />
      <MainContent />
      <GlobalStyle />
    </div>
  );
}

export default App;
