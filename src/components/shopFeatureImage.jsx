
export default function shopFeatureImage({image,title, description}) {
  return (
    <div>
          <img src={image} alt="" />
          <p className="font-semibold my-2">{title}</p>
          <p>{description}</p>
    </div>
  )
}
