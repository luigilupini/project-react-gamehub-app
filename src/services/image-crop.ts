export default function imageCropper(url: string) {
  if (!url) return '';
  const target = url.indexOf('media/') + 6; // 6 is the length of "media/"
  const croppedParams = 'crop/600/400/';
  const remainingUrl = url.slice(target);
  return url.slice(0, target) + croppedParams + remainingUrl;
}
