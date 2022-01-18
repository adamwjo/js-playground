import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer"

import hogs from "../porkers_data";

function App() {
	
	const [hogData, setHogData] = useState(hogs)

	
	return (
		<div className="App">
			<Nav />
			<HogContainer hogData={hogData}/>
		</div>
	);
}

export default App;
