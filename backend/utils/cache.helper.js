const isProduction = process.env.NODE_ENV === 'production';

const getCache = async (req, { key }) => {
  if (isProduction) return null;
  
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