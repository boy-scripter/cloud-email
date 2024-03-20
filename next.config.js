/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true
            },
             {
                source: '/dashboard',
                destination: '/dashboard/home',
                permanent: true
            }
        ]
    },

    images: {
        domains: ['www.cloudemailverification.com']
    }
}

module.exports = nextConfig
