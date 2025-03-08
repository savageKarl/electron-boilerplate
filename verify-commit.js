import { readFileSync } from 'fs';
import { execSync } from 'child_process';

try {
  const commitMsg = readFileSync('.git/COMMIT_EDITMSG', 'utf8');

  // 使用 execSync 直接运行 commitlint 命令
  execSync('npx commitlint --config commitlint.config.mjs', {
    input: commitMsg,
    stdio: ['pipe', 'inherit', 'inherit'],
  });

  // 如果没有抛出错误，则验证通过
  process.exit(0);
} catch (error) {
  console.error('提交信息不符合规范：');
  process.exit(1);
}
