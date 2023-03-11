const PageHeading = ({heading}) => {
    return (
        <article className="px-2 sm:px-4 sm:pb-4 mx-auto max-w-7xl">
            <div className="col-span-12 mt-2 sm:mt-4 text-center">
                <h1 className={"py-4 md:text-6xl capitalize"}>{heading}</h1>
            </div>
        </article>
    );
};
export default PageHeading;
