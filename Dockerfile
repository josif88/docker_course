# Use an official Node.js image as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Set environment variables
ENV NODE_ENV=production
ENV PGUSER=postgres
ENV PGPASSWORD=mysecretpassword
ENV PGHOST=127.0.0.1
ENV PGDATABASE=course
ENV PGPORT=5432
ENV PORT=3000

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Download wait-for-it.sh and make it executable
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

# Expose the port that your app will run on
EXPOSE $PORT
# Command to run your application
CMD ["./wait-for-it.sh", "postgres-db:5432", "--","node", "index.js"]
