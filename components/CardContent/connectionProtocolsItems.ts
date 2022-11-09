import { CollectionType } from './CardContent.types'
import SocketIoLogo from 'assets/images/connectionProtocol/socketio-logo.png'
import GraphqlLogo from 'assets/images/connectionProtocol/graphql-logo.png'
import SignalRLogo from 'assets/images/connectionProtocol/signalr-logo.png'
import ApiRestLogo from 'assets/images/connectionProtocol/api-rest-logo.png'

const connectionProtocolsItems: CollectionType = {
  title: 'Protocolos de conexión',
  keyDescription: 'connection-protocol-description',
  items: [
    {
      element: GraphqlLogo,
      alt: 'graphql-logo',
      width: 120,
      heigth: 120,
    },
    {
      element: ApiRestLogo,
      alt: 'api-rest-logo',
      width: 140,
      heigth: 100,
    },
    {
      element: SocketIoLogo,
      alt: 'socket-io-logo',
      width: 100,
      heigth: 110,
    },
    {
      element: SignalRLogo,
      alt: 'signalr-logo',
      width: 120,
      heigth: 60,
    },
  ],
}

export default connectionProtocolsItems
