import Link from "next/link";

const EntityLink = ({image, name, type, bio}) => {
    return (
        <Link href={`profile/${name}`}>
            <div className={"flex gap-x-2 items-center"}>
                <div><img className={"h-6 w-6 rounded-3xl"} src={`../img/tokens/${image}`}/></div>
                <div><a className={"cursor-pointer border-primary capitalize hover:border-b"}>{name}</a></div>
            </div>
        </Link>
    );
};
export default EntityLink;
