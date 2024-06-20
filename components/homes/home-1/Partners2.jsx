import {partners2} from "@/data/partnars";
import Image from "next/image";

export default function Partners2() {
    return (
        <section className="overflow-hidden py-24 dark:bg-[#000]">
            <div className="container">
                <div className="mx-auto mb-14 max-w-xl text-center">
                    <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                        They trust Us
                    </h2>
                    <p className="text-lg dark:text-jacarta-300">
                        Create Protocol has garnered the trust and support of renowned industry leaders, artists, and
                        innovators who recognize the transformative potential of this groundbreaking platform. Join the
                        forefront of the AI-driven creative revolution and experience the future of digital artistry
                        today.
                    </p>
                </div>
            </div>
            <div className="mb-8 flex animate-marqueeRight space-x-8">
                {partners2.slice(0, 14).map((elm, i) => (
                    <div
                        key={i}
                        className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6"
                    >
                        <Image width={252} height={92} src={elm.img} alt="image"/>
                    </div>
                ))}
            </div>
            <div className="flex animate-marquee space-x-8">
                {partners2.slice(14).map((elm, i) => (
                    <div
                        key={i}
                        className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6"
                    >
                        <Image width={252} height={92} src={elm.img} alt="image"/>
                    </div>
                ))}
            </div>
        </section>
    );
}
