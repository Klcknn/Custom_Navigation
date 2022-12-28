import classNames  from "classnames";

function Panel({ children, className, ...rest }) {
    const finallyClassNames = classNames("border rounded p-3 shadow bg-white w-full", className);
    return <div {...rest} className={finallyClassNames}>{children}</div>
}

export default Panel;