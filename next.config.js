/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  purge: [
    "./src/**/*.{html,js,svelte,ts,css,module.css}"
    // "./src/**/*.html",
    // "./src/**/*.vue,
    // "./src/**/*.jsx"
   ],
}

module.exports = nextConfig