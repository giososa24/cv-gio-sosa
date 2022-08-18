import { CollectionType } from './CardContent.types'
import SQLServerLogo from 'assets/images/database/sql-server-logo.png'
import MongoDBLogo from 'assets/images/database/mongodb-logo.png'
import PostgresLogo from 'assets/images/database/postgres-logo.png'

const databasesItems: CollectionType = {
  title: 'Base de datos',
  items: [
    {
      element: PostgresLogo,
      alt: 'postgres-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: MongoDBLogo,
      alt: 'mongodb-logo',
      width: '120px',
      heigth: '120px',
    },
    {
      element: SQLServerLogo,
      alt: 'sql-server-logo',
      width: '110px',
      heigth: '120px',
    },
  ],
}

export default databasesItems
