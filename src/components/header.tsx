import CallButton from "./CallButton";
export default function Header() {
    return (
        <>
        <div className="h-16 bg-black text-white flex items-center justify-center font-bold text-500">
            Welcome to Pack3000 !
        </div>

        <div className='h-auto w-auto max-w-full rounded-lg shadow-lg mx-auto my-4 flex justify-center items-center'>

            <CallButton />
        </div>
        </>
    );
}