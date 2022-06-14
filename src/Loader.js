function Loader() {
    return (
        <div>
            <img className='img' src={process.env.PUBLIC_URL + '/images/loader.svg'}></img>
            <p className="loaderP">Les Bières Arrivent ... 🍻</p>
        </div>
    )
}

export default Loader
