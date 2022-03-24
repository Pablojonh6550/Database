import style from './css/Container.modules.css';

function Container( props ) {
    return (
        <div className={`${style.div_container}`}>
            {props.children}
        </div>
    );
}

export default Container;