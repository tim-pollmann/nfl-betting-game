import './App.css'

interface Props {
  text: string
}

export default function App ({ text }: Props) {
  return (
    <h1 className="text-3xl font-bold underline bg-green-600">
      {text}
    </h1>
  )
}
