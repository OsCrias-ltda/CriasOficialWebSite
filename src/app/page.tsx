import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://png.pngtree.com/background/20230606/original/pngtree-brightly-colored-tree-with-water-reflecting-on-the-top-in-a-picture-image_2881670.jpg)'}}>
        <div className="hero-overlay bg-opacity-65"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Crias Ltda</h1>
          </div>
        </div>
      </div>
    </main>
  )
}
