import Image from 'next/image'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    'content_type': 'blogPost'
  })
  const paths = res.items.map(item => {
    return {
      params: {
        slug: item.fields.slug
      }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const {items} = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug
  })
  return {
    props: {
      post: items[0],
      revalidate: 10
    }
  }
}
export default function BlogPost({post}) {
  const {heroImage, title, body} = post.fields
  return (
    <div>
      <div className="banner">
        <Image src={`https:${heroImage.fields.file.url}`} alt={heroImage.fields.description} width={heroImage.fields.file.details.image.width} height={heroImage.fields.file.details.image.height} />
      </div>
      <h1>{title}</h1>
      <div className="body">
      {body}
      </div>
      Blog post
    </div>
  )
}
