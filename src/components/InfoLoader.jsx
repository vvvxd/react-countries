import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1050}
    height={500}
    viewBox="0 0 1050 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="10" cy="20" r="8" /> 
    <rect x="25" y="15" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="50" r="8" /> 
    <rect x="25" y="45" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="80" r="8" /> 
    <rect x="25" y="75" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="110" r="8" /> 
    <rect x="25" y="105" rx="5" ry="5" width="220" height="10" /> 
    <rect x="0" y="0" rx="10" ry="10" width="1050" height="500" />
  </ContentLoader>
)

export default InfoLoader