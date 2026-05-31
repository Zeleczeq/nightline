export default function CarGallery({
    images
}:{
    images:string[]
}){

    return(

        <div className="grid gap-4">

            <img
                src={images[0]}
                className="
                w-full
                h-[600px]
                object-cover
                rounded-3xl
                "
            />

            <div className="grid grid-cols-3 gap-4">

                {images.slice(1).map((image,index)=>(
                    <img
                        key={index}
                        src={image}
                        className="
                        h-[200px]
                        w-full
                        object-cover
                        rounded-2xl
                        "
                    />
                ))}

            </div>

        </div>

    );

}