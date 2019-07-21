import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Init1563738594987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "tool",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true
          },
          {
            name: "title",
            type: "varchar"
          },
          {
            name: "description",
            type: "varchar"
          },
          {
            name: "link",
            type: "varchar"
          },
          {
            name: "description",
            type: "text"
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("tool");
  }
}
