# -------------------------
# Stage 1: Build
# -------------------------
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install root deps (if using workspaces like npm/yarn/pnpm)
RUN npm install

# Copy rest of the source code
COPY . .

# Build both apps
RUN npm run build

# -------------------------
# Stage 2: Runtime
# -------------------------
FROM node:22-alpine AS runner

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8000

# Copy only production dependencies
COPY package*.json ./
COPY server/package*.json ./server/
RUN npm run server:install:prod

# Copy server build output
COPY --from=builder /app/server/dist ./server/dist

# Copy built React client into server's public directory
COPY --from=builder /app/client/dist ./client/dist

# Expose server port
EXPOSE 8000

# Start the server
CMD ["npm", "run", "server"]
