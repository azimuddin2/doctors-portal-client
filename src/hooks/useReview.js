import { useQuery } from "@tanstack/react-query";

const useReview = () => {

    const { data: reviews = [], isLoading, error } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-ashen-eight.vercel.app/reviews');
            const data = await res.json();
            return data;
        }
    })

    return [reviews, isLoading, error];
}

export default useReview;