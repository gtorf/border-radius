import React, {ChangeEvent, useEffect, useState} from "react";
import BorderRadiusPreview from "./BorderRadiusPreview";
import {useDispatch, useSelector} from "react-redux";
import {selectRadius, updateRadius} from "./store";


const BorderRadius = () => {

  const radius = useSelector(selectRadius)
  const dispatch = useDispatch()
  const [error, setError] = useState<string | undefined>()
  const variants = [1, 2, 3]

  const handleChange = (e:ChangeEvent<HTMLInputElement>)  => {
    const newRadius = parseInt(e.target.value, 10)
    if (!isNaN(newRadius)) {
      dispatch(updateRadius(newRadius))
      setError(undefined)
    } else {
      setError("Not a number!")
    }
  }

  return (
    <div>
      <div className="BorderRadius-controls">
        <label htmlFor="borderRadius">Radius</label>
        <input id="borderRadius" type="text" value={radius} onChange={handleChange}/>
        <span> px</span>
        {error && <span className={"error"}>{error}</span>}
      </div>
      {variants.map(mul =>
        <BorderRadiusPreview key={mul} radius={radius * mul} />
      )}
    </div>
  )
}

export default BorderRadius