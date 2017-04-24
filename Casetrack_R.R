library(RMySQL)
library(dbConnect)
library(ggplot2)
library(dplyr)

#loading the database
dbConn = dbConnect(MySQL(), 
                   user='crimecasetracker', 
                   password='csumbletmein1234', 
                   dbname='crimecasedb', 
                   host='rds-mysql-cct.cramx5hfqqwd.us-west-1.rds.amazonaws.com',
                   port=3306)

dbListTables(dbConn)

