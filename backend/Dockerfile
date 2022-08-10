FROM adoptopenjdk/openjdk8-openj9:latest
WORKDIR /app
COPY ./target/spring-boot-security-jwt-mongodb-0.0.1-SNAPSHOT.jar /app/backend.jar
EXPOSE 8090
ENTRYPOINT ["java","-jar","backend.jar"]