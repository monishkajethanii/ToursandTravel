import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = ({ strings, typeSpeed }) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings,
            typeSpeed,
        });

        return () => {
            typed.destroy();
        };
    }, [strings, typeSpeed]);

    return <span ref={el} />;
};

export default TypedText;
