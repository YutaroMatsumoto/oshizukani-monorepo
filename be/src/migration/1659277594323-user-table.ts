import { MigrationInterface, QueryRunner } from "typeorm";

export class userTable1659277594323 implements MigrationInterface {
    name = 'userTable1659277594323'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "last_name" character varying NOT NULL, "first_name" character varying NOT NULL, "gender" character varying NOT NULL DEFAULT '0', "user_status" character varying NOT NULL DEFAULT '0', "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
