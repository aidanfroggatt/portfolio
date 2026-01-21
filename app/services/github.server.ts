import { formatGithubCommitDate } from '~/lib/date';

export const getLastCommitInfo = async () => {
  const username = process.env.GITHUB_USERNAME;
  const repository = process.env.GITHUB_REPOSITORY;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !repository || !token) {
    console.error('Missing environment variables');
    return {
      time: 'Missing environment variables',
      author: 'Missing environment variables',
    };
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repository}/commits`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'Remix-Portfolio',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      const lastCommitDate = new Date(data[0].commit.author.date);
      const lastCommitAuthor = data[0].commit.author.name;
      return {
        time: formatGithubCommitDate(lastCommitDate),
        author: lastCommitAuthor,
      };
    } else {
      return {
        time: 'No commits found',
        author: 'No commits found',
      };
    }
  } catch (error) {
    console.error('Error fetching last commit:', error);
    return {
      time: 'Error fetching last commit',
      author: 'Error fetching last commit',
    };
  }
};
