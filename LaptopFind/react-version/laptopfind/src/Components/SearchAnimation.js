import React, { useRef, useState, useEffect, createRef } from 'react';
import lottie from 'lottie-web';

export default function SearchAnimation() {

    const [animDirection, setAnimDirection] = useState(1)
    const [animation, setAnimation] = useState(null)

    let animRef = useRef(null);

    useEffect(() => {
        setAnimation(lottie.loadAnimation({
            container: animRef.current,
            animationData: require('../assets/lottie/search.json'),
            renderer: 'svg',
            loop: false,
            autoplay: false
        }))
        console.log(animation);
    }, [])

    function playAnimation() {
        animation.play()
        setAnimDirection(animDirection * -1);
        // this.isActive = !this.isActive
        animation.onComplete = function () {
            animation.setDirection(animDirection)
        }
    }
    return (
        <div ref={animRef} id="animation" onClick={playAnimation} />
    )
}