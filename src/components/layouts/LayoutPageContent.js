const LayoutPageContent = ({children}) => {
    return (
        <section className={"px-2 pb-4 rounded-b-2xl md:px-4 pb-4 mx-auto max-w-7xl"}>
            <div className={"whitespace-pre-wrap md:grid md:grid-cols-12 md:gap-x-4"}>
                {children}
            </div>
        </section>
    );
};

export default LayoutPageContent;
