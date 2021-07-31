import Head from 'next/head'

import { fetchEntries } from '@components/contentfulPosts'

import Post from '@components/Post'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>About Everything</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:description" value="This is about stuff" />
      </Head>

      <div className="container">
        <h1>About</h1>
        <h2>It started long ago</h2>
      </div>

      {/*
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      */}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
    revalidate: 10
  }
}
