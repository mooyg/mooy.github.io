import { Global } from '@emotion/react'

const Fonts = () => {
  return (
    <Global
      styles={`
@font-face {
  font-family: 'JetBrains';
  src: url('/JetBrains/JetBrainsMono-Regular.woff2');
}
@font-face {
  font-family: 'Wotfard Bold';
  src: url('/wotfard/wotfard-bold-webfont.ttf');
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Wotfard';
  src: url('/wotfard/wotfard-medium-webfont.ttf');
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}
`}
    ></Global>
  )
}
export default Fonts
