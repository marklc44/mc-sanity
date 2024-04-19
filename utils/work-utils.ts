export const getAdjustedLogoDimensions = (clientSlug?: string) => {
  if (!clientSlug) return {
    width: 400,
    height: 400,
  }
  switch (clientSlug) {
    case 'nextme':
      return {
        width: 400,
        height: 60,
      }
    case 'plastiq':
      return {
        width: 600,
        height: 200,
      }
    case 'hopelab':
      return {
        width: 600,
        height: 40,
      }
    default:
      return {
        width: 400,
        height: 400,
      }
  }
}

export const stripProtocol = (url: string) => {
  return url.split('//')[1]
}