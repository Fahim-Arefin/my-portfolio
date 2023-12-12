// eslint-disable-next-line react/prop-types
function ImageWithBlendAndOverlay({ img, className, blend, link }) {
  return (
    <div>
      <div className={`relative rounded-sm z-20 ${className}`}>
        <a href={link} target="_blank" rel="noreferrer">
          <img className="w-full h-full rounded-sm " src={img} alt="img" />
          <div
            className={`${blend} hover:opacity-0 absolute z-30 inset-0 bg-[#64ffdb] opacity-50 rounded-sm 
             cursor-pointer transition-all duration-150`}
          ></div>
        </a>
      </div>
    </div>
  );
}

export default ImageWithBlendAndOverlay;
