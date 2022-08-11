import { DataSource } from 'typeorm'
import { CustomNamingStrategy } from './customNamingStrategy'

// TODO: dbの情報はenvファイルから取ってくる
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

export default source
