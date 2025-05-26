"use client";

import React, { useState } from 'react';
import { AddressInput }  from './AddressInput';



interface Suggestion {
  full_address: string;
}




const AutoCompleteAddress = () => {
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

  const [sourceSuggestions, setSourceSuggestions] = useState<Suggestion[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<Suggestion[]>([]);

  const [loadingSource, setLoadingSource] = useState<boolean>(false);
  const [loadingDestination, setLoadingDestination] = useState<boolean>(false);

  const [manualSourceSelected, setManualSourceSelected] = useState<boolean>(false);
  const [manualDestinationSelected, setManualDestinationSelected] = useState<boolean>(false);

  return (
    <div className="">
      <AddressInput
        label="Where From?"
        value={source}
        setValue={setSource}
        suggestions={sourceSuggestions}
        setSuggestions={setSourceSuggestions}
        loading={loadingSource}
        setLoading={setLoadingSource}
        manualSelected={manualSourceSelected}
        setManualSelected={setManualSourceSelected}
      />

      

      <AddressInput
        label="Where To?"
        value={destination}
        setValue={setDestination}
        suggestions={destinationSuggestions}
        setSuggestions={setDestinationSuggestions}
        loading={loadingDestination}
        setLoading={setLoadingDestination}
        manualSelected={manualDestinationSelected}
        setManualSelected={setManualDestinationSelected}
      />
    </div>
  );
};

export default AutoCompleteAddress;


















// const AutoCompleteAddress = () => {
//   const [source, setSource] = useState<string>('');
//   const [destination, setDestination] = useState<string>('');

//   const [sourceSuggestions, setSourceSuggestions] = useState<any>({ suggestions: [] });
//   const [destinationSuggestions, setDestinationSuggestions] = useState<any>({ suggestions: [] });

//   const [loadingSource, setLoadingSource] = useState<boolean>(false);
//   const [loadingDestination, setLoadingDestination] = useState<boolean>(false);

//   const [manualSourceSelected, setManualSourceSelected] = useState<boolean>(false);
//   const [manualDestinationSelected, setManualDestinationSelected] = useState<boolean>(false);

//   // ------------------ SOURCE LOGIC ------------------ //
//   useEffect(() => {
//     if (manualSourceSelected) {
//       setManualSourceSelected(false);
//       return;
//     }

//     if (!source.trim()) {
//       setSourceSuggestions({ suggestions: [] });
//       return;
//     }

//     const delayDebounce = setTimeout(() => {
//       fetchSuggestions(source, 'source');
//     }, 1000);

//     return () => clearTimeout(delayDebounce);
//   }, [source]);

//   // ------------------ DESTINATION LOGIC ------------------ //
//   useEffect(() => {
//     if (manualDestinationSelected) {
//       setManualDestinationSelected(false);
//       return;
//     }

//     if (!destination.trim()) {
//       setDestinationSuggestions({ suggestions: [] });
//       return;
//     }

//     const delayDebounce = setTimeout(() => {
//       fetchSuggestions(destination, 'destination');
//     }, 1000);

//     return () => clearTimeout(delayDebounce);
//   }, [destination]);

//   // ------------------ SHARED FETCH FUNCTION ------------------ //
//   const fetchSuggestions = async (query: string, type: 'source' | 'destination') => {
//     if (!query.trim()) return;

//     if (type === 'source') setLoadingSource(true);
//     else setLoadingDestination(true);

//     try {
//       const response = await fetch(`/api/search-address?q=${encodeURIComponent(query)}`, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       const data = await response.json();

//       if (type === 'source') setSourceSuggestions(data);
//       else setDestinationSuggestions(data);
//     } catch (err) {
//       console.error('Error fetching suggestions:', err);
//     } finally {
//       if (type === 'source') setLoadingSource(false);
//       else setLoadingDestination(false);
//     }
//   };

//   return (
//     <div className='mt-3'>
//       {/* ------------------ SOURCE INPUT ------------------ */}
//       <div>
//         <label className='text-gray-500'>Where From &#63;</label>
//         <input
//           type='text'
//           className='p-1 border-[1px] w-full rounded-md outline-none focus:border-slate-950'
//           value={source}
//           onChange={(e) => {
//             setManualSourceSelected(false);
//             setSource(e.target.value);
//           }}
//         />
//         <div className="relative">
//           {loadingSource && source.trim() && (
//             <div className="mt-1 text-sm text-gray-400">Searching...</div>
//           )}
//           {!loadingSource && sourceSuggestions?.suggestions?.length > 0 && (
//             <div className="mt-2 bg-white border rounded shadow-sm">
//               {sourceSuggestions.suggestions.map((item: any, index: number) => (
//                 <h3
//                   key={index}
//                   className="p-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => {
//                     setSource(item.full_address);
//                     setSourceSuggestions({ suggestions: [] });
//                     setManualSourceSelected(true);
//                   }}
//                 >
//                   {item.full_address}
//                 </h3>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ------------------ DESTINATION INPUT ------------------ */}
//       <div className="mt-3">
//         <label className='text-gray-500'>Where To &#63;</label>
//         <input
//           type='text'
//           className='p-1 border-[1px] w-full rounded-md outline-none focus:border-slate-950'
//           value={destination}
//           onChange={(e) => {
//             setManualDestinationSelected(false);
//             setDestination(e.target.value);
//           }}
//         />
//         <div className="relative">
//           {loadingDestination && destination.trim() && (
//             <div className="mt-1 text-sm text-gray-400">Searching...</div>
//           )}
//           {!loadingDestination && destinationSuggestions?.suggestions?.length > 0 && (
//             <div className="mt-2 bg-white border rounded shadow-sm">
//               {destinationSuggestions.suggestions.map((item: any, index: number) => (
//                 <h3
//                   key={index}
//                   className="p-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => {
//                     setDestination(item.full_address);
//                     setDestinationSuggestions({ suggestions: [] });
//                     setManualDestinationSelected(true);
//                   }}
//                 >
//                   {item.full_address}
//                 </h3>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AutoCompleteAddress;
