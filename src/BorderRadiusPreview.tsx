import React from "react"

interface Props {
  radius: number
}


const BorderRadiusPreview = (props: Props) => {
  return (
    <div className={"BorderRadius-preview"} style={{borderRadius: props.radius}}/>
  )
}

export default BorderRadiusPreview