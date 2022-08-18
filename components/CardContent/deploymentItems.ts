import { CollectionType } from './CardContent.types'
import GithubLogo from 'assets/images/github-logo.png'
import HerokuLogo from 'assets/images/heroku-logo.png'
import NginxLogo from 'assets/images/nginx-logo.png'
import GALogo from 'assets/images/ga-logo.png'
import DockerLogo from 'assets/images/docker-logo.png'
import VercelLogo from 'assets/images/vercel-logo.png'

const deploymentItems: CollectionType = {
  title: 'Despliegues',
  items: [
    {
      element: GithubLogo,
      alt: 'github-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: HerokuLogo,
      alt: 'heroku-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: NginxLogo,
      alt: 'nginx-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: GALogo,
      alt: 'ga-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: VercelLogo,
      alt: 'vercel-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: DockerLogo,
      alt: 'docker-logo',
      width: '120px',
      heigth: '120px',
    },
  ],
}

export default deploymentItems
