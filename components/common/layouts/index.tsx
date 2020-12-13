import Header from './header'

export default function Layouts({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}