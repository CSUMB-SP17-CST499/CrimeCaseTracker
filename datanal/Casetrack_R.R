library(RMySQL)
library(dbConnect)

dbConn = dbConnect(MySQL(), user='crimecasetracker', password='csumbletmein1234', dbname='crimecasedb', host='rds-mysql-cct.cramx5hfqqwd.us-west-1.rds.amazonaws.com',port=3306)
dbListTables(dbConn)

myQuery = "select * from Casetrack;"
dat = dbGetQuery(dbConn, myQuery)
data.frame(dat)

