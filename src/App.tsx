import React from "react";
import { Admin, Resource } from "react-admin";
import {
  firebaseAuthProvider as authProvider,
  firebaseDataProvider as dataProvider,
} from "src/config/firebase";

import { product } from "./modules";

const App: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="products" {...product} />
    </Admin>
  );
};

export default App;
