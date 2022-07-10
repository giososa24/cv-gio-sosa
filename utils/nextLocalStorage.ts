export const isBrowser = (): boolean => {
  return typeof window !== 'undefined'
}

export const nextLocalStorage = (): Storage | undefined => {
  if (isBrowser()) {
    return window.localStorage
  }
}
