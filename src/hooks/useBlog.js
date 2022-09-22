import { useEffect, useState } from "react";

const useBlogs = () => {
	const [blogs, setBlogs] = useState([]);
	

	useEffect(() => {
		fetch("https://damp-wave-89480.herokuapp.com/blog")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);
	return [blogs, setBlogs];
};

export default useBlogs;