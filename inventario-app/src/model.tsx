import {
  Create,
  Datagrid,
  Edit,
  List,
  ReferenceField,
  ReferenceInput,
  SimpleForm,
  TextField,
  TextInput
} from 'react-admin';

export const ModelList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField reference="brand" source="id" />
    </Datagrid>
  </List>
);

export const ModelEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="name" />
      <ReferenceInput reference="brand" source="id" />
    </SimpleForm>
  </Edit>
);

export const ModelCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput reference="brand" source="brand_id" />
    </SimpleForm>
  </Create>
);
