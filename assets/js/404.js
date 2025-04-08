// Only for 404.
if (!location.search.includes("rdr=1")) {
  console.log("Redirecting...")
  const path = location.pathname;
  const query = location.search;
  const redirectUrl = `http://see.bz${path}${query}`;
  location.assign(redirectUrl);
}
