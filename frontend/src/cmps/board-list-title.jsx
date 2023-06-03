import { BsPerson } from 'react-icons/bs'

export default function BoardListTitle({ title }) {
  return (
    <header className="title flex center">
      <BsPerson className="title-icon" strokeWidth={'.5px'} />
      <h2>{title}</h2>
    </header>
  )
}
