import { useRouter } from 'next/router'

export default function DiscussionId() {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <h1>Room ID: {id}</h1>
    </div>
  )
}