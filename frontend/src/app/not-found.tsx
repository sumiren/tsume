// ppr + clerk auth()と一緒だとなぜか落ちるため
export const revalidate = 0;

export default async function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  )
}
