const config = {
  'package.json': ['npx prettier-package-json --write'],
  '*.@(ts|tsx)': ['tsc-files'],
  '*.@(js|ts|tsx)': ['eslint --fix'],
}

export default config
