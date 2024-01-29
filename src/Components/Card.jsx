import React from 'react'

export default function Card(props) {
    return (
        <>
            <div>
                <div className="w-full rounded-md border m-2">
                    <img
                        src="https://source.unsplash.com/random"
                        alt="Laptop"
                        className="h-[300px] w-full rounded-t-md object-cover"
                    />
                    <div className="p-4">
                        <h1 className="inline-flex items-center text-lg font-semibold">
                            {props.username} &nbsp;
                        </h1>
                        <p className="mt-3 text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                        </p>
                        <div className="mt-4">
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                {}
                            </span>
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                {}
                            </span>
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                {}
                            </span>
                        </div>
                        <button
                            type="button"
                            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Read
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}


// And you can write this 
// here we can direct object calling and write this

// import React from 'react'

// export default function Card({username}) {
//     return (
//         <>
//             <div>
//                 <div className="w-full rounded-md border m-2">
//                     <img
//                         src="https://source.unsplash.com/random"
//                         alt="Laptop"
//                         className="h-[300px] w-full rounded-t-md object-cover"
//                     />
//                     <div className="p-4">
//                         <h1 className="inline-flex items-center text-lg font-semibold">
//                             {username} &nbsp;
//                         </h1>
//                         <p className="mt-3 text-sm text-gray-600">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
//                         </p>
//                         <div className="mt-4">
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 {}
//                             </span>
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 {}
//                             </span>
//                             <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                                 {}
//                             </span>
//                         </div>
//                         <button
//                             type="button"
//                             className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         >
//                             Read
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }
