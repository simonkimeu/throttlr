const { getClient, resetClient } = require("./store");

function rateLimiter(maxRequests = 5, windowMs = 60000) {
  return function (req, res, next) {
      const ip = req.ip;
          const client = getClient(ip);
              const now = Date.now();

                  if (now - client.startTime > windowMs) {
                        resetClient(ip);
                            }

                                client.count++;

                                    if (client.count > maxRequests) {
                                          return res.status(429).json({
                                                  error: "Too many requests",
                                                          retryAfter: Math.ceil((windowMs - (now - client.startTime)) / 1000) + "s",
                                                                });
                                                                    }

                                                                        res.setHeader("X-RateLimit-Limit", maxRequests);
                                                                            res.setHeader("X-RateLimit-Remaining", maxRequests - client.count);
                                                                                next();
                                                                                  };
                                                                                  }

                                                                                  module.exports = rateLimiter;