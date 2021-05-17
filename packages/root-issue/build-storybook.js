const execSync = require('child_process').execSync;
const path = require('path');

const DIST_PATH = path.resolve(__dirname, 'dist/storybook');

const STORYBOOK_PATH = path.resolve(__dirname, './.storybook');

execSync(`yarn build-storybook -c ${STORYBOOK_PATH} -o ${DIST_PATH}`, { stdio: 'inherit' });
