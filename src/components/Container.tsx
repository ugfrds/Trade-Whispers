

export default function Container ({children} :{
    children : React.ReactNode;
}

) {

    return(
        <div className= "mx-24 flex flex-col min-h-screen">
            {children}
        </div>

    )

}