FROM node:18-alpine

# Install git to clone if necessary (you can remove this if COPY is used)
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Clone repo or COPY for local dev (recommend COPY during active dev)
RUN git clone -b test https://github.com/StayZe/docnote.git /app

# Prefer local copy in dev
COPY . .

# Install deps and build
RUN npm install

# Expose port if needed (default Next.js is 3000)
EXPOSE 3000

# Dev command for hot-reloading
CMD ["npm", "run", "dev"]
