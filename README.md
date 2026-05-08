# Throttlr

A lightweight API rate limiter middleware built with Node.js and Express.
Throttlr tracks requests per IP address and blocks clients that exceed
the defined limit within a time window — returning a 429 status with a
retry timer.

## Install

git clone https://github.com/simonkimeu/throttlr.git
cd throttlr
npm install

## Run

node src/index.js

## Test

# Normal request
curl http://localhost:3000/

# Trigger rate limit (send 10 requests)
for i in {1..10}; do curl -s http://localhost:3000/; echo; done

## Example Response (rate limited)

{"error":"Too many requests","retryAfter":"59s"}

## Configuration

In src/index.js:
app.use(rateLimiter(5, 60000))
- First argument: max requests allowed
- Second argument: time window in milliseconds

## Tech Stack
- Node.js
- Express
- In-memory Map store

## Author
Simon Kimeu — github.com/simonkimeu