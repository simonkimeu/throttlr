const store = new Map();

function getClient(ip) {
  if (!store.has(ip)) {
      store.set(ip, { count: 0, startTime: Date.now() });
        }
          return store.get(ip);
          }

          function resetClient(ip) {
            store.set(ip, { count: 0, startTime: Date.now() });
            }

            module.exports = { getClient, resetClient };