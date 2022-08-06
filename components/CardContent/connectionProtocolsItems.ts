import { CollectionType } from './CardContent.types'
import SocketIoLogo from 'assets/images/socketio-logo.png'
import GraphqlLogo from 'assets/images/graphql-logo.png'
import SignalRLogo from 'assets/images/signalr-logo.png'
import ApiRestLogo from 'assets/images/api-rest-logo.png'

const connectionProtocolsItems: CollectionType = {
  title: 'Protocolos de conexión',
  items: [
    {
      element: GraphqlLogo,
      alt: 'graphql-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: ApiRestLogo,
      alt: 'api-rest-logo',
      width: '140px',
      heigth: '100px',
    },
    {
      element: SocketIoLogo,
      alt: 'socket-io-logo',
      width: '100px',
      heigth: '110px',
    },
    {
      element: SignalRLogo,
      alt: 'signalr-logo',
      width: '120px',
      heigth: '60px',
    },
  ],
}

export default connectionProtocolsItems
