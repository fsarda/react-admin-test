import {
  BusinessCenter,
  MobileFriendlyRounded,
  Person2Rounded,
  AppSettingsAlt,
  Engineering
} from '@mui/icons-material';
import {
  Admin,
  AppBar,
  AppBarProps,
  EditGuesser,
  Layout,
  LayoutProps,
  ListGuesser,
  Resource,
  Sidebar,
  SidebarProps
} from 'react-admin';
import { authProvider } from './authProvider';
import { BrandCreate, BrandEdit, BrandList } from './brand';
import { ClientCreate, ClientEdit, ClientList } from './client';
import { dataProvider } from './dataProvider';
import { DeviceCreate, DeviceEdit, DeviceList } from './device';
import { ModelCreate, ModelEdit, ModelList } from './model';
import { ProviderCreate, ProviderEdit, ProviderList } from './provider';
import { JSX } from 'react/jsx-runtime';
import { theme } from './theme/light-theme';
import { darkTheme } from './theme/dark-theme';
import { Box } from '@mui/material';

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={MyLayout}
    darkTheme={darkTheme}
    theme={theme}
  >
    <Resource
      options={{ label: 'Operaciones' }}
      name="operation_device"
      list={DeviceList}
      edit={DeviceEdit}
      create={DeviceCreate}
      icon={Engineering}
    />
    <Resource
      options={{ label: 'Inventario' }}
      name="device"
      list={DeviceList}
      edit={DeviceEdit}
      create={DeviceCreate}
      icon={MobileFriendlyRounded}
    />
    <Resource
      options={{ label: 'Clientes' }}
      name="client"
      list={ClientList}
      edit={ClientEdit}
      create={ClientCreate}
      icon={Person2Rounded}
    />
    <Resource
      options={{ label: 'Proveedores' }}
      name="provider"
      create={ProviderCreate}
      edit={ProviderEdit}
      list={ProviderList}
      icon={BusinessCenter}
    />
    <Resource
      options={{ label: 'Marcas' }}
      name="brand"
      list={BrandList}
      edit={BrandEdit}
      create={BrandCreate}
      icon={AppSettingsAlt}
      recordRepresentation={'name'}
    />
    <Resource
      options={{ label: 'Modelos' }}
      name="model"
      list={ModelList}
      edit={ModelEdit}
      create={ModelCreate}
      icon={AppSettingsAlt}
      recordRepresentation={'name'}
    />
    <Resource
      options={{ label: 'Tipo de dispositivo' }}
      name="device_type"
      list={ListGuesser}
      edit={EditGuesser}
      create={DeviceCreate}
      icon={AppSettingsAlt}
    />
    <Resource
      options={{ label: 'Tipo de operaciones' }}
      name="operation_type"
      list={ListGuesser}
      edit={EditGuesser}
      create={DeviceCreate}
      icon={AppSettingsAlt}
    />
  </Admin>
);

const MyLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => (
  <Layout {...props} sidebar={MySidebar} appBar={MyAppBar} />
);
const MySidebar = (props: JSX.IntrinsicAttributes & SidebarProps) => (
  <Sidebar
    {...props}
    sx={{ background: (theme) => theme.palette.secondary.light }}
  />
);
const MyAppBar = (props: JSX.IntrinsicAttributes & AppBarProps) => (
  <AppBar {...props}>
    <Box
      flex={1}
      justifySelf={'center'}
      sx={{
        background: 'url(./images.jpeg) no-repeat',
        backgroundSize: 'contain',
        height: '60px'
      }}
    ></Box>
  </AppBar>
);
