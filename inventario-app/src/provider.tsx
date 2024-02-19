import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  SimpleForm,
  required,
  Create,
  TextInput,
  Edit
} from 'react-admin';

export const ProviderList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <UrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

export const ProviderCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <TextInput source="username" />
      <TextInput source="email" InputProps={{ type: 'email' }} />
      <TextInput source="address.street" />
      <TextInput source="phone" />
      <TextInput source="website" InputProps={{ type: 'url' }} />
      <TextInput source="company.name" />
    </SimpleForm>
  </Create>
);

export const ProviderEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <TextInput source="username" />
      <TextInput source="email" InputProps={{ type: 'email' }} />
      <TextInput source="address.street" />
      <TextInput source="phone" />
      <TextInput source="website" InputProps={{ type: 'url' }} />
      <TextInput source="company.name" />
    </SimpleForm>
  </Edit>
);
