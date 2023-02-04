import "./index.css";

function Buttons({children, onClick}) {
    return(
        <div>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Buttons;