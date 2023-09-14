import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; // 공백을 추가하여 클래스를 올바르게 연결합니다.
    return <div className={classes}>{props.children}</div>;
};

export default Card;
