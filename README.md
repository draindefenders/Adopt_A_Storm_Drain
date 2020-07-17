# Adopt a Storm Drain

#### **About the project:**
Adopt-a-StormDrain is a public facing web-based mapping
application with basic task management features.
It allows individuals or groups to claim ownership over 
neighborhood storm drains, as well as provide designated 
public departments with a basic notification system to 
respond to citizen concerns related to their adopted storm drains.

Read more at https://trello.com/b/MnlSujIZ/adopt-a-storm-drain-timeline

#### **Technical Info:**
Suggested IDEs:
Intellij community edition: <br />https://www.jetbrains.com/idea/download/#section=windows<br />
SpringSource Tool Suite: <br />https://spring.io/tools

If you are new to Spring Boot, maven and MVC here are some helpful
links to get started.<br />

https://spring.io<br />
https://www.youtube.com/watch?v=msXL2oDexqw&list=PLqq-6Pq4lTTbx8p2oCgcAQGQyqN8XeA1x


#### **POSTGRES INSTRUCTIONS:**
Install Postgres12 here https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
run the installer. use the "postgres" for the username and "postgres" for the password when prompted.
After installation completes add the location to the postgres bin folder to system path variables.
ex. C:\Program Files\PostgreSQL\12\bin

Open command prompt (on windows) navigate to C:\Program Files\PostgreSQL\12
and run `pg_ctl -D ./data start`. this is the running database server. DO NOT CLOSE THE TERMINAL.

PgAdmin4 will allow you to view the database via a web gui if you would like to use that. 
However the project uses flyway to apply db migrations. So it is recommended that any DB changes be made 
with a new version migration.

#### **PROJECT INSTRUCTIONS:**
To start the project just clone the project. Maven will 
import all dependencies and run the main application class AASDApplication.
go to localhost:8080 in web browser to see the running application.
