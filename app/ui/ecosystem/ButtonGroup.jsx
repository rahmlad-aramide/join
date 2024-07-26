export const ButtonGroup = ({ next, previous, ...rest }) => {
    // const { carouselState: { currentSlide } } = rest;
    const currentSlide = rest.carouselState?.currentSlide ?? 0;
  
    return (
      <div className="carousel-button-group"> 
        {/* remember to give it position:absolute */}
        <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <button onClick={() => next()} />
      </div>
    );
  };