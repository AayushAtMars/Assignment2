import React ,{useState} from 'react'

const Card = ({item, onAdd}) => {
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        setAdded(true);
        onAdd(item.name);
      };
  return (
    <div className="border rounded-lg p-3 shadow-md flex gap-4 items-center">
      <div className="flex-1">
        <h3 className="font-semibold pb-3">{item.name}</h3>
        {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
        {item.price && <p className="text-sm font-bold">{item.price}</p>}
      </div>
      <div className='relative'>
      <img src={item.image} alt={item.name} className="w-36 h-36 rounded-lg object-cover " />
      <button
        onClick={handleAdd}
        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer absolute bottom-2 right-0.5 ${added ? "bg-green-500 text-white" : "bg-white text-black"}`}
      >
        {added ? "Added" : "Add"}
      </button>
      </div>
    </div>
  )
}

export default Card
