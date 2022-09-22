import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://damp-wave-89480.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return [reviews, setReviews]
}

export default useReviews;