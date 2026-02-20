import { useState, useEffect } from 'react'

const GITHUB_API = 'https://api.github.com/repos/Serverket/cpugov/tags'

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
                if (data && data.length > 0) {
                    const latestTag = data[0].name
                    const versionStr = latestTag.startsWith('v') ? latestTag.slice(1) : latestTag
                    setRelease({
                        tag: latestTag,
                        releaseUrl: `https://github.com/Serverket/cpugov/releases/tag/${latestTag}`,
                        debUrl: `https://github.com/Serverket/cpugov/releases/download/${latestTag}/cpugov_${versionStr}_amd64.deb`,
                        publishedAt: null, // tags endpoint doesn't include dates, but we don't display it anyway
                    })
                } else {
                    throw new Error('No tags found')
                }
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    return { release, loading, error }
}
