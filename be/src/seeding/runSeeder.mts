import { runSeeders } from 'typeorm-extension'
import dataSource from 'src/config/db/ormconfig'

;(async () => {
  await dataSource.initialize()

  runSeeders(dataSource, {
    seeds: ['src/seeding/seeds/**/*{.ts,.js}'],
    factories: ['src/seeding/factories/**/*{.ts,.js}'],
  })
})()
