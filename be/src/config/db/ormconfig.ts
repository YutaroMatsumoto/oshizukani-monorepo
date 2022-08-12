import { DataSource } from 'typeorm'
import { CustomNamingStrategy } from './customNamingStrategy'

// TODO: srcもしくはdist直下どちらも見れるようにする？
const source = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'oshizukani-dev',
  entities: ['src/entity/*.{js,ts}'],
  migrations: ['src/migration/**/*.{js,ts}'],
  synchronize: true, // TODO: 本番環境では推奨されていないため、環境によって分ける
  namingStrategy: new CustomNamingStrategy(),
})

// TODO: dbの情報はenvファイルから取ってくる。以下の設定にしたいがなぜかうまくいかない。envファイル読み込めてなさそう？
// const source = new DataSource({
//   type: 'postgres',
//   host: process.env.DATABASE_HOST,
//   port: 5432,
//   // database: 'oshizukani-dev',
//   // username: 'postgres',
//   // password: 'postgres',
//   database: process.env.DATABASE_NAME,
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   entities: ['src/entity/*.{js,ts}'],
//   migrations: ['src/migration/**/*.{js,ts}'],
//   synchronize: process.env.NODE_ENV === 'development',
//   namingStrategy: new CustomNamingStrategy(),
// })

export default source
