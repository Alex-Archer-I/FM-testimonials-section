const TestimonialsItem = ({item}) => {
    const imgSrc = `./images/${item.img}`;
    const altImg = `Avatar of ${item.name}`;

    return (
        <li className={`testimonials__item testimonials__item--${item.theme}`}>
            <div className="testimonials__author">
                <img src={imgSrc} alt={altImg} width="30" height="30" className="testimonials__img"/>
                <p className="testimonials__name">
                    <span className="testimonials__text--big">{item.name}</span> 
                    <span className="testimonials__text--small testimonials__text--fade">{item.type}</span>
                </p>
            </div>
            <blockquote><h2 className="testimonials__text--title">{item.title}</h2></blockquote>
            <blockquote><p className="testimonials__text--small testimonials__text--pale">{item.text}</p></blockquote>
        </li>
    );
};

export default TestimonialsItem;