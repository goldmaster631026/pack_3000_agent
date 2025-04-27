import CallButton from "./CallButton";
export default function Header() {
    return (
        <div className="fixed top-0 w-full left-0">
        <div className="h-16 bg-black text-white flex items-center justify-center text-center font-bold px-4 py-4" >
            Welcome to Pack3000 24/7 Call & Chat Support Center !
        </div>

        <div className='h-auto w-auto max-w-full rounded-lg shadow-lg mx-auto my-4 flex justify-center items-center px-4'>

            <CallButton />
        </div>
        </div>
    );
}