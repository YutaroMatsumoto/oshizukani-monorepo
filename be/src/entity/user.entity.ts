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
import { IsEmail, IsNumber, MaxLength, validate } from 'class-validator'
import { Gender, UserStatus } from 'src/entity/types/UserTableTypes'

@Entity()
export class User {
  /** id */
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number

  // TODO: Googleログイン機能を検討
  /** IDaaSにて作成されたidを登録 */
  // @Column()
  // userId: string

  @Column()
  password: string

  /** IDaaSにて作成されたemailを登録 */
  @Column()
  @IsEmail()
  email: string

  /** 姓 */
  @Column()
  @MaxLength(30)
  lastName: string

  /** 名 */
  @Column()
  @MaxLength(30)
  first_name: string

  /** 性別 */
  /** nullは許可せず、回答なしの場合は'0'とする */
  // TODO: class-validatorのIsEnumを検討する
  @Column({ default: '0' })
  gender: Gender

  /** ユーザーステータス */
  // TODO: class-validatorのIsEnumを検討する
  @Column({ default: '0' })
  userStatus: UserStatus

  /** 新規登録日時 */
  @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
  readonly createdAt: Date

  /** 最終更新日時 */
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
  readonly updatedAt: Date

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }

  // TODO: 動作確認をする
  @BeforeInsert()
  async validateInsert(): Promise<void> {
    for (const error of await validate(this)) {
      if (error.property === 'id') continue
      throw new Error(JSON.stringify(error.constraints))
    }
  }

  @BeforeUpdate()
  async validateUpdate(): Promise<void> {
    for (const error of await validate(this)) {
      throw new Error(JSON.stringify(error.constraints))
    }
  }
}
