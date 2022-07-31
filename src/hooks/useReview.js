import people1 from '../assets/images/people1.png';
import people2 from '../assets/images/people2.png';
import people3 from '../assets/images/people3.png';

const useReview = () => {
    const reviews = [
        {
            _id: 1,
            img: people1,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            img: people2,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            img: people3,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]
    return [reviews];
}

export default useReview;