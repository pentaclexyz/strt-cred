const Button = ({ children, onClick, loading }) => {
    return <button className='rounded-2xl bg-primary px-4 py-2 text-xs text-txt-inverted' onClick={!loading ? onClick : () => { }}>
        {
            loading ?
                <div className='Button-loader'>
                    <img src='/spinner.svg' alt='Loading...'/>
                </div> : null
        }
        {children}
    </button>
};

export default Button;