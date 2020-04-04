module.exports = {
    exportTrailingSlash: true,
    exportPathMap: async function (
        defaultPathMap, {
            dev,
            dir,
            outDir,
            distDir,
            buildId
        }
    ) {
        return {
            '/': {
                page: '/'
            },
            '/registration': {
                page: '/registration'
            },
            '/pricing': {
                page: '/pricing'
            },
            '/how_it_works': {
                page: '/how_it_works'
            },
        }
    },
}