import { Datagrid, List, ListProps, TextField } from "react-admin";
import React from "react";

const ProductList: React.FC<ListProps> = ({ ...props }) => {
  return (
    <List perPage={20} sort={{ field: "reference", order: "ASC" }} {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
      </Datagrid>
    </List>
  );
};

export default ProductList;
