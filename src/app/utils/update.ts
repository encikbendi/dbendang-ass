export const isLatestVersion = (latestVersion: string, currentVersion: string) => {
  const parseToNumbers = (version: string) => version.split('.').map((n) => parseInt(n))
  const latestVersionNumArr = parseToNumbers(latestVersion)
  const currentVersionNumArr = parseToNumbers(currentVersion)

  for (let i = 0; i < latestVersionNumArr.length; i++) {
    if (latestVersionNumArr[i] > currentVersionNumArr[i]) {
      return false
    }
  }
  return true
}
