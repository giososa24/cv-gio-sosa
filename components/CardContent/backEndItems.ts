import { CollectionType } from './CardContent.types'
import CSharpLogo from 'assets/images/csharp-logo.png'
import NetCoreLogo from 'assets/images/net-core-logo.png'
import NodeJSLogo from 'assets/images/node-js-logo.png'
import NestJSLogo from 'assets/images/nest-js-logo.png'
import TSLogo from 'assets/images/ts-logo.png'

const backEndItems: CollectionType = {
  title: 'Backend',
  items: [
    {
      element: CSharpLogo,
      alt: 'c#-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: NetCoreLogo,
      alt: 'net-core-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: NodeJSLogo,
      alt: 'node-js-logo',
      width: '110px',
      heigth: '120px',
    },
    {
      element: NestJSLogo,
      alt: 'nest-js-logo',
      width: '110px',
      heigth: '120px',
    },
    {
      element: TSLogo,
      alt: 'ts-logo',
      width: '110px',
      heigth: '120px',
    },
  ],
}

export default backEndItems
