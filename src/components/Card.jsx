function Card({ mainStyle, image, name, text }) {
  return (
    <main className={`${mainStyle} border-4 border-green-400/50 flex flex-col items-center w-full h-80 bg-white mt-8 rounded-xl shadow-2xl shadow-black/40 p-4`}>
      <img className="w-full h-3/5 object-contain" src={image} alt="" />
      <div className="w-full h-2/5 mb-auto text-center ">
        <p className="text-xl mt-2 text-red-500 font-bold">{name}</p>
        <p className="text-sm font-bold text-green-500 mt-2">{text}</p>
      </div>
    </main>
  );
}

export default Card;
