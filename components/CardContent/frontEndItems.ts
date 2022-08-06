import { CollectionType } from './CardContent.types'
import ReactLogo from 'assets/images/react-logo.png'
import AngularLogo from 'assets/images/angular-logo.png'
import ReactNativeLogo from 'assets/images/react-native-logo.png'
import NextJsLogo from 'assets/images/nextjs-logo.png'

const frontEndItems: CollectionType = {
  title: 'Frontend',
  items: [
    {
      element: ReactLogo,
      alt: 'react-logo',
      width: '150px',
      heigth: '120px',
    },
    {
      element: ReactNativeLogo,
      alt: 'react-native-logo',
      width: '90px',
      heigth: '90px',
    },
    {
      element: NextJsLogo,
      alt: 'nextjs-logo',
      width: '125px',
      heigth: '125px',
    },
    {
      element: AngularLogo,
      alt: 'angular-logo',
      width: '80px',
      heigth: '80px',
    },
  ],
}

export default frontEndItems
