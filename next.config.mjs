/** @type {import('next').NextConfig} */
const securityHeaders = [
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(); battery=(); geolocation=(); microphone=();'
    },
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
    }
];
const nextConfig = {
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/(.*)',
                headers: securityHeaders
            }
        ];
    }
};

export default nextConfig;
