const EntityLink = ({image, name}) => {
    return (
        <div className={"flex gap-x-2 items-center"}>
            <div><img className={"h-6 w-6 rounded-3xl"} src={`../img/tokens/${image}`}/></div>
            <div><a className={"cursor-pointer border-primary hover:border-b"}>{name}</a></div>
        </div>
    );
};
export default EntityLink;
