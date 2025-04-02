FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy project files
COPY . .

# Build the project
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only the built files from the builder stage
COPY --from=builder /app/dist ./dist

# Install "serve" to serve the built files
RUN npm install -g serve

# Expose port 9094
EXPOSE 9094

# Run as non-root user for security
USER node

# Serve the build files
CMD ["serve", "-s", "dist", "-l", "9094"]
