import * as pluralize from 'pluralize'
import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm'
import { snakeCase } from 'typeorm/util/StringUtils'

export class CustomNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  // NOTE: 以下のコメントアウトを外すと、複数形のテーブル名になる
  // tableName(targetName: string, userSpecifiedName: string): string {
  //   return userSpecifiedName
  //     ? userSpecifiedName
  //     : pluralize.plural(snakeCase(targetName));
  // }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[]
  ): string {
    return customName ? customName : snakeCase(propertyName)
  }

  joinColumnName(relationName: string, referencedColumnName: string) {
    return snakeCase(
      pluralize.singular(relationName) + '_' + referencedColumnName
    )
  }

  joinTableName(
    firstTableName: string,
    secondTableName: string,
    firstPropertyName: string,
    secondPropertyName: string
  ) {
    return snakeCase(firstTableName + '_' + secondTableName)
  }

  joinTableColumnName(
    tableName: string,
    propertyName: string,
    columnName: string
  ) {
    return snakeCase(
      pluralize.singular(tableName) + '_' + (columnName || propertyName)
    )
  }
}
