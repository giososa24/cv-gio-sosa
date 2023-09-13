import { CollectionType } from './CardContent.types'
import SQLServerLogo from 'assets/images/database/sql-server-logo.png'
import MongoDBLogo from 'assets/images/database/mongodb-logo.png'
import PostgresLogo from 'assets/images/database/postgres-logo.png'

const databasesItems: CollectionType = {
  title: 'Base de datos',
  keyDescription: 'database-description',
  items: [
    {
      element: PostgresLogo,
      alt: 'postgres-logo',
      width: 120,
      heigth: 120,
    },
    {
      element: MongoDBLogo,
      alt: 'mongodb-logo',
      width: 120,
      heigth: 120,
    },
    {
      element: SQLServerLogo,
      alt: 'sql-server-logo',
      width: 110,
      heigth: 120,
    },
  ],
}

export default databasesItems
