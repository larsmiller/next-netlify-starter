import Link from 'next/link'
import Image from 'next/image'

function Post({ date, image, title, slug}) {
  let { file, description } = image.fields

  return (
    <div className="post">
      <Image src={`https:${file.url}`} alt={description} width={file.details.image.width} height={file.details.image.height} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
        <div className="actions">
        <Link href={'/blog/' + slug}><a>View Post</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Post
