using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EFDataBase.Migrations
{
    public partial class DataV2_Edit_appUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Orders",
                nullable: false,
                defaultValue: new DateTime(2022, 11, 8, 21, 29, 39, 940, DateTimeKind.Local).AddTicks(3259),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 11, 8, 21, 19, 9, 822, DateTimeKind.Local).AddTicks(1600));

            migrationBuilder.AlterColumn<string>(
                name: "LastName",
                table: "AppUsers",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200);

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "AppUsers",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Orders",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 11, 8, 21, 19, 9, 822, DateTimeKind.Local).AddTicks(1600),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2022, 11, 8, 21, 29, 39, 940, DateTimeKind.Local).AddTicks(3259));

            migrationBuilder.AlterColumn<string>(
                name: "LastName",
                table: "AppUsers",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "AppUsers",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
