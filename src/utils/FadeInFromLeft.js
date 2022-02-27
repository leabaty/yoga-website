import React from "react";

// fade in function from https://codesandbox.io/s/beautiful-wiles-k23w5?from-embed=&file=/src/styles.css:59-378

function FadeInFromLeft(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);

    return (
      <div
        className={`fade-in-from-left-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  export default FadeInFromLeft;
