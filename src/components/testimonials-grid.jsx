import TestimonialsItem from './testimonials-item';

import data from '../assets/data';

const TestimonialsGrid = () => {
    const content = data.map((item, index) => {
        return <TestimonialsItem item={item} key={item.id}/>
    });

    return (
        <ul className="testimonials">{content}</ul>
    );
};

export default TestimonialsGrid;