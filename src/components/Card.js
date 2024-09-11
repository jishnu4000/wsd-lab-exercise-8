import heart from '../svg/heart-svgrepo-com.svg'

export default function Card({ id, title, description, imgSrc, handleLike, likes }) {
  return (
    <div key={id} className="bg-slate-100 shadow-md rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div>
        <img
          src={imgSrc}
          alt={`Gallery ${id + 1}`}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-end">
        <button
          className={`top-3 right-3 transition-transform transform ${
            likes[id] ? 'scale-125' : 'scale-100'
          }`}
          onClick={() => handleLike(id)}
        >
          <img
            src={heart}
            alt="heart"
            className={`w-8 h-8 transition-transform transform ${
              likes[id] ? 'scale-125' : 'scale-100'
            }`}
          />
        </button>
        </div>
      </div>
    </div>
  )
}
