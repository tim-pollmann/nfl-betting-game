import Navbar from './navbar/Navbar'

interface Props {
  text: string
}

export default function App (props: Props) {
  const { text } = props
  return (
    <Navbar />
  )
}
