library(RMySQL)
library(dbConnect)

dbConn = dbConnect(MySQL(), user='crimecasetracker', password='csumbletmein1234', dbname='crimecasedb', host='rds-mysql-cct.cramx5hfqqwd.us-west-1.rds.amazonaws.com',port=3306)
dbListTables(dbConn)

myQuery = "SELECT * from `case`;"
dat = dbGetQuery(dbConn, myQuery)
data.frame(dat)

summary(dat)

tab = table(dat$location)
tab

barplot(tab, horiz=TRUE)