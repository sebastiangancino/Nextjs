/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey:  'customValue', //permite tener los valores asignados para producción
  },
  basePath: 'dist',  //los documentos se generan en "dist"
  compress: true,  // utiliza el protocolo gzip
  async redirects(){
    return [
      {
        source: '/hola',
        destination: 'https://sebastiangano......',  //entra en hola y ser redirecciona a destination
        permanent: true,
      }
    ]
  } 

}

module.exports = nextConfig
