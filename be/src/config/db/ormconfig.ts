import { DataSource } from 'typeorm'
import { CustomNamingStrategy } from './customNamingStrategy'

const source = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'oshizukani-dev',
  entities: ['src/entity/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  synchronize: true, // TODO: 本番環境では推奨されていないため、環境によって分ける
  namingStrategy: new CustomNamingStrategy(),
})

export default source

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: '127.0.0.1',
//       port: 5432,
//       username: 'postgres',
//       password: 'postgres',
//       database: 'oshizukani-dev',
//       entities: ['src/entity/*.ts'],
//       migrations: ['src/migration/**/*.ts'],
//       synchronize: true, // TODO: 本番環境では推奨されていないため、環境によって分ける
//       namingStrategy: new CustomNamingStrategy(),
//     }),
//   ],
//   controllers: ['src/controller/**/*.ts'],
//   providers: [AppService],
// })
// export class AppModule {
//   constructor(private dataSource: DataSource) {}
// }
