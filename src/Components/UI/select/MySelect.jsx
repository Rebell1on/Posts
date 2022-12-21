import React from 'react'
import CreateButton from '../buttons/CreateButton'
import cl from './MySelect.module.css'
export default function MySelect({
  options,
  defValue,
  value,
  onChange,
  isEndless,
  setIsEndless,
  cancelScroll,
  limit,
  page,
  setPageScroll,
}) {
  const btnClasses = [cl.endlessScrollButton]

  if (isEndless) {
    btnClasses.push(cl.used)
  }

  function cancel(event) {
    setIsEndless(false)
    cancelScroll(limit, page)
  }
  return (
    <>
      <select value={value} onChange={(e) => onChange(e.target.value)} className={cl.mySelect}>
        <option disabled value="">
          {defValue}
        </option>
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          )
        })}
      </select>
      <button className={btnClasses.join(' ')} onClick={() => setIsEndless(true)}>
        Динамическая пагинация
      </button>
      <CreateButton onClick={(event) => cancel(event)}>Выключить динамическую пагинацию</CreateButton>
    </>
  )
}
