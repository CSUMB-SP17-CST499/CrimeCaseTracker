library(RMySQL)
library(dbConnect)
library(ggplot2)
library(ggmap)
library(dplyr)
library(tidyr)
library(maps)


#loading the database
dbConn = dbConnect(MySQL(), 
                   user='crimecasetracker', 
                   password='csumbletmein1234', 
                   dbname='crimecasedb', 
                   host='rds-mysql-cct.cramx5hfqqwd.us-west-1.rds.amazonaws.com',
                   port=3306)

dbListTables(dbConn)

######################################################
#function that will process google's server responses for us
getGeoInfo = function(address){   
  #geocode function queries google servers
  geo_reply = geocode(address, output="all", messaging=TRUE, override_limit = TRUE)
  
  #extract bits that we need from the returned list
  answer = data.frame(lat=NA, long=NA, accuracy=NA, formmated_address=NA, address_type=NA, status=NA)
  answer$status = geo_reply$status
  
  #while(geo_reply$status == "OVER_QUERY_LIMIT"){
   # print("OVER QUERY LIMIT: Pausing for 10 minutes")
    #time = Sys.time()
    #print(as.character(time))
    #Sys.sleep(60*10)
    #geo_reply = geocode(address, output="all", messaging=TRUE, override_limit = TRUE)
    #answer$status = geo_reply$status
  #}
  
  #NAs return if a match is not successful
  if (geo_reply$status != "OK"){
    return(answer)
  }
  #extracts latitude and longitude from server reply, stores in data frame
  answer$lat = geo_reply$results[[1]]$geometry$location$lat
  answer$long = geo_reply$results[[1]]$geometry$location$long
  
  if (length(geo_reply$results[[1]]$types > 0)){
    answer$accuracy = geo_reply$results[[1]]$types[[1]]
  }
  
  answer$address_type = paste(geo_reply$results[[1]]$types, collapse=',')
  answer$address_format = geo_reply$results[[1]]$address_format
  
  return(answer)
}