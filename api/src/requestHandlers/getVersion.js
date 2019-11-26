import git from 'git-rev';
import logger from 'lib/logger';

export default async function getVersion(req, res) {
  try {
    const [short, long, branch, tag] = await Promise.all([
      new Promise(resolve => git.short(resolve)),
      new Promise(resolve => git.long(resolve)),
      new Promise(resolve => git.branch(resolve)),
      new Promise(resolve => git.tag(resolve))
    ]);
    res.status(200).json({ short, long, branch, tag });
  } catch (err) {
    logger.error(err);
    res.status(500).send();
  }
}