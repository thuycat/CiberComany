using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace EFDataBase.EF
{
    public class CyberSolutionDBContextFactory : IDesignTimeDbContextFactory<CyBerDBContext>
    {
        public CyBerDBContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
            var _connectionString = configuration.GetConnectionString("SqlConnectionString");
            var optionBuilder = new DbContextOptionsBuilder<CyBerDBContext>();
            optionBuilder.UseSqlServer(_connectionString);
            return new CyBerDBContext(optionBuilder.Options);
        }
    }
}
