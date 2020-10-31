import React from "react"
import ContentLoader from "react-content-loader"

const CountryLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={415}
    viewBox="0 0 400 415"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="19" ry="19" width="400" height="415" />
  </ContentLoader>
)

export default CountryLoader