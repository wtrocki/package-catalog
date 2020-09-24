import { existsSync } from "fs"
import { writeFileSync } from "fs"
import { resolve } from "path"
import { PackageFormat } from "../api/PackageFormat"
import { getPathToPackages } from "../fileHelpers"



export const command = 'init'

export const desc = 'Initializes `.packages.json` file'

export const builder = {}

export async function handler() {
  const format: PackageFormat = {
    version: 1,
    packages: {}
  }
  const pathToFile = getPathToPackages();
  if (existsSync(pathToFile)) {
    console.log("File already exist")
    return;
  }
  console.log(pathToFile)
  writeFileSync(pathToFile, JSON.stringify(format, null, 2));
  console.log("Successfully initialized packages file")
}


