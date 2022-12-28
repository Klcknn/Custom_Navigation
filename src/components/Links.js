import classNames from "classnames";
/* 
import { useContext } from "react";
import { NavigationContext } from "../context/navigation";
*/
import useNavigation from "../hooks/use-navigation";

function Links({ to, children, className, activeClassName }) { //to: Go to the pathname children 
    //const { navigate } = useContext(NavigationContext);
    const { navigate, currentPath } = useNavigation();
    const classes = classNames(
        "text-blue-500", 
        className,
        currentPath === to && activeClassName
        );
    const handleClick = (event) => {
        //console.log(event); We are using ctrlKey and metaKey;
        if(event.ctrlKey || event.metaKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>;

};

export default Links;