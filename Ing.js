import React from 'react'

export default function Ing(props) {
    const { Iname , amount } = props;
  return (
    <div>
    <span>
        {Iname}
    </span>
    <span>
        {amount}
    </span>
    </div>
  )
}
