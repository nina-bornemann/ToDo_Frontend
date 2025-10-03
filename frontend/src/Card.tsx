type CardProps = {
    description:string,
    status:string,

}

export default function Card(props:Readonly<CardProps>) {


    return (
        <>

            <div className={"flex flex-col gap-4 rounded-2xl bg-zinc-700 w-72"}>
                <p>{props.description}</p>
                <p>{props.status}</p>
                <button className={"mx-16"}>Details</button>
                <button className={"mx-16"}>Advance</button>
            </div>

        </>
    )
}