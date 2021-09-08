import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <div className="row">
      <div className="col s12 m5">
        <div className="card-panel blue-grey lighten-3">
          <h2>Ссылка</h2>

          <p>Сокращенная ссылка: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
          <p>Откуда: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
          <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
          <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>

        </div>
      </div>
    </div>
  )
}