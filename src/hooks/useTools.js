import { useEffect, useState } from "react";

const useTools = () => {
	const [tools, setTools] = useState([]);
	

	useEffect(() => {
		fetch("https://damp-wave-89480.herokuapp.com/service")
			.then((res) => res.json())
			.then((data) => setTools(data));
	}, []);
	return [tools, setTools];
};

export default useTools;
