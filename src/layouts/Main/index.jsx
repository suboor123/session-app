export const Main = ({ children }) => {
    return (
        <div className="layout-content">
            <div className="container-fluid flex-grow-1 container-p-y">
                {children}
            </div>
        </div>
    );
};
