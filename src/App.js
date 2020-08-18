import React from "react";
import Title from "./comps/Title";
import UploadFoam from "./comps/UploadFoam";
import ImageGrid from "./comps/ImageGrid";
export const App = () => {
  return (
    <div className="App">
      <Title />
      <UploadFoam />
      <ImageGrid/>
    </div>
  );
};

export default App;
