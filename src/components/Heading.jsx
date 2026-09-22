export default function Heading(props) {
    // nem lehet async, DE! IIFE
    ( async ()=>{
        try {
            await fetch("https://qkacmatyi.ro")
        }
        catch (error) {
            console.warn(error)
        }
    } )()

    return <h1>My heading</h1>
}