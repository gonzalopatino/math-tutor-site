# Stage 1: Build the static site
FROM node:20-alpine AS build
WORKDIR /app


# Copy dependency manifests first (best caching behavior)
COPY package.json package-lock.json ./
RUN npm ci 

# Copy the rest of the source and build it
COPY . .
RUN npm run build

# Stage 2: Serve the built site with Nginx
FROM nginx:1.27-alpine

# Use our Nginx config (SPA routing, caching )
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80