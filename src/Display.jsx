const Display = ({ message, type }) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            <strong>{type === 'success' ? 'Success:' : 'Error:'}</strong> {message}
        </div>
    );
};

export default Display;
