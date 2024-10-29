module.exports = {
    output: 'standalone',
    images: {
        unoptimized: true
    },
    // to achieve same rendering behaviour as in production
    reactStrictMode: false,
    experimental: {
        urlImports: [
            'https://sdk.trillion.jewelry/viewer/',
            'https://sdk.trillion.jewelry/widget/'
        ]
    },
}
