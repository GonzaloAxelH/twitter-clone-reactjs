import Home from '../pages/Home'

export const ListRutas = {
  Home: {
    path: '/',
    exact: true,
    Component: () => <Home />
  },
  Notifications: {
    path: '/notifcations',
    exact: false,
    Component: () => <h1>Notificacions</h1>
  }
}
