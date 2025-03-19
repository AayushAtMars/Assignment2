import React , {useState} from 'react'

const Card2 = ({item, onAdd}) => {
    const [added, setAdded] = useState(false);
    
        const handleAdd = () => {
            setAdded(true);
            onAdd(item.name);
          };
  return (
    <div>
      <div className="border rounded-lg p-3 shadow-md items-center">
      <div className='relative'>
      <img src={item.image} alt={item.name} className="w-76 h-76 rounded-lg object-cover " />
      <button
        onClick={handleAdd}
        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer absolute bottom-2 right-1 ${added ? "bg-green-500 text-white" : "bg-white text-black"}`}
      >
        {added ? "Added" : "Add"}
      </button>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold pt-3">{item.name}</h3>
        {item.price && <p className="text-sm font-bold">{item.price}</p>}
      </div>
      
    </div>
    </div>
  )
}

export default Card2
