import { CollectionType } from './CardContent.types'
import InsominaLogo from 'assets/images/developmentTools/insomnia-logo.png'
import PostmanLogo from 'assets/images/developmentTools/postman-logo.png'
import VSCodeLogo from 'assets/images/developmentTools/visual-studio-code-logo.png'
import VSLogo from 'assets/images/developmentTools/visual-studio-logo.png'

const developmentToolsItems: CollectionType = {
  title: 'Herramientas de desarrollo',
  keyDescription: 'development-tools-description',
  items: [
    {
      element: InsominaLogo,
      alt: 'insomina-logo',
      width: 120,
      heigth: 120,
    },
    {
      element: PostmanLogo,
      alt: 'postman-logo',
      width: 120,
      heigth: 120,
    },
    {
      element: VSCodeLogo,
      alt: 'vs-code-logo',
      width: 120,
      heigth: 120,
    },
    {
      element: VSLogo,
      alt: 'vs-logo',
      width: 120,
      heigth: 120,
    },
  ],
}

export default developmentToolsItems
