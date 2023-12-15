# Start Project

### Dev

```bash
npm run dev
```

### Production

```bash
npm run install
npm run build
npm run start:prod
```

# Project detalis

```
Project have two server Express and WebSocket

Express have one route
url: "http://localhost:8030/api/comment"
method: POST
data: {
  "text": "comment text",
  "username" "name" | null,
  "email" "email" | null,
}

WS have one channel
"new-comment"
```

# ENV

```
PORT=           # Server Port
DB_USER=        # Database User
DB_PASSWORD=    # Database Password
DB_NAME=        # Database Name
DB_HOST=        # Database Host
DB_PORT=        # Database Port
access_token=   # Secret key
```
