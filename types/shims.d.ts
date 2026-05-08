// This project is typically run in Docker, so editor machines may not have
// Node/PNPM installed locally. These shims prevent TypeScript from erroring
// when node_modules types are not present on the host.

declare module "fs" {
  const fs: any
  export = fs
}

declare module "path" {
  const path: any
  export = path
}

declare module "gray-matter" {
  const matter: any
  export default matter
}

declare const process: any

