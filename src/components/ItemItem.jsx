import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { deleteItem } from '../features/items/itemSlice'

function ItemItem({ item }) {
  const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: require("./img/item-1.jpeg"),
      desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: require("./img/item-2.jpeg"),
      desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: require("./img/item-3.jpeg"),
      desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: require("./img/item-4.jpeg"),
      desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: require("./img/item-5.jpeg"),
      desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: require("./img/item-6.jpeg"),
      desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
  ]
  const dispatch = useDispatch()
  const [list,setList]=useState(menu);
  ;
  

  return (
  <>
    {/* <div className='item'>
      <div>{new Date(item.createdAt).toLocaleString('en-US')}</div>
      <h2>{item.text}</h2>
      <h2>{item.desc}</h2>
      <button onClick={() => dispatch(deleteItem(item._id))} className='close'>
        X
      </button>
    </div> */}
    {/* <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {menu.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.img}
                  alt=""
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div> */}
     <div className="flex items-center justify-center gap-4 mb-8">
      <button
			className="p-2 text-lg text-yellow-600 capitalize transition rounded hover:text-white hover:bg-yellow-600"
			onClick={() => setList(menu)}>
			all
		</button>
    <button
			className="p-2 text-lg text-yellow-600 capitalize transition rounded hover:text-white hover:bg-yellow-600"
			onClick={() =>
        setList(menu.filter(d => d.category === "breakfast"))}>
			breakfast
		</button>
    <button
			className="p-2 text-lg text-yellow-600 capitalize transition rounded hover:text-white hover:bg-yellow-600"
			onClick={() =>
        setList(menu.filter(d => d.category === "lunch"))}>
			lunch
		</button>
    <button
			className="p-2 text-lg text-yellow-600 capitalize transition rounded hover:text-white hover:bg-yellow-600"
			onClick={() =>
        setList(menu.filter(d => d.category === "shakes"))}>
			shakes
		</button>
      </div>
    <ul className="grid grid-cols-1 gap-10 lg:grid-cols-2">
    {list.map((m)=>(
      <div className="flex flex-col gap-4 md:flex-row">
			<div className="w-full p-1 bg-yellow-600 rounded h-52 md:w-56 md:h-36">
				<img
					className="object-cover w-full h-full"
					src={m.img}
					alt="Food Image"
				/>
			</div>
			<div className="w-full md:w-[calc(100%-14rem)]">
				<div className="flex items-center justify-between gap-4 border-dashed font-bold border-b-[0.05rem] border-black pb-2 mb-4">
					<span className="block capitalize">{m.title}</span>
					<span className="font-bold text-yellow-600">${m.price}</span>
				</div>
				<p className="text-slate-800">{m.desc}</p>
			</div>
		</div>
    ))}
    </ul>
   
    
  </>
    
  )
}

export default ItemItem
