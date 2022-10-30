import { Field, HideField, ID, ObjectType } from '@nestjs/graphql'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm'
import * as bcrypt from 'bcrypt'
import { IsEmail, IsEnum, IsNumber, MaxLength, validate } from 'class-validator'
import { UserStatus } from './types/UserTableTypes'

// NOTE: BaseUserは、password等を含まない形式（dtoとして別ファイルに記述するか検討）
// NOTE: そもそもBaseUSerとして分ける必要あるのか？
// @ObjectType()
// export class BaseUser {
//   @PrimaryGeneratedColumn()
//   @IsNumber()
//   @Field(() => ID)
//   id: number

//   /** NOTE: IDaaSにて作成されたemailを登録（今後IDaaSを利用した場合） */
//   @Column()
//   @IsEmail()
//   @Field()
//   email: string

//   /** 姓 */
//   @Column()
//   @MaxLength(30)
//   @Field()
//   lastName: string

//   /** 名 */
//   @Column()
//   @MaxLength(30)
//   @Field()
//   firstName: string
// }

@Entity()
@ObjectType()
export class User {
  // TODO: Googleログイン機能を検討
  /** IDaaSにて作成されたidを登録 */
  // @Column()
  // userId: string

  @PrimaryGeneratedColumn()
  @IsNumber()
  @Field(() => ID)
  id: number

  /** NOTE: IDaaSにて作成されたemailを登録（今後IDaaSを利用した場合） */
  @Column()
  @IsEmail()
  @Field()
  email: string

  /** 姓 */
  @Column()
  @MaxLength(30)
  @Field()
  lastName: string

  /** 名 */
  @Column()
  @MaxLength(30)
  @Field()
  firstName: string

  /** パスワード */
  @Column()
  @Field()
  password: string

  /** ユーザーステータス */
  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.INACTIVE })
  @Field(() => UserStatus)
  @IsEnum(UserStatus)
  userStatus: UserStatus

  /** 新規登録日時 */
  @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
  @HideField()
  readonly createdAt: Date

  /** 最終更新日時 */
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
  @HideField()
  readonly updatedAt: Date

  @BeforeInsert()
  @HideField()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }

  // TODO: 動作確認をする
  @BeforeInsert()
  @HideField()
  async validateInsert(): Promise<void> {
    for (const error of await validate(this)) {
      if (error.property === 'id') continue
      throw new Error(JSON.stringify(error.constraints))
    }
  }

  @BeforeUpdate()
  @HideField()
  async validateUpdate(): Promise<void> {
    for (const error of await validate(this)) {
      throw new Error(JSON.stringify(error.constraints))
    }
  }
}
