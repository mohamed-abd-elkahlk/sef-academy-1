// import React from 'react'
// import {LoaderSpinner} from 'react-spinners'
// function LoaderSpinner() {
//   return (
//     <div className='loader-container'>
//   <LoaderSpinner  color={ '#bf9b30'}  loading={true} />

//     </div>
//   )
// }

// export default LoaderSpinner;
import React from "react";

function LoadingSpinner() {
	return (
		<div class="spinner-border text_primary mx-auto my-5" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	);
}

export default LoadingSpinner;


