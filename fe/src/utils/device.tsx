/**
 * NOTE: 現状はレスポンシブ機能があるため、不要の可能性大
 */
// スマホ、またはタブレットならtrueを返す
export const isSP = () => {
  var hasTouchScreen = false
  if ('maxTouchPoints' in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0
  } else {
    var mQ = matchMedia('(pointer:coarse)')
    if (mQ && mQ.media === '(pointer:coarse)') {
      // 入力方法にポインティングデバイスがあるかどうか
      hasTouchScreen = !!mQ.matches
    } else if ('orientation' in window) {
      // screenインターフェイスのプロパティであるorientationがあるか
      hasTouchScreen = true // deprecated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      var UA = navigator.userAgent
      hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    }
  }

  return hasTouchScreen
}
