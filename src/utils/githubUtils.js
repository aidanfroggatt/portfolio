
export const getLastCommitInfo = async () => {
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
        console.log('data:', data);
        if (data.length > 0) {
            const lastCommitDate = new Date(data[0].commit.author.date);
            const lastCommitAuthor = data[0].commit.author.name;
            return {
                time: lastCommitDate.toLocaleString(),
                author: lastCommitAuthor
            };
        } else {
            return {
                time: 'No commits found',
                author: 'No commits found'
            };
        }
    } catch (error) {
        console.error('Error fetching last commit:', error);
        return {
            time: 'Error fetching last commit',
            author: 'Error fetching last commit'
        };
    }
}
