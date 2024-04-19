// githubUtils.js

export async function getLastUpdateTime() {
    const username = import.meta.env.VITE_GITHUB_USERNAME;
    const repository = import.meta.env.VITE_GITHUB_REPOSITORY;
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    try {
        const response = await fetch(
            `https://api.github.com/repos/${username}/${repository}/commits`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const data = await response.json();
        if (data.length > 0) {
            const lastCommitDate = new Date(data[0].commit.author.date);
            return lastCommitDate.toLocaleString();
        } else {
            return 'No commits found';
        }
    } catch (error) {
        console.error('Error fetching last commit:', error);
        return 'Error fetching last commit';
    }
}
