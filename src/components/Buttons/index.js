import "./index.css";

function Buttons({children, onClick, className}) {
    return(
        <div>
            <button className={className} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Buttons;