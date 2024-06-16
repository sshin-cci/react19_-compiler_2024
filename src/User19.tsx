type UserProps = {
    user: { name: string };
    onNameClick: () => void;
};

const User19 = (props: UserProps) => {
    console.log("User component rendered");
    return <div onClick={props.onNameClick}>Hello {props.user.name}</div>;
};

export default User19