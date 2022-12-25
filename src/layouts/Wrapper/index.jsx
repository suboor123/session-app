export const Wrapper = ({ children }) => {
    return <div className="layout-wrapper layout-2">{children}</div>;
};

export const WrapperInner = ({ children }) => {
    return <div className="layout-inner">{children}</div>;
};

export const WrapperContainer = ({ children }) => {
    return <div className="layout-container">{children}</div>;
};
