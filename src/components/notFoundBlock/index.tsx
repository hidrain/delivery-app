import React from 'react'
import style from './notFoundBlock.module.scss'

type Props = {}

export const NotFoundBlock = (props: Props) => {
  return (
    <h1 className={style.main}>Not found</h1>
  )
}