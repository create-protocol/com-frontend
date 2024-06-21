import Image from "next/image";
import Link from "next/link";

export default function Hero1() {
    return (
        <section className="relative h-screen bg-[#000]/40 dark:bg-[#FFF]/40">
            {/*<Image*/}
            {/*    width={1920}*/}
            {/*    height={1014}*/}
            {/*    src="/img/hero/ico_landing_roadmap.jpg"*/}
            {/*    alt="image"*/}
            {/*    className="absolute inset-0 -z-10 h-full w-full object-cover"*/}
            {/*/>*/}
            <div className="ml-auto mr-auto h-full max-w-[91rem] lg:max-w-[85rem] px-4">
                <div className="grid h-full items-center gap-4 md:grid-cols-12">
                    <div
                        className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start lg:py-20">
                        <h1 className="mb-6 text-center font-display text-3xl text-white md:text-left lg:text-4xl">
                            Introducing the Create Protocol: Revolutionizing AI-Driven Creativity
                        </h1>
                        <p className="mb-8 text-center text-lg text-white md:text-left">
                            The Create Protocol revolutionizes the digital creative landscape by introducing the
                            innovative concept of Decentralized QLora Fine-tuning and the groundbreaking Creative Object
                            Model (COM) standard. This cutting-edge platform empowers artists, protecting their
                            intellectual property while enabling seamless integration of AI models through personalized
                            fine-tuning, fostering a new era of dynamic, interactive creativity. </p>
                        <div className="flex space-x-4">
                            <Link
                                href="/explore"
                                className="rounded-full bg-[#03b56a] py-3 px-8 text-center font-semibold text-white shadow-[#03b56a]-volume transition-all hover:bg-[#03b56a]-dark"
                            >
                                Get Started
                            </Link>
                            {/*<Link*/}
                            {/*  href="/explore"*/}
                            {/*  className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"*/}
                            {/*>*/}
                            {/*  Learn More*/}
                            {/*</Link>*/}
                        </div>
                    </div>
                    <div className="relative col-span-6 col-start-7 hidden h-full md:flex items-center justify-center">
                        <img src='/img/anim-logo.png' alt='anim' className='mt-12 lg:mt-20'/>
                        <div className="absolute bottom-[20%] left-20 animate-fly">
                            <div
                                className="flex items-center space-x-4 rounded-2lg bg-[#03b56a]/50 p-2.5 pr-6 pl-6 backdrop-blur-md">
                                {/*<div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">*/}
                                {/*  <Image*/}
                                {/*    width={48}*/}
                                {/*    height={48}*/}
                                {/*    src="/img/chains/polygon@2x.png"*/}
                                {/*    alt="image"*/}
                                {/*    className="max-w-[50%]"*/}
                                {/*  />*/}
                                {/*</div>*/}
                                <span className="font-display text-sm text-white">ART</span>
                                {/*<span className="font-display text-sm text-white/40">PY</span>*/}
                            </div>
                        </div>
                        <div className="absolute right-8 top-1/2 animate-fly">
                            <div
                                className="flex items-center space-x-4 rounded-2lg bg-[#62688F]/50 p-2.5 pr-6 pl-6 backdrop-blur-md">
                                {/*<div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">*/}
                                {/*  <Image*/}
                                {/*    width={48}*/}
                                {/*    height={48}*/}
                                {/*    src="/img/chains/ethereum@2x.png"*/}
                                {/*    alt="image"*/}
                                {/*    className="max-w-[50%]"*/}
                                {/*  />*/}
                                {/*</div>*/}
                                <span className="font-display text-sm text-white">
                  Music
                </span>
                                {/*<span className="font-display text-sm text-white/40">ETH</span>*/}
                            </div>
                        </div>
                        <div className="absolute right-1/3 top-1/4 animate-fly">
                            <div
                                className="flex items-center space-x-4 rounded-2lg bg-[#000000]/50 p-2.5 pr-6 pl-6 backdrop-blur-md">
                                {/*<div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">*/}
                                {/*  <Image*/}
                                {/*    width={48}*/}
                                {/*    height={48}*/}
                                {/*    src="/img/chains/bitcoin@2x.png"*/}
                                {/*    alt="image"*/}
                                {/*    className="max-w-[50%]"*/}
                                {/*  />*/}
                                {/*</div>*/}
                                <span className="font-display text-sm text-white">Text</span>
                                {/*<span className="font-display text-sm text-white/40">BTC</span>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
