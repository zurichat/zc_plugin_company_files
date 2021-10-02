const getCache = async (req, { key }) => {
  const data = await req.MemoryCache.getAsync(key);

  return (data && typeof(data) === 'string') ? data : null;
}

const setCache = (req, { key, duration, data }) => {
  req.MemoryCache.setex(key, duration, data);
}

module.exports = {
  getCache,
  setCache
}