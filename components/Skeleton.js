export default function Skeleton() {
  return (
    <div className="skeleton">
      <div className="s-banner"></div>
      <div className="s-header"><h2>LOADING MATE...</h2></div>
      <div className="s-content"></div>
      <div className="s-content"></div>
      <div className="s-content"></div>
      <style jsx>{`
        .skeleton {
          background: #ececec;
        }
      `}</style>
    </div>
  )
}
