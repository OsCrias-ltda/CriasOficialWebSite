import Navbar from "@/component/rayh/Navbar";

export default function RayhHome(){

    return(
        <main>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images2.alphacoders.com/132/1329016.png)'}}>
            <div className="hero-overlay bg-opacity-65"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Rayh</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}