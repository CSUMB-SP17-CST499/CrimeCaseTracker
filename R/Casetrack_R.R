library(RMySQL)
library(dbConnect)
library(ggplot2)
library(ggmap)
library(dplyr)
library(tidyr)
library(maps)
library(lattice)

setwd("C:/Users/Chris/Desktop/School/Spring2017/Capstone/CrimeCaseTracker/R")

#loading the database
dbConn = dbConnect(MySQL(), 
                   user='crimecasetracker', 
                   password='csumbletmein1234', 
                   dbname='crimecasedb', 
                   host='rds-mysql-cct.cramx5hfqqwd.us-west-1.rds.amazonaws.com',
                   port=3306)

dbListTables(dbConn)

######################################################
