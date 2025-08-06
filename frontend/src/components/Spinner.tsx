export function Spinner(){

    return(
        <div>
            <div className="animate-spin inline-block w-4 h-4 border-3 border-blue-500 border-t-transparent rounded-full"
            role="status"
            aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
                    
        </div>
    )
}