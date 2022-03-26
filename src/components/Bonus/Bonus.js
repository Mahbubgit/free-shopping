import React from 'react';
import './Bonus.css';

const Bonus = () => {
    return (
        <div>
            <div className="bonus">
                <h3>Question 1. How react works?</h3>
                <p>React is a JavaScript library. It's not a framework. It creates user interfaces (UIs) in a predictable and efficient way using declarative code. We can use it to build single page applications and mobile apps or to build complex apps.<br/>The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
                The DOM will be slow while building a client-side apps. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it.Thus the virtual DOM will try to find the most efficient way to update the browser’s DOM. React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation. Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. 
                </p>
            </div>
            <div className="bonus">
                <h3>Question 2. Differences between props and state.</h3>
                <p>Props are known as properties. It can be used to pass data from one component to another. Props cannot be modified. It is read-only and Immutable. Props can be used with state and functional components.<br/>
                On the otherhand, the state represents a part of an Application that can be change. Each component can have its State. The state is Mutable and 
                can be modified. The Data is passed within the component only. State can be used only with the state components/class component. State is both read and write.
                </p>
            </div>
        </div>
    );
};

export default Bonus;