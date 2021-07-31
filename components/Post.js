import styles from '@styles/Post.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Post({ date, image, title, slug}) {
  let { file, description } = image.fields

  return (
    <div className={styles.post}>
      <Image src={`https:${file.url}`} className={styles.thumbnail} alt={description} width={file.details.image.width} height={file.details.image.height} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
        <p className={styles.description}>{description}</p>
        <Link href={'/blog/' + slug}><a className="btn">View Post</a></Link>
      </div>
    </div>
  )
}

export default Post
