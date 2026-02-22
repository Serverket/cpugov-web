import { useState, useEffect } from 'react'

const GITHUB_API = 'https://api.github.com/repos/Serverket/cpugov/releases/latest'

export function useLatestRelease() {
    const [release, setRelease] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(GITHUB_API)
            .then(r => {
                if (!r.ok) throw new Error('GitHub API error')
                return r.json()
            })
            .then(data => {
                if (data && data.tag_name) {
                    const tagName = data.tag_name.toLowerCase()
                    const latestTag = tagName.startsWith('v') ? tagName : `v${tagName}`

                    // Find the .deb asset
                    const debAsset = data.assets.find(asset => asset.name.endsWith('.deb'))

                    setRelease({
                        tag: latestTag,
                        name: data.name,
                        releaseUrl: data.html_url,
                        debUrl: debAsset ? debAsset.browser_download_url : data.html_url,
                        publishedAt: data.published_at,
                    })
                } else {
                    throw new Error('No release found')
                }
            })
            .catch(err => {
                setError(err.message)
                // Fallback for when GitHub API rate limit is exceeded
                setRelease({
                    tag: 'v0.3.0',
                    name: 'Flatdumb',
                    releaseUrl: 'https://github.com/Serverket/cpugov/releases/tag/v0.3.0',
                    debUrl: 'https://github.com/Serverket/cpugov/releases/download/v0.3.0/cpugov_0.3.0_amd64.deb',
                    publishedAt: new Date().toISOString()
                })
            })
            .finally(() => setLoading(false))
    }, [])

    return { release, loading, error }
}
