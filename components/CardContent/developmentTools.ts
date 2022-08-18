import { CollectionType } from './CardContent.types'
import InsominaLogo from 'assets/images/developmentTools/insomnia-logo.png'
import PostmanLogo from 'assets/images/developmentTools/postman-logo.png'
import VSCodeLogo from 'assets/images/developmentTools/visual-studio-code-logo.png'
import VSLogo from 'assets/images/developmentTools/visual-studio-logo.png'

const developmentToolsItems: CollectionType = {
  title: 'Herramientas de desarrollo',
  items: [
    {
      element: InsominaLogo,
      alt: 'insomina-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: PostmanLogo,
      alt: 'postman-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: VSCodeLogo,
      alt: 'vs-code-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: VSLogo,
      alt: 'vs-logo',
      width: '120px',
      heigth: '120px',
    },
  ],
}

export default developmentToolsItems
