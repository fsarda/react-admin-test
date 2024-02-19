import {
  Create,
  Datagrid,
  Edit,
  List,
  NumberField,
  NumberInput,
  SimpleForm,
  TextField,
  TextInput
} from 'react-admin';

export const DeviceList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="imei" />
      <TextField source="model" />
      <TextField source="color" />
      <NumberField source="price" />
    </Datagrid>
  </List>
);

export const DeviceEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="imei" InputProps={{ disabled: true }} />
      <TextInput source="model" />
      <TextInput source="color" />
      <NumberInput source="price" />
    </SimpleForm>
  </Edit>
);

export const DeviceCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="imei" />
      <TextInput source="model" />
      <TextInput source="color" />
      <NumberInput source="price" />
    </SimpleForm>
  </Create>
);
