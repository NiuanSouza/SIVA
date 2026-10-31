FROM node:20-alpine
WORKDIR /app
COPY package*.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install
COPY . .
ENV NEXT_PUBLIC_API_URL=http://siva_backend:8083
RUN pnpm build
EXPOSE 3002
CMD ["pnpm", "start", "-p", "3002"]

