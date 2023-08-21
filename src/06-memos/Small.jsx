import { memo } from "react"

export const Small = memo(({value}) => {
    console.log('Me volvi a diibujar')
  return (
    <small>{value}</small>
  )
})
