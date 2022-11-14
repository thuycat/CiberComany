using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EFDataBase.Migrations
{
    public partial class UpdateUserInfor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Orders",
                nullable: false,
                defaultValue: new DateTime(2022, 11, 14, 22, 26, 47, 63, DateTimeKind.Local).AddTicks(546),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 11, 8, 21, 29, 39, 940, DateTimeKind.Local).AddTicks(3259));

            migrationBuilder.AlterColumn<DateTime>(
                name: "BirthDay",
                table: "AppUsers",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddColumn<string>(
                name: "HomeAdress",
                table: "AppUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HomeAdress",
                table: "AppUsers");

            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Orders",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 11, 8, 21, 29, 39, 940, DateTimeKind.Local).AddTicks(3259),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2022, 11, 14, 22, 26, 47, 63, DateTimeKind.Local).AddTicks(546));

            migrationBuilder.AlterColumn<DateTime>(
                name: "BirthDay",
                table: "AppUsers",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
