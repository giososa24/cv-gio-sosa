import { CollectionType } from './CardContent.types'
import CSharpLogo from 'assets/images/backend/csharp-logo.png'
import NetCoreLogo from 'assets/images/backend/net-core-logo.png'
import NodeJSLogo from 'assets/images/backend/node-js-logo.png'
import NestJSLogo from 'assets/images/backend/nest-js-logo.png'
import TSLogo from 'assets/images/backend/ts-logo.png'
import JWTLogo from 'assets/images/backend/jwt-logo.png'
import KeycloakLogo from 'assets/images/backend/keycloak-logo.png'

const backEndItems: CollectionType = {
  title: 'Backend',
  keyDescription: 'back-end-description',
  items: [
    {
      element: CSharpLogo,
      alt: 'c#-logo',
      width: 120,
      heigth: 120,
    },
    {
      element: NetCoreLogo,
      alt: 'net-core-logo',
      width: 120,
      heigth: 120,
    },
    {
      element: NodeJSLogo,
      alt: 'node-js-logo',
      width: 110,
      heigth: 120,
    },
    {
      element: NestJSLogo,
      alt: 'nest-js-logo',
      width: 110,
      heigth: 120,
    },
    {
      element: TSLogo,
      alt: 'ts-logo',
      width: 110,
      heigth: 120,
    },
    {
      element: JWTLogo,
      alt: 'jwt-logo',
      width: 110,
      heigth: 120,
    },
    {
      element: KeycloakLogo,
      alt: 'keycloack-logo',
      width: 110,
      heigth: 120,
    },
  ],
}

export default backEndItems
