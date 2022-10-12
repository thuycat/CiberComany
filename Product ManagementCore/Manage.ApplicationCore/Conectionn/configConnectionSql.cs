using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Manage.ApplicationCore.Conectionn
{
    public class configConnectionSql
    {
 

        public static IDbConnection GetDbConnection(string connectionString)
        {
            IDbConnection connection = new SqlConnection(connectionString);
            connection.Open();
            return connection;
        }
    }
}
