import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader 
  className = "pizza-block"
    speed={3}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="17" y="265" rx="4" ry="40" width="238" height="15" /> 
    <circle cx="130" cy="130" r="116" /> 
    <rect x="9" y="303" rx="13" ry="13" width="258" height="100" /> 
    <rect x="12" y="429" rx="7" ry="7" width="56" height="28" /> 
    <rect x="172" y="418" rx="17" ry="17" width="95" height="42" />
  </ContentLoader>
)

export default Loader